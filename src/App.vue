<script setup>
</script>

<template>
  <section v-if="!gameStart">
    <form @submit.prevent="formSend">
      <h1>Battleship</h1>
      <div class="form-group">
        <label>Player 1</label>
        <input v-model="player1" type="text" placeholder="Enter the name of player 1" class="form-control" required>
      </div>
      <div class="form-group">
        <label>Player 2</label>
        <input v-model="player2" type="text" placeholder="Enter the name of player 2" class="form-control" required>
      </div>
      <div class="form-group">
        <label>Mode</label>
        <select v-model="selectedMapSize" class="form-control">
          <option v-for="opt in mapSizeOptions" :key="opt.value" :value="opt.value">{{ opt.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn">
           <font-awesome-icon icon="fa-solid fa-anchor" />
            Start Game
        </button>
      </div>
    </form>
  </section>
  <section v-if="gameStart">
    <div v-for="map, mapIdx in maps" :key="map.name">
      <section v-if="gameRound % 2 == mapIdx" :class="[{ 'place-ship-mode': map.placeShipMode}, {'attack-mode': !map.placeShipMode }, 'text-center']">
        <h1 v-if="gameOn">
          <span v-if="map.placeShipMode">
            <span :style="{ 'color': getPlayerColor(map.name) }">
              {{ map.name }}
            </span>,
            deploy your ships.
          </span>
          <span v-if="!map.placeShipMode">
            <span :style="{ 'color': getPlayerColor(maps[(gameRound+1) % 2].name) }">
            {{ maps[(gameRound+1) % 2].name }}
            </span>,
            it's your turn to attack.
          </span>
        </h1>
        <h1 v-if="!gameOn">
          Game over! The winner is
          <span :style="{ 'color': getPlayerColor(winner) }">
            {{ winner }}
          </span>
          ！ 
          <br>
          <button class="btn" @click="reloadGame">
            <font-awesome-icon icon="fa-solid fa-power-off" />
            Restart Game
          </button>
          <a class="btn btn-black" href="https://github.com/andy19910102/vue-battleship" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" />
            Github Repo
          </a>
        </h1>
        <div v-if="map.placeShipMode">
          <button class="btn" @click="changeDirection(map)">
            <font-awesome-icon icon="fa-solid fa-rotate" />
            Turn direction
          </button>
        </div>
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
      </section>
    </div>
  </section>
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
      gameStart: false,
      gameOn: true,
      gameRound: 0,
      width: 5,
      height: 5,
      maps: [],
      grids: [],
      winner: "",
      explosionImage: explosionImage,
      seaImage: seaImage,
      player1: "Player 1",
      player2: "Player 2",
      selectedMapSize: 5,
      mapSizeOptions: [
        { value: 5, name: "5x5" },
        { value: 7, name: "7x7" },
        { value: 9, name: "9x9" }
      ]
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
            alert(`${map.name} has deployed all the ships.`)
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
          alert(`Game over! The winner is ${this.winner}`);
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
    formSend() {
      const vm = this;
      const player1Map = new Map(vm.player1, vm.selectedMapSize, this.selectedMapSize);
      const player2Map = new Map(vm.player2, vm.selectedMapSize, this.selectedMapSize);
      vm.maps = [player1Map, player2Map];
      vm.gameStart = !vm.gameStart;
    }
  },
  created() {
    // const vm = this;
    // const playerMap = new Map("玩家1", this.width, this.height);
    // const comMap = new Map("玩家2", this.width, this.height);
    // vm.maps = [playerMap, comMap];
  },
};
</script>