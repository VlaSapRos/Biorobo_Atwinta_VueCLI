export default {
  state:{
    amountCoins: 0 as Number,
  },
  mutations: {
    addCoins (state:any, count:number) {
      state.amountCoins += count;
    },
    subtractCoins (state:any, count:number) {
      state.amountCoins -= count;
    },
  },
}