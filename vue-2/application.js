import Vue from 'vue'

import Root from './root.vue'
import NameService from '../services/name'

const nameService = NameService(localStorage)

new Vue({
  el: '#vue-entry',

  render(h) {
    return h(Root, {
      props: {
        nameService
      }
    })
  }
})
