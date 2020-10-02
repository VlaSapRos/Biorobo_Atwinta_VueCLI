<template lang="pug">
.header
  img(src='img/pac-man.svg')
  a.button-create.button-scroll(href='/#manufacture') Произвести биоробота
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';

export default class Header extends Vue{}
</script>

<style lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    height: 48px ;
  }

</style>