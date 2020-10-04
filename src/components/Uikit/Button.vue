<template lang="pug">
div
  .button-sell-border( v-if="skin=='button-sell-border__button'" v-bind:class="{'button-sell-border_disabled': reasonForDisabled }" )
    button( :disabled='reasonForDisabled' :class='skin' @click="$emit('press')" ) {{ value }}
  button( v-else :disabled='reasonForDisabled' :class='skin' @click="$emit('press')" ) {{ value }}
</template> 

<script lang='ts'>
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop(String) readonly skin: ''
  @Prop(String) readonly value: ''
  @Prop(Boolean) readonly reasonForDisabled: true
}
</script>

<style lang="scss" scoped>

  
</style>
