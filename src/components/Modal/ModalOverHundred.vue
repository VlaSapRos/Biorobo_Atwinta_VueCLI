<template lang="pug">
div
  img.pic(src='img/coin/bigCoin.svg')
  button.modal__close-button(v-on:click="$emit('close')")
    img(src='img/cross.svg')
  span.modal__title Количество монет ограничено
  span.modal__subtitle Вы не можете нацыганить 
  span.modal__subtitle.modal__subtitle_two более 100 монет biorobo
</template>

<script>
import { Vue, Options } from 'vue-class-component';

@Options({
  emits:[
    'close'
  ],
})
export default class ModalOverHundred extends Vue {}
</script>

<style lang="scss" scoped>
  .pic {
    position: absolute;
    top: 48px;
    right: 419px;
  }
</style>