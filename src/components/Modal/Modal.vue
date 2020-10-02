<template lang="pug">
.modal__mask
  .modal__container
    slot
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';



@Options({
  emits:[
    'close'
  ],
  computed:{
    ...mapState([
      'isOverHundred',
      'isRobotCreated',
    ])
  },
})
export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
  .modal__mask {
    position: absolute;
    z-index: 9998;
    width: 1440px;
    height: 100%;
    top: 0px;
    left: 0px;
    margin: 0px;
    background: rgba(26, 26, 26, 0.67);
  }
  .modal__container {
    position: fixed;
    width: 496px;
    height: 240px;
    left: calc(50% - 248px);
    top: calc(50% - 120px);
    background: #FFFFFF;
    border-radius: 10px;
  }
  
</style>