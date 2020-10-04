<template lang="pug">
.header
  img(src='img/pac-man.svg')
  a.button-create.button-scroll(href='/#manufacture') Произвести биоробота
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue{}
</script>

<style lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    height: 48px ;
  }

</style>