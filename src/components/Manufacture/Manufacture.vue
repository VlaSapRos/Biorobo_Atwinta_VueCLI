<template lang="pug">
.block(id='manufacture')
  span.rubric.rubric_manufacture Производство
  .container.container_manufacture
    .container_column.container_column_Manufacture
      ManufactureRadio(title='Тип биоробота:' name='type' value1 = 'FrontEnd' value2 = 'Design' v-on:roboTypeChange='roboType.type=$event')
      ManufactureRadio(title='Стабилизатор:' name='gender' value1 = 'Male' value2 = 'Female' v-on:roboTypeChange='roboType.stabilizer=$event')
      button.button-create(:class="{active: isBeCreate}" :disabled='!isBeCreate' @click="createRobot()") Произвести за 10 монет
    .container_column.container_column_manufacture(style='padding-top:9px')
      ManufactureCheck( count='4' isBiomechanism='true' )
      ManufactureCheck( count='4' isProcessor='true' )
      ManufactureCheck( count='1' isSoul='true' )
      .manufacture__not-enough {{ notEnough }}
    .container_column.container_column_manufacture
      ManufactureSilhouette(:stabilizer='roboType.stabilizer' :type='roboType.type' :isBeCreate='isBeCreate')
</template>

<script>
import { Vue, Options } from 'vue-class-component';
import { mapState } from 'vuex';
  
import ManufactureRadio from './ManufactureRadio.vue';
import ManufactureCheck from './ManufactureCheck.vue';
import ManufactureSilhouette from './ManufactureSilhouette.vue';

@Options({
  emits:[
    'robotCreated',
  ],
  components: {
    ManufactureRadio,
    ManufactureCheck,
    ManufactureSilhouette,
  },
  computed: {
    ...mapState([
      'wallet',
      'stock',
      'manufacture',
    ]),
    isBeCreate() {
      if (this.wallet.amountCoins >= 10 
      && this.stock.biomechanism.need == this.countBiomechanisms 
      && this.stock.processor.need == this.countProcessors 
      && this.stock.soul.need == this.countSouls
      && this.stock.biomechanism.need <= this.stock.biomechanism.quantity 
      && this.stock.processor.need <= this.stock.processor.quantity 
      && this.stock.soul.need <= this.stock.soul.quantity) {
        return true
      }
      else { return false }
    },
    countBiomechanisms() {
      let count=0
      this.manufacture.flags.biomechanism.map((item) => {
        (item) ? count++ : count+=0
      })
      return count
    },
    countProcessors() {
      let count=0
      this.manufacture.flags.processor.map((item) => {
        (item) ? count++ : count+=0
      })
      return count
    },
    countSouls() {
      let count=0
      this.manufacture.flags.soul.map((item) => {
        (item) ? count++ : count+=0
      })
      return count
    },
    notEnough() {
      //notEnoughText разбит на 4 части
      let part1 = '';
      let part2 = '';
      let part3 = '';
      let part4 = '';
      let forIf = this.wallet.amountCoins < this.manufacture.costRobot || this.stock.biomechanism.need !== this.countBiomechanisms || this.stock.processor.need !== this.countProcessors || this.stock.soul.need !== this.countSouls;
      if (forIf) {
        let biomech = this.stock.biomechanism.need - this.countBiomechanisms 
        let procc = this.stock.processor.need - this.countProcessors 
        let sou = this.stock.soul.need  - this.countSouls 
        let co = this.manufacture.costRobot - this.wallet.amountCoins 
        if (biomech == 1) {part1 = ' биомеханизма'}
        else if (biomech == 0) {part1 = ''}
        else {part1 = ` ${biomech} биомеханизмов`}

        if (procc == 1) {part2 = ' процессора'}
        else if (procc == 0) {part2 = ''}
        else {part2 = ` ${procc} процессоров`}

        if (sou == 1) {part3 = ' души'}
        else if (sou == 0) {part3 = ''}
        else {part3 = ` ${sou} душ`}

        if (co > 0) {part4 = ' денег'}

        if(part1 !== '' && part2 !== '' && part3 !== '' && part4 !== ''){
          return 'Для производства биоробота не хватает' + part1 + ',' + part2 + ',' + part3 + ' и' + part4}
        else if (part1 !== '' && part2 !== '' && part3 !== ''){
          return 'Для производства биоробота не хватает' + part1 + ',' + part2 + ' и' + part3}
        else if (part1 !== '' && part2 !== '' && part4 !== ''){
          return 'Для производства биоробота не хватает' + part1 + ',' + part2 + ' и' + part4}
        else if (part1 !== '' && part3 !== '' && part4 !== ''){
          return 'Для производства биоробота не хватает' + part1 + ',' + part3 + ' и' + part4}
        else if (part2 !== '' && part3 !== '' && part4 !== ''){
          return 'Для производства биоробота не хватает' + part2 + ',' + part3 + ' и' + part4}
        else if (part1 !== '' && part2 !== ''){
          return 'Для производства биоробота не хватает' + part1 + ' и' + part2}
        else if (part1 !== '' && part3 !== ''){
          return 'Для производства биоробота не хватает' + part1 + ' и' + part3}
        else if (part1 !== '' && part4 !== ''){
          return 'Для производства биоробота не хватает' + part1 + ' и' + part4}
        else if (part2 !== '' && part3 !== ''){
          return 'Для производства биоробота не хватает' + part2 + ' и' + part3}
        else if (part2 !== '' && part4 !== ''){
          return 'Для производства биоробота не хватает' + part2 + ' и' + part4}
        else if (part3 !== '' && part4 !== ''){
          return 'Для производства биоробота не хватает' + part3 + ' и' + part4}
        else if (part1 !== ''){
          return 'Для производства биоробота не хватает' + part1}
        else if (part2 !== ''){
          return 'Для производства биоробота не хватает' + part2}
        else if (part3 !== ''){
          return 'Для производства биоробота не хватает' + part3}
        else if (part4 !== ''){
          return 'Для производства биоробота не хватает' + part4}
      }
    },
  },
})
export default class Manufacture extends Vue {
  roboType = {
    stabilizer: 'Male',
    type: 'FrontEnd',
  }
  createRobot() {
    if(this.stock.biomechanism.need <= this.stock.biomechanism.quantity
    && this.stock.processor.need <= this.stock.processor.quantity
    && this.stock.soul.need <= this.stock.soul.quantity) {
      this.$emit('robotCreated');
      this.$store.dispatch('buildRobot');
    }
  }
}
</script>

<style lang="scss" scoped>
  .rubric_manufacture {
      line-height: 72px;
      height: 72px;
  }
  .container_manufacture {
    height: 320px;
  }
  .container_column_manufacture {
    justify-content: start;
    align-items: start;
    height: 327px;
    width: 236px;
  }
  .manufacture__not-enough {
    width: 195px;
    height: 48px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #A3B8CC;
    margin-top: 45px;
    padding: 0;
  }
</style>