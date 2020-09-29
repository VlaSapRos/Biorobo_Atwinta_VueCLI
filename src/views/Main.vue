<template lang="pug">
.main__container
  Modal(v-if='modalVisibility' v-on:close="modalVisibility=false; $store.commit('reset')") 
  MyHeader
  InfoBlock
  Wallet(v-on:overHundred="showModal('OverHundred')")
  Market
  Stock(v-on:overHundred="showModal('OverHundred')")
  Manufacture(v-on:robotCreated="showModal('RobotCreated')")
</template>

<script> 
import { Vue, Options } from 'vue-class-component';

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
    },})
    
  export default class Main extends Vue{
    modalVisibility = false;
    modalProps = '';

    showModal(type){
      switch (type) {
        case 'OverHundred' : this.$store.commit('isOverHundred'); break;
        case 'RobotCreated' : this.$store.commit('isRobotCreated'); break;
      }
      console.log(type);
      this.modalVisibility = true;
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