<template lang="pug">
.card
  span.card__title {{ title }}
  span.card__subtitle.card__subtitle_StockCard Стоимость: {{ cost }} монет
  span.card__quantity {{ quantity }} шт
  MyButton( skin='button-sell-border__button' :reasonForDisabled="quantity < 1" value='Продать' v-on:press="$emit((wallet.amountCoins+cost <= 100) ? 'sell' : 'overHundred')" )
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';

import MyButton from '@/components/MyButton.vue';

@Options({
  emits:[
    'overHundred',
    'sell',
  ],
  props: {
    title: '',
    quantity: '',
    cost: 0,
    thing: '',
  },
  computed: {
    ...mapState([
      'wallet',
    ]),
  },
  components: {
    MyButton,
  }
})
export default class StockCard extends Vue {}
</script>

<style lang="scss" scoped>

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

  .card__subtitle_stockcard {
    margin-bottom: 15px;
  }

  .card {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 236px;
  }

</style>
