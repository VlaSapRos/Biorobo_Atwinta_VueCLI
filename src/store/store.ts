import Vue from 'vue';
import { createStore } from 'vuex';

import stock from './modules/stock'

export default createStore({
  state: {
    amountCoins: 0,
    robotIsCreated: false,
    flags:{
      biomechanism: [false,false,false,false],
      processor: [false,false,false,false],
      soul: [false,false,false,false],
    } 
  },
  actions: {
    buyBiomechanism(context) {
      context.commit('buy', stock.state.biomechanism.cost)
      context.commit('addBiomechanism')
    },
    buyProcessor(context) {
      context.commit('buy', stock.state.processor.cost)
      context.commit('addProcessor')
    },
    buySoul(context) {
      context.commit('buy', stock.state.soul.cost)
      context.commit('addSoul')
    },
    sellBiomechanism(context) {
      context.commit('sell', stock.state.biomechanism.costOfSale)
      context.commit('removeBiomechanism')
    },
    sellProcessor(context) {
      context.commit('sell', stock.state.processor.costOfSale)
      context.commit('removeProcessor')
    },
    sellSoul(context) {
      context.commit('sell', stock.state.soul.costOfSale)
      context.commit('removeSoul')
    },
  },
  mutations: {
    buy(state, cost){
      state.amountCoins -= cost;
    },
    sell(state, cost){
      state.amountCoins += cost;
    },
    addCoins (state, count) {
      state.amountCoins += count;
    },
    createRobot (state, costRobots) {
      state.amountCoins -= costRobots;
      stock.state.biomechanism.quantity -= stock.state.biomechanism.need;
      stock.state.processor.quantity -= stock.state.processor.need;
      stock.state.soul.quantity -= stock.state.soul.need;
      state.robotIsCreated = true;
    },
    selectedBiomechanism (state, index) {
      Vue.set(state.flags.biomechanism, index, true)
    },
    unSelectedBiomechanism (state, index) {
      Vue.set(state.flags.biomechanism, index, false)
    },
    selectedProcessor (state, index) {
      Vue.set(state.flags.processor, index, true)
    },
    unSelectedProcessor (state, index) {
      Vue.set(state.flags.processor, index, false)
    },
    selectedSoul (state, index) {
      Vue.set(state.flags.soul, index, true)
    },
    unSelectedSoul (state, index) {
      Vue.set(state.flags.soul, index, false)
    },
    reset (state) {
      state.robotIsCreated = false;
      state.flags = {
        biomechanism: [false,false,false,false],
        processor: [false,false,false,false],
        soul: [false,false,false,false], 
      }
    },
  },
  modules:{
    stock,
  }
})