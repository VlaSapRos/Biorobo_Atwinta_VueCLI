<template lang="pug">
.block
  span.rubric Рынок комплектующих
  .container
    MarketCard(
      pic='img/biomechanism/biomechanism_market.svg' 
      title='Биомеханизм' 
      :cost = 'stock.biomechanism.cost' 
      v-on:buy="$store.dispatch('buyBiomechanism')"
    )
    MarketCard(
      pic='img/processor/processor_market.svg' 
      title='Процессор' 
      :cost = 'stock.processor.cost' 
      v-on:buy="$store.dispatch('buyProcessor')"
    )
    MarketCard(
      pic='img/soul/soul_market.svg' 
      title='Душа' 
      :cost = 'stock.soul.cost' 
      v-on:buy="$store.dispatch('buySoul')"
    )
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';

import MarketCard from '@/components/Market/MarketCard.vue';

@Options({
  computed:{
    ...mapState([
      'stock',
    ])
  },
  components: {
    MarketCard,
  },
})
export default class Market extends Vue {}
</script>

