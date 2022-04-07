import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faChartSimple } from '@fortawesome/free-solid-svg-icons'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
// import { faGlobeStand } from '@fortawesome/free-solid-svg-icons' *restituisce pagina bianca
import { faInbox } from '@fortawesome/free-solid-svg-icons'

import { faAward } from '@fortawesome/free-solid-svg-icons'
// import { faLockKeyhole } from '@fortawesome/free-solid-svg-icons' **restituisce pagina bianca
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library */
library.add(faUserSecret)

library.add(faArrowRight)

library.add(faShareNodes)
library.add(faSuitcase)
library.add(faChartSimple)
library.add(faPlane)
// library.add(faGlobeStand) *restituisce pagina bianca
library.add(faInbox)

library.add(faAward)
// library.add(faLockKeyhole) **restituisce pagina bianca
library.add(faPenToSquare)
library.add(faGraduationCap)


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  render: h => h(App),
}).$mount('#app')
