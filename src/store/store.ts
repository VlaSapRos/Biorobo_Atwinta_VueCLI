import Vue from 'vue';
import { createStore, Store } from 'vuex';

import stock from './modules/stock'
import manufacture from './modules/manufacture'

export default createStore({
  state: {
    amountCoins: 0, // Wallet
  },
  actions: {
    buyBiomechanism(context) { // Market
      context.commit('buy', stock.state.biomechanism.cost);
      context.commit('addBiomechanism');
    },
    buyProcessor(context) { // Market
      context.commit('buy', stock.state.processor.cost);
      context.commit('addProcessor');
    },
    buySoul(context) { // Market
      context.commit('buy', stock.state.soul.cost);
      context.commit('addSoul');
    },
    sellBiomechanism(context) { // Stock
      context.commit('sell', stock.state.biomechanism.costOfSale);
      context.commit('removeBiomechanism', 1);
    },
    sellProcessor(context) { // Stock
      context.commit('sell', stock.state.processor.costOfSale);
      context.commit('removeProcessor', 1);
    },
    sellSoul(context) { // Stock
      context.commit('sell', stock.state.soul.costOfSale);
      context.commit('removeSoul', 1);
    },
    buildRobot(context) { // Manufacture
      context.commit('createRobot');
      context.commit('removeBiomechanism', stock.state.biomechanism.need);
      context.commit('removeProcessor', stock.state.processor.need);
      context.commit('removeSoul', stock.state.soul.need);
    },

  },
  mutations: {
    buy(state, cost){ // Market
      state.amountCoins -= cost;
    },
    sell(state, cost){ // Stock
      state.amountCoins += cost;
    },
    addCoins (state, count) { // Wallet
      state.amountCoins += count;
    },
  },
  modules:{
    stock,
    manufacture,
  }
})