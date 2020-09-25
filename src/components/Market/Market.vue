<template lang="pug">
.block
  span.rubric Рынок комплектующих
  .container
    MarketCard(
      pic='img/biomechanism/biomechanism_market.svg' 
      title='Биомеханизм' 
      :cost = 'stock.biomechanism.cost' 
      v-on:buy="$store.commit('buyBiomechanism',stock.biomechanism.cost)"
    )
    MarketCard(
      pic='img/processor/processor_market.svg' 
      title='Процессор' 
      :cost = 'stock.processor.cost' 
      v-on:buy="$store.commit('buyProcessor',stock.processor.cost)"
    )
    MarketCard(
      pic='img/soul/soul_market.svg' 
      title='Душа' 
      :cost = 'stock.soul.cost' 
      v-on:buy="$store.commit('buySoul',stock.soul.cost)"
    )
</template>

<script>
  import { mapState } from 'vuex';

  import MarketCardVue from './MarketCard.vue';
  export default {
    computed:{
      ...mapState([
        'stock',
      ])
    },
    components: {
      'MarketCard': MarketCardVue,
    },
  }
</script>
