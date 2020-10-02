<template lang="pug">
.card
  .card__picture( v-if="cardType == 'market'" )
    img.card__img(:src='pic')
  span.card__title {{ title }}
  span.card__subtitle( v-bind:class="{card__subtitle_StockCard: (cardType == 'stock')}" ) Стоимость: {{ cost }} монет
  span.card__quantity( v-if="cardType == 'stock'") {{ quantity }} шт
  MyButton( :skin='buttonSkin' :value='buttonValue' :reasonForDisabled='buttonReasonForDisabled' v-on:press="clicked(cardType)" )
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';

import MyButton from '@/components/MyButton.vue';

@Options({
  emits:[
    'overHundred',
    'sell',
    'buy',
  ],
  props: {
    cardType: '',
    pic: null,
    quantity: '',
    title: '',
    cost: 0,
  },
  computed: {
    ...mapState([
      'wallet',
    ]),
    buttonSkin() {     
      if (this.cardType == 'market') { return 'button-install'
      } else if (this.cardType == 'stock') { return 'button-sell-border__button'}
    },
    buttonValue() {
      if (this.cardType == 'market') { return 'Установить'
      } else if (this.cardType == 'stock') { return 'Продать'}
    },
    buttonReasonForDisabled() {
      if (this.cardType == 'market') { return (this.wallet.amountCoins < this.cost)
      } else if (this.cardType == 'stock') { return (this.quantity < 1)}
    },
  },
  components: {
    MyButton,
  }
})
export default class MyCard extends Vue {
  clicked(type){
    if(type == 'market') {
      this.$emit('buy')
    } else if (type == 'stock') {
      this.$emit((this.wallet.amountCoins+this.cost <= 100) ? 'sell' : 'overHundred')
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    width: 236px;
  }

  .card__title {
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: #FFFFFF;
    height: 32px;
    margin-bottom: 5px;
  }

  .card__subtitle {
    font-family: 'Montserrat_regular';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #A3B8CC;
    margin-bottom: 24px;
  }
  .card__subtitle_stockcard {
    margin-bottom: 15px;
  }

  .card__picture {
    width: 236px;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 25px;
    filter: drop-shadow(0px 0px 35px rgba(255, 127, 34, 0.8));
  }
  .card__img {
    filter: drop-shadow(0px 0px 75px rgba(255, 127, 34, 0.5))
  }

  .card__quantity {
    width: 236px;
    height: 24px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
</style>