<template lang="pug">
.block.block_infoblock
  span.infoblock__title Фабрика по производству биороботов
  span.infoblock__subtitle класса «монитор-кресло»
  img.infoblock__robots(src='img/robots/robotsHeader.svg')
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';

export default class InfoBlock extends Vue{};
</script>

<style lang="scss" scoped>
  .block_infoblock{
    position: relative;
    height: 320px;
  }
  .infoblock__title {
    position: absolute;
    font-size: 56px;
    line-height: 72px;
    width: 470px;
    height: 216px;
  }
  .infoblock__subtitle{
    position: absolute;
    top: 243px;
    color: #A3B8CC;
    font-size: 24px;
    line-height: 32px;
  }
  .infoblock__robots {
    position: absolute;
    left: 650px;
  }
</style>