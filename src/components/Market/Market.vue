<template lang="pug">
.block
  span.rubric Рынок комплектующих
  .container
    Card(
      pic='img/biomechanism/biomechanism_market.svg' 
      title='Биомеханизм' 
      :cost = 'stock.biomechanism.cost' 
      v-on:buy="$store.dispatch('buyBiomechanism')"
      cardType='market'
    )
    Card(
      pic='img/processor/processor_market.svg' 
      title='Процессор' 
      :cost = 'stock.processor.cost' 
      v-on:buy="$store.dispatch('buyProcessor')"
      cardType='market'
    )
    Card(
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

import Card from "@/components/Uikit/Card.vue";

@Options({
  computed:{
    ...mapState([ 
      'stock',
    ])
  },
  components: {
    Card
  },
})
export default class Market extends Vue {}
</script>

