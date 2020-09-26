<template lang='pug'>
.square
  span.example {{ message }}
  MyButton
</template>

<script>
import {Vue, Options} from 'vue-class-component';

import MyButton from './MyButton.vue'

@Options({
  components: {
    MyButton
  }
})
export default class Example extends Vue {
  message = 'Hello, for example...'
}
</script>

<style scoped>
  .square {
    background-color: saddlebrown;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .example {
    width: 80px;
    color: green;
  }
</style>