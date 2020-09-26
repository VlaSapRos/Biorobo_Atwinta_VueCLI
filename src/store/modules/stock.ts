import {IDetails} from '../../ts/interfaces'

export default {
  state: {
    biomechanism : {
      cost: 7,
      costOfSale: 5,
      quantity:0,
      need:4,
    } as IDetails,
    processor : {
      cost: 5,
      costOfSale: 3,
      quantity:0,
      need:4,
    } as IDetails,
    soul : {
      cost: 25,
      costOfSale: 15,
      quantity:0,
      need:1,
    } as IDetails,
  },
  mutations:{
    addBiomechanism(state:any){
      state.biomechanism.quantity++
    },
    addProcessor(state:any){
      state.processor.quantity++
    },
    addSoul(state:any){
      state.soul.quantity++
    },
    removeBiomechanism(state:any){
      state.biomechanism.quantity--
    },
    removeProcessor(state:any){
      state.processor.quantity--
    },
    removeSoul(state:any){
      state.soul.quantity--
    },
  },
}
