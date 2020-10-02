<template lang="pug">
div
  .button-sell-border( v-if="skin=='button-sell-border__button'" v-bind:class="{'button-sell-border_disabled': reasonForDisabled }" )
    button( :disabled='reasonForDisabled' :class='skin' @click="$emit('press')" ) {{ value }}
  button( v-else :disabled='reasonForDisabled' :class='skin' @click="$emit('press')" ) {{ value }}
</template> 

<script lang='ts'>
import { Vue, Options } from 'vue-class-component';

@Options({
  emits:[
    'press'
  ],
  props:{
    skin:'',
    value:'',
    reasonForDisabled:'',
  },
})
export default class MyButton extends Vue {}
</script>

<style lang="scss" scoped>

  
</style>
