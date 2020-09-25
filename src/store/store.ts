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
  mutations: {
    addCoins (state, count) {
      state.amountCoins += count;
    },
    buyBiomechanism (state,cost) {
      stock.state.biomechanism.quantity++;
      state.amountCoins -= cost;
    },
    buyProcessor (state,cost) {
      stock.state.processor.quantity++;
      state.amountCoins -= cost;
    },
    buySoul (state,cost) {
      stock.state.soul.quantity++;
      state.amountCoins -= cost;
    },
    sellBiomechanism (state,cost) {
      stock.state.biomechanism.quantity--;
      state.amountCoins += cost;
    },
    sellProcessor (state,cost) {
      stock.state.processor.quantity--;
      state.amountCoins += cost;
    },
    sellSoul (state,cost) {
      stock.state.soul.quantity--;
      state.amountCoins += cost;
    },
    createRobot (state, costRobots) {
      state.amountCoins -= costRobots;
      stock.state.biomechanism.quantity -= stock.state.biomechanism.need;
      stock.state.processor.quantity -= stock.state.processor.need;
      stock.state.soul.quantity -= stock.state.soul.need;
      state.robotIsCreated = true;
    },
    // selectedBiomechanism (state, index) {
    //   Vue.set(state.flags.biomechanism, index, true)
    // },
    // unSelectedBiomechanism (state, index) {
    //   Vue.set(state.flags.biomechanism, index, false)
    // },
    // selectedProcessor (state, index) {
    //   Vue.set(state.flags.processor, index, true)
    // },
    // unSelectedProcessor (state, index) {
    //   Vue.set(state.flags.processor, index, false)
    // },
    // selectedSoul (state, index) {
    //   Vue.set(state.flags.soul, index, true)
    // },
    // unSelectedSoul (state, index) {
    //   Vue.set(state.flags.soul, index, false)
    // },
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