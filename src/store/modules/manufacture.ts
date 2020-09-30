import {IFlags} from '@/ts/interfaces';

export default {
  state: {
    costRobot: 10 as Number,
    robotIsCreated: false as Boolean,
    flags:{
      biomechanism: [false,false,false,false],
      processor: [false,false,false,false],
      soul: [false,false,false,false],
    } as IFlags,
  },
  mutations: {
    createRobot (state:any) {
      state.amountCoins -= state.costRobot;
      state.robotIsCreated = true;
    },
    selectedBiomechanism (state:any, index:number) {
      state.flags.biomechanism[index] = true;
    },
    unSelectedBiomechanism (state:any, index:number) {
      state.flags.biomechanism[index] = false;
    },
    selectedProcessor (state:any, index:number) {
      state.flags.processor[index] = true;
    },
    unSelectedProcessor (state:any, index:number) {
      state.flags.processor[index] = false;
    },
    selectedSoul (state:any, index:number) {
      state.flags.soul[index] = true;
    },
    unSelectedSoul (state:any, index:number) {
      state.flags.soul[index] = false;
    },
    reset (state:any) {
      state.robotIsCreated = false;
      state.flags = {
        biomechanism: [false,false,false,false],
        processor: [false,false,false,false],
        soul: [false,false,false,false], 
      }
    },
  }
}