<template lang="pug">
div
  button.modal__close-button(v-on:click="$emit('close')")
    img(src='img/cross.svg')
  span.modal__title Биоробот произведён
  span.modal__subtitle Поздравляем!
  span.modal__subtitle.modal__subtitle_two Вы произвели биоробота
</template>

<script lang='ts'>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class ModalRobotCreated extends Vue {}
</script>