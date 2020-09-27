<template lang="pug">
.myheader
  img(src='img/pac-man.svg')
  a.button-create.button-scroll(href='#manufacture') Произвести биоробота
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';

@Options({
  computed: mapState ([
    'coinsText'
  ])
})
export default class MyHeader extends Vue{}
</script>

<style lang="scss">
  .myheader{
    display: flex;
    justify-content: space-between;
    height: 48px ;
  }

</style>