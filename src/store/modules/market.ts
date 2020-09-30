import { mapState } from 'vuex';

export default {
  actions: {
    buyBiomechanism({rootState,commit}:any) { // Market
      commit('subtractCoins', rootState.stock.biomechanism.cost);
      commit('addBiomechanism');
    },
    buyProcessor({rootState,commit}:any) { // Market
      commit('subtractCoins', rootState.stock.processor.cost);
      commit('addProcessor');
    },
    buySoul({rootState,commit}:any) { // Market
      commit('subtractCoins', rootState.stock.soul.cost);
      commit('addSoul');
    },
  },
  mutations: {},
}