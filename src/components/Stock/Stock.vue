<template lang="pug">
.block
  span.rubric Склад
  .container
    Card(
      :quantity='stock.biomechanism.quantity'
      title='Биомеханизм'
      :cost='stock.biomechanism.costOfSale'
      v-on:sell="$store.dispatch('sellBiomechanism'); (stock.biomechanism.quantity < 4) ? unSelectBiomechanismStock(stock.biomechanism.quantity) : null"
      v-on:overHundred="$emit('overHundred')"
      cardType="stock"
    )
    Card(
      :quantity='stock.processor.quantity'
      title='Процессор'
      :cost='stock.processor.costOfSale'
      v-on:sell="$store.dispatch('sellProcessor'); (stock.processor.quantity < 4) ? unSelectProcessorStock(stock.processor.quantity) : null"
      v-on:overHundred="$emit('overHundred')"
      cardType="stock"
    )
    Card(
      :quantity='stock.soul.quantity'
      title='Душа'
      :cost='stock.soul.costOfSale'
      v-on:sell="$store.dispatch('sellSoul'); (stock.soul.quantity < 4) ? unSelectSoulStock(stock.soul.quantity) : null"
      v-on:overHundred="$emit('overHundred')"
      cardType="stock"
    )
</template>

<script lang='ts'>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { mapState } from 'vuex';

import Card from "@/components/Uikit/Card.vue";

@Component({
  computed: {
    ...mapState([
      'stock',
    ]),
  },
  components: {
    Card
  },
})
export default class Stock extends Vue {
  stock: any
  $store: any
  unSelectBiomechanismStock(quantity) {
    let difference = 4 - quantity;
    switch (difference) {
      case 1 : this.$store.commit('unSelectedBiomechanism',3); break;
      case 2 : this.$store.commit('unSelectedBiomechanism',2); break;
      case 3 : this.$store.commit('unSelectedBiomechanism',1); break;
      case 4 : this.$store.commit('unSelectedBiomechanism',0); break;
    }
    }
  unSelectProcessorStock(quantity) {
    let difference = 4 - quantity;
    switch (difference) {
      case 1 : this.$store.commit('unSelectedProcessor',3); break;
      case 2 : this.$store.commit('unSelectedProcessor',2); break;
      case 3 : this.$store.commit('unSelectedProcessor',1); break;
      case 4 : this.$store.commit('unSelectedProcessor',0); break;
    }
  }
  unSelectSoulStock(quantity) {
    let difference = 4 - quantity;
    switch (difference) {
      case 1 : this.$store.commit('unSelectedSoul',3); break;
      case 2 : this.$store.commit('unSelectedSoul',2); break;
      case 3 : this.$store.commit('unSelectedSoul',1); break;
      case 4 : this.$store.commit('unSelectedSoul',0); break;
    }
  }
}
</script>