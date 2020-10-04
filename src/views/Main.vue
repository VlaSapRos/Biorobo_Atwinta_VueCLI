<template lang="pug">
.main__container
  Modal( v-if="modalOverHundredVisibility" ) 
    ModalOverHundred( v-on:close="$store.commit('modalOverHundredVisibilityChange', false)" )
  Modal( v-if="modalRobotCreatedVisibility" ) 
    ModalRobotCreated( v-on:close="$store.commit('modalRobotCreatedVisibilityChange', false); $store.commit('reset')" )
  Header
  InfoBlock
  Wallet( v-on:overHundred="$store.commit('modalOverHundredVisibilityChange', true)" )
  Market
  Stock( v-on:overHundred="$store.commit('modalOverHundredVisibilityChange', true)" )
  Manufacture(v-on:robotCreated="$store.commit('modalRobotCreatedVisibilityChange', true)")  
</template>

<script> 
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

import ModalOverHundred from '@/components/Modal/ModalOverHundred.vue';
import ModalRobotCreated from '@/components/Modal/ModalRobotCreated.vue';
import Header from '@/components/Header.vue';
import Wallet from '@/components/Wallet/Wallet.vue';
import Market from '@/components/Market/Market.vue';
import Stock from '@/components/Stock/Stock.vue';
import Manufacture from '@/components/Manufacture/Manufacture.vue';
import Modal from '@/components/Modal/Modal.vue';
import InfoBlock from '@/components/InfoBlock.vue';
  
  @Component({
    computed: {
      ...mapState([
        'modalOverHundredVisibility',
        'modalRobotCreatedVisibility',
      ])
    },
    components: {
      Header,
      Wallet,
      Market,
      Stock,
      Manufacture,
      Modal,
      InfoBlock,
      ModalOverHundred,
      ModalRobotCreated,
    },  
  })
  export default class Main extends Vue{}

</script>

<style lang="scss" scoped>
  .main__container {
    width: 1016px;
    height: 2204px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>