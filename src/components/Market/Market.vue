<template lang="pug">
.block
  span.rubric Рынок комплектующих
  .container
    MyCard(
      pic='img/biomechanism/biomechanism_market.svg' 
      title='Биомеханизм' 
      :cost = 'stock.biomechanism.cost' 
      v-on:buy="$store.dispatch('buyBiomechanism')"
      cardType='market'
    )
    MyCard(
      pic='img/processor/processor_market.svg' 
      title='Процессор' 
      :cost = 'stock.processor.cost' 
      v-on:buy="$store.dispatch('buyProcessor')"
      cardType='market'
    )
    MyCard(
      pic='img/soul/soul_market.svg' 
      title='Душа' 
      :cost = 'stock.soul.cost' 
      v-on:buy="$store.dispatch('buySoul')"
      cardType='market'
    )
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';

import MarketCard from '@/components/Market/MarketCard.vue';
import MyCard from "@/components/MyCard.vue";

@Options({
  computed:{
    ...mapState([ 
      'stock',
    ])
  },
  components: {
    MarketCard,
    MyCard
  },
})
export default class Market extends Vue {}
</script>

