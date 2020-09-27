<template lang="pug">
.main__container
  Modal(v-if='showModal' :modal='modalProps' v-on:close="showModal=false; $store.commit('reset')")
  MyHeader
  InfoBlock
  Wallet(v-on:overHundred="modalTrue('Количество монет ограничено', 'Вы не можете нацыганить', 'более 100 монет biorobo', '/assets/img/coin/bigCoin.svg')")
  Market
  Stock(v-on:overHundred="modalTrue('Количество монет ограничено', 'Вы не можете нацыганить', 'более 100 монет biorobo', '/assets/img/coin/bigCoin.svg')")
  Manufacture(v-on:robotCreated="modalTrue('Биоробот произведён', 'Поздравляем!', 'Вы произвели биоробота', '')")
  Example
</template>

<script> 
import { Vue, Options } from 'vue-class-component';

  import MyHeader from '@/components/MyHeader.vue';
  import Wallet from '@/components/Wallet/Wallet.vue';
  import Market from '@/components/Market/Market.vue';
  import Stock from '@/components/Stock/Stock.vue';
  import Manufacture from '@/components/Manufacture/Manufacture.vue';
  import Modal from '@/components/Modal.vue';
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
    showModal = false;
    modalProps = {
      title : '',
      subtitleOne : '',
      subtitleTwo : '',
      pic : '',
    }
    modalTrue(title,subtitleOne,subtitleTwo,pic){
        this.modalProps.title = title;
        this.modalProps.subtitleOne = subtitleOne;
        this.modalProps.subtitleTwo = subtitleTwo;
        this.modalProps.pic = pic;
        this.showModal = true;
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