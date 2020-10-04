<template lang="pug">
.modal__mask
  .modal__container
    slot
</template>

<script lang='ts'>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import { mapState } from 'vuex';

@Component
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