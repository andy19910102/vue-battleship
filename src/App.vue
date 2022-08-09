<script setup>
</script>

<template>
  <div v-for="map, mapIdx in maps" :key="map.name">
    <section v-if="gameRound % 2 == mapIdx" :class="[{ 'place-ship-mode': map.placeShipMode}, {'attack-mode': !map.placeShipMode }, 'text-center']">
      <h1 v-if="gameOn">
        <span v-if="map.placeShipMode">
          請 
          <span :style="{ 'color': getPlayerColor(map.name) }">
            {{ map.name }}
          </span>
          部署船艦
        </span>
        <span v-if="!map.placeShipMode">
          請
          <span :style="{ 'color': getPlayerColor(maps[(gameRound+1) % 2].name) }">
          {{ maps[(gameRound+1) % 2].name }}
          </span>
          開始攻擊!
        </span>
      </h1>
      <h1 v-if="!gameOn">
        遊戲結束！這場遊戲的贏家為 
        <span :style="{ 'color': getPlayerColor(winner) }">
          {{ winner }}
        </span>
        ！ 
        <br>
        <button class="btn" @click="reloadGame">
          <font-awesome-icon icon="fa-solid fa-power-off" />
          點我重新開始
        </button>
        <a class="btn btn-black" href="https://github.com/andy19910102/vue-battleship" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" />
          前往專案首頁
        </a>
      </h1>
      <div class="sea" :style="{ backgroundImage: `url(${seaImage})` }">
        <div v-for="(row, rowIdx) in map.grids" :key="`row${rowIdx}`" class="row">
          <div
            v-for="(grid, gridIdx) in row"
            :key="`row${rowIdx}grid${gridIdx}`"
            class="grid"
          >
            <button
              :class="[
                {
                  'has-ship': grid.hasShip,
                  'has-been-attacked': grid.hasBeenAttacked,
                  'place-ship-preview': grid.placeShipPreview,
                },
              ]"
              @mouseenter="showShipPreview(map,grid)"
              @mouseleave="unshowShipPreview(map,grid)"
              @click="onBtnClick(map, grid)"
              :disabled="grid.disabled"
            >
              <img class="explode-img" v-if="grid.hasBeenAttacked && grid.hasShip" :src="explosionImage">
            </button>
          </div>
        </div>
      </div>
      <div>
        <button v-if="map.placeShipMode" class="btn" @click="changeDirection(map)">
          <font-awesome-icon icon="fa-solid fa-rotate" />
          Turn direction
        </button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/style.scss";
</style>

<script>
class Map {
  constructor(name, width, height) {
    this.name = name;
    this.grids = [];
    this.width = width;
    this.height = height;
    
    this.ships = [
      new Ship(4),
      new Ship(3)
    ];
    this.placeShipMode = true;
    this.placeShipLength = this.ships[0].length;
    this.placeShipDirection = "east";
    this.placedShips = 0;
    this.allowAttack = true;

    this.initGrids();
  }

  get survivalShips() {
    const survivalShips = []
    this.grids.forEach(row => {
      row.forEach(grid => {
        if (grid.hasShip && !grid.hasBeenAttacked) {
          survivalShips.push(grid);
        }
      });
    });
    return survivalShips;
  }

  initGrids () {
    const grids = [];
    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        const grid = new Grid(x, y);
        row.push(grid);
      }
      grids.push(row);
    }
    this.grids = grids
  }
};

class Grid {
  constructor(x, y) {
    this.y = y;
    this.x = x;
    this.disabled = false;
    this.hasShip = false;
    this.placeShipPreview = false;
    this.hasBeenAttacked = false;
  }
};

class Ship {
  constructor(length) {
    this.length = length;
  }
};

import seaImage from "@/assets/images/sea.jpeg"
import explosionImage from "@/assets/images/explosion.png";

export default {
  name: "App",
  data() {
    return {
      gameOn: true,
      gameRound: 0,
      width: 5,
      height: 5,
      maps: [],
      grids: [],
      winner: "",
      explosionImage: explosionImage,
      seaImage: seaImage
    };
  },
  methods: {
    getPlayerColor(name) {
      if (name == this.maps[0].name) {
        return "red";
      } else {
        return "blue";
      }
    },
    reloadGame() {
      window.location.reload();
    },
    onBtnClick(map, grid) {
      if (!this.gameOn) {
        return;
      }
      if (map.placeShipMode) {
        const isSuccess = this.placeShip(
          map,
          grid.x,
          grid.y,
          map.placeShipLength,
          map.placeShipDirection
        );
        if(!isSuccess) {
          return;
        }
        map.placedShips += 1;
        if (map.placedShips >= map.ships.length) {
          
          setTimeout(() => {
            alert(`${map.name}已部署好船艦`)
            map.placeShipMode = false;
            map.placeShipLength = 0;
            this.gameRound += 1;
          }, 100);
        } else {
          map.placeShipLength = map.ships[map.placedShips].length;
        }
      } else {
        this.attack(
          map,
          grid.x,
          grid.y,
        );
      }
    },
    userPlaceShip(map, length) {
      map.placeShipMode = true;
      map.placeShipLength = length;
      map.placeShipDirection = "east";
    },
    changeDirection(map) {
      map.placeShipDirection = map.placeShipDirection == "east" ? "south" : "east";
    },
    showShipPreview(map,grid) {
      if (!map.placeShipMode) {
        return;
      }
      const { x, y } = grid;
      if (map.placeShipDirection == "south") {
        if (y + map.placeShipLength > map.height) {
          return 0;
        }
        for (let i = 0; i < map.placeShipLength; i++) {
          map.grids[y + i][x].placeShipPreview = true;
        }
      } else if (map.placeShipDirection == "east") {
        if (x + map.placeShipLength > map.width) {
          console.log(`Ship can not be place in (${x}, ${y});`);
          return 0;
        }
        for (let i = 0; i < map.placeShipLength; i++) {
          map.grids[y][x + i].placeShipPreview = true;
        }
      }
    },
    unshowShipPreview(map,grid) {
      if (!map.placeShipMode) {
        return;
      }
      const { x, y } = grid;
      if (map.placeShipDirection == "south") {
        if (y + map.placeShipLength > map.height) {
          return 0;
        }
        for (let i = 0; i < map.placeShipLength; i++) {
          map.grids[y + i][x].placeShipPreview = false;
        }
      } else if (map.placeShipDirection == "east") {
        if (x + map.placeShipLength > map.width) {
          return 0;
        }
        for (let i = 0; i < map.placeShipLength; i++) {
          map.grids[y][x + i].placeShipPreview = false;
        }
      }
    },
    attack(map, x, y) {
      if (!map.allowAttack) {
        return;
      }
      map.allowAttack = false;
      const grid = map.grids[y][x];
      const attacker = this.maps[(this.gameRound+1) % 2].name
      grid.hasBeenAttacked = true;
      grid.disabled = true;
      setTimeout(() => {
        map.allowAttack = true;
        if (map.survivalShips <= 0) {
          this.gameOn = false;
          this.winner = attacker;
          alert(`遊戲結束，贏家為${this.winner}`);
          return;
        }
        this.gameRound += 1;
        
      }, 1500);
    },
    placeShip(map, x, y, length, direction) {
      if (direction == "south") {
        if (y + length > map.height) {
          // console.log(`Ship can not be place in (${x}, ${y});`);
          return false;
        }
        for (let i = 0; i < length; i++) {
          map.grids[y + i][x].hasShip = true;
        }
      } else if (direction == "east") {
        if (x + length > map.width) {
          // console.log(`Ship can not be place in (${x}, ${y});`);
          return false;
        }
        for (let i = 0; i < length; i++) {
          map.grids[y][x + i].hasShip = true;
        }
      }
      return true;
    },
  },
  created() {
    const vm = this;
    const playerMap = new Map("玩家1", this.width, this.height);
    const comMap = new Map("玩家2", this.width, this.height);
    vm.maps = [playerMap, comMap];
  },
};
</script>