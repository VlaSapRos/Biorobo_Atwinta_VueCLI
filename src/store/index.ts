import Vue from 'vue'
import Vuex from 'vuex'

import wallet from '@/store/modules/wallet';
import market from '@/store/modules/market';
import stock from '@/store/modules/stock';
import manufacture from '@/store/modules/manufacture';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modalOverHundredVisibility: false as boolean,
    modalRobotCreatedVisibility: false as boolean,
  },
  mutations: {
    modalOverHundredVisibilityChange(state:any, value:boolean) {
      state.modalOverHundredVisibility = value
    },
    modalRobotCreatedVisibilityChange(state:any, value:boolean) {
      state.modalRobotCreatedVisibility = value
    },
  },
  modules:{
    stock,
    manufacture,
    market,
    wallet,
  }
})
