<template lang="pug">
.myheader
  img(src='img/pac-man.svg')
  a.button-create.button-scroll(href='#manufacture') Произвести биоробота
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    computed: mapState ([
      'coinsText'
    ])
  };
</script>

<style lang="scss">
  .myheader{
    display: flex;
    justify-content: space-between;
    height: 48px ;
  }

</style>