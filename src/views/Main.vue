<template lang="pug">
.main__container
  Modal( v-if="modalVisibility[0]" ) 
    ModalOverHundred( v-on:close="modalVisibility[0]=false; $store.commit('reset')" )
  Modal( v-if="modalVisibility[1]" ) 
    ModalRobotCreated( v-on:close="modalVisibility[1]=false; $store.commit('reset')" )
  MyHeader
  InfoBlock
  Wallet( v-on:overHundred="showModal('0')" )
  Market
  Stock( v-on:overHundred="showModal('0')" )
  Manufacture(v-on:robotCreated="showModal('1')")  
</template>

<script> 
import { Vue, Options } from 'vue-class-component';

import ModalOverHundred from '@/components/Modal/ModalOverHundred.vue';
import ModalRobotCreated from '@/components/Modal/ModalRobotCreated.vue';
import MyHeader from '@/components/MyHeader.vue';
import Wallet from '@/components/Wallet/Wallet.vue';
import Market from '@/components/Market/Market.vue';
import Stock from '@/components/Stock/Stock.vue';
import Manufacture from '@/components/Manufacture/Manufacture.vue';
import Modal from '@/components/Modal/Modal.vue';
import InfoBlock from '@/components/InfoBlock.vue';
import Example from '../components/Example.vue';
  
  @Options({
    components: {
      MyHeader,
      Wallet,
      Market,
      Stock,
      Manufacture,
      Modal,
      InfoBlock,
      Example,
      ModalOverHundred,
      ModalRobotCreated,
    },})
    
  export default class Main extends Vue{
    modalVisibility = [ false, false ];
    modalProps = '';

    showModal(i){
      this.modalVisibility[i] = true;
    }
  }

</script>

<style lang="scss" scoped>
  .main__container {
    width: 1016px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2204px;
  }
</style>