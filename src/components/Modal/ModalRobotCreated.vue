<template lang="pug">
div
  button.modal__close-button(v-on:click="$emit('close')")
    img(src='img/cross.svg')
  span.modal__title Биоробот произведён
  span.modal__subtitle Поздравляем!
  span.modal__subtitle.modal__subtitle_two Вы произвели биоробота
</template>

<script>
import { Vue, Options } from 'vue-class-component';

@Options({
  emits:[
    'close'
  ],
})
export default class ModalRobotCreated extends Vue {}
</script>