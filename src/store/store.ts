import Vue from 'vue';
import { createStore, Store } from 'vuex';

import stock from './modules/stock'

export default createStore({
  state: {
    amountCoins: 0,
    robotIsCreated: false,
    flags:{
      biomechanism: [false,false,false,false],
      processor: [false,false,false,false],
      soul: [false,false,false,false],
    },
    costRobot: 10,
  },
  actions: {
    buyBiomechanism(context) {
      context.commit('buy', stock.state.biomechanism.cost);
      context.commit('addBiomechanism');
    },
    buyProcessor(context) {
      context.commit('buy', stock.state.processor.cost);
      context.commit('addProcessor');
    },
    buySoul(context) {
      context.commit('buy', stock.state.soul.cost);
      context.commit('addSoul');
    },
    sellBiomechanism(context) {
      context.commit('sell', stock.state.biomechanism.costOfSale);
      context.commit('removeBiomechanism', 1);
    },
    sellProcessor(context) {
      context.commit('sell', stock.state.processor.costOfSale);
      context.commit('removeProcessor', 1);
    },
    sellSoul(context) {
      context.commit('sell', stock.state.soul.costOfSale);
      context.commit('removeSoul', 1);
    },
    buildRobot(context) {
      context.commit('createRobot');
      context.commit('removeBiomechanism', stock.state.biomechanism.need);
      context.commit('removeProcessor', stock.state.processor.need);
      context.commit('removeSoul', stock.state.soul.need);
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
    createRobot (state) {
      state.amountCoins -= state.costRobot;
      state.robotIsCreated = true;
    },
    selectedBiomechanism (state, index) {
      state.flags.biomechanism[index] = true;
    },
    unSelectedBiomechanism (state, index) {
      state.flags.biomechanism[index] = false;
    },
    selectedProcessor (state, index) {
      state.flags.processor[index] = true;
    },
    unSelectedProcessor (state, index) {
      state.flags.processor[index] = false;
    },
    selectedSoul (state, index) {
      state.flags.soul[index] = true;
    },
    unSelectedSoul (state, index) {
      state.flags.soul[index] = false;
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