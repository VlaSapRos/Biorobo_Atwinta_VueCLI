<template lang="pug">
.block
  span.rubric Кошелёк криптовалют
  .wallet__coin-container
    WalletCoin(v-for="item in coins" :number='item' :wallet='wallet.amountCoins')
  p.wallet__coins <b class='Wallet__coins_bold'>{{ wallet.amountCoins }}</b> {{' biorobo ' + coinsDeclination }}
  .wallet__wrapper
    button.wallet__button-to-gamble(@click="addCoins(checked)") Нацыганить
    input.wallet__input-checkbox(type="checkbox" id="checkbox" v-model="checked")
    label.wallet__label-checkbox(for='checkbox')
    label.wallet__label-checkbox-text(for='checkbox') Цыганить по 5 монет
</template>

<script lang='ts'>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { mapState } from 'vuex';

import WalletCoin from './WalletCoin.vue';

@Component({
  components:{
     WalletCoin,
  },
  computed: {
    ...mapState ([
      'wallet',
    ]),

  },
})
export default class Wallet extends Vue {
  wallet: any
  amountCoins: number
  $store: any
  $emit: any
  checked = false as boolean;
  coins = [] as Array<number>;
  get coinsDeclination() {
    let coinsText = '';
    let amount = this.wallet.amountCoins;
    if (amount != 11 && amount != 12 && amount != 13 && amount != 14) {
      switch (amount % 10) {
        case 1 : coinsText = 'монета'; break;
        case 2 :
        case 3 :
        case 4 : coinsText = 'монеты'; break;
        default : coinsText = 'монет';
      }
    } else { coinsText = 'монет'; }
    return coinsText;
  }
  mounted() : void {
    for (let i=0; i<100; i++){
      this.coins[i]= i;
    }
  }
  addCoins(checked) : void {
    if ((this.wallet.amountCoins + ((checked) ? 5 : 1)) <= 100 ) {
      this.$store.commit('addCoins',(checked) ? 5 : 1)
    } else {
    this.$emit('overHundred');
    }
  }
};
</script>

<style lang="scss" scoped>
  .wallet__coins {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    color: #A3B8CC;
    margin: 0;
    margin-bottom: 43px;
  }
  .wallet__coins_bold {
    font-style: normal;
    font-weight: 1200;
  }
  .wallet__coin-container {
    padding: 0;
    margin-bottom: 23px;
    position: relative;
    height: 20px;
  }
  .wallet__input-checkbox {
    appearance: none;
    position: absolute;
    display: none;
  }
  .wallet__label-checkbox-text {
    position: absolute;
    left: 170px;
    font-weight: 500;
    font-size: 16px;
  }
  .wallet__label-checkbox {
    position: absolute;
    left: 133px;
    width: 24px;
    height: 24px;
    border: 2px solid #A3B8CC;
    box-sizing: border-box;
  }
  .wallet__label-checkbox::after {
    content: '';
    background: url('/img/checked.svg') no-repeat;
    height: 16px;
    width: 16px;
    border-radius: 4px;
    position: absolute;
    left: 3px;
    top: 4px;
    opacity: 0;
  }
  .wallet__input-checkbox:checked + .wallet__label-checkbox::after {
    opacity: 1;
  }
  .wallet__button-to-gamble {
    width: 102px;
    height: 24px;
    padding: 0;
    border: none;
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FF7F22;
    background-color: #222B33;
    border-bottom: FF7F22;
    border-bottom: 1px solid rgba(255, 127, 34, 0.5);
  }
  .wallet__wrapper {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
  }
</style>

