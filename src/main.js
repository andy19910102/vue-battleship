import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faRotate, faPowerOff, faAnchor } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faRotate)
library.add(faPowerOff)
library.add(faAnchor)
library.add(faGithub)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
