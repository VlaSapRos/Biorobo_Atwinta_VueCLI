<template lang="pug">
.manufacturecheck__checkboxs
  ManufactureCheckButtonBiomechanism( number='1' v-if="isBiomechanism && count >= 1" )
  ManufactureCheckButtonProcessor( number='1' v-if='isProcessor && count >= 1' )
  ManufactureCheckButtonSoul( number='1' v-if='isSoul && count >= 1' )
  ManufactureCheckButtonBiomechanism( number='2' v-if='isBiomechanism && count >= 2' )
  ManufactureCheckButtonProcessor( number='2' v-if='isProcessor && count >= 2' )
  ManufactureCheckButtonSoul( number='2' v-if='isSoul && count >= 2' )
  ManufactureCheckButtonBiomechanism( number='3' v-if='isBiomechanism && count >= 3' )
  ManufactureCheckButtonProcessor( number='3' v-if='isProcessor && count >= 3' )
  ManufactureCheckButtonSoul( number='3' v-if='isSoul && count >= 3')
  ManufactureCheckButtonBiomechanism( number='4' v-if='isBiomechanism && count >= 4' )
  ManufactureCheckButtonProcessor( number='4' v-if='isProcessor && count >= 4' )
  ManufactureCheckButtonSoul( number='4' v-if='isSoul && count >= 4' )
</template>

<script>
import { Vue, Options } from 'vue-class-component';

import ManufactureCheckButtonBiomechanism from './ManufactureCheckButton/ManufactureCheckButtonBiomechanism.vue';
import ManufactureCheckButtonProcessor from './ManufactureCheckButton/ManufactureCheckButtonProcessor.vue';
import ManufactureCheckButtonSoul from './ManufactureCheckButton/ManufactureCheckButtonSoul.vue';

@Options({
  props: {
    count: 0,
    isBiomechanism: false,
    isProcessor: false,
    isSoul: false,
  },
  components: {
    ManufactureCheckButtonBiomechanism,
    ManufactureCheckButtonProcessor,
    ManufactureCheckButtonSoul,
  },
})
export default class ManufactureCheck extends Vue{}
</script>

<style lang="scss" scoped>
    .manufacturecheck__checkboxs {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 222px;
        margin-bottom: 16px;
    }
</style>