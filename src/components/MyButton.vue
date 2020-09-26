<template lang="pug">
button( :class='skin' @click='methodsOne()') {{ message }}
</template>

<script>
import { Vue, Options } from 'vue-class-component';

export default class MyButton extends Vue {
  message = "Don't touch me!"
  bul = true
  skin = 'blue'
  methodsOne() {
    this.bul = !this.bul
    this.skin = (this.bul) ? 'blue' : 'red';
  }
}
</script>

<style lang="scss" scoped>
  .blue {
    background-color: blue;
    color: gray;
    height: 40px;
    width: 80px;
  }
  .red  {
    background-color: red;
    color: black;
    height: 40px;
    width: 80px;
  }
  
</style>
