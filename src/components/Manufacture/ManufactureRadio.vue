<template lang="pug">
.manufactureradio
  span.manufactureradio__title {{ title }}
  .container.container_manufactureradio
    .manufactureradio__container
      .manufactureradio__wrapper
        input.manufactureradio__input(type='radio' :id="name+'_1'" :name='name' v-model='picked' :value='value1' :change="$emit('roboTypeChange',picked)")
        label.manufactureradio__label(:for="name+'_1'")
      p.manufactureradio__text {{ value1 }}
    .manufactureradio__container
      .manufactureradio__wrapper
        input.manufactureradio__input(type='radio' :id="name+'_2'" :name='name' v-model='picked' :value='value2' :change="$emit('roboTypeChange',picked)")
        label.manufactureradio__label(:for="name+'_2'")
      p.manufactureradio__text {{ value2 }}
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class ManufactureRadio extends Vue {
  @Prop(String) readonly title: ''
  @Prop(String) readonly name: ''
  @Prop(String) readonly value1: ''
  @Prop(String) readonly value2: ''
  picked: string = this.value1
}
</script>

<style lang="scss" scoped>
  .manufactureradio {
    margin-bottom: 23px;
  }
  .manufactureradio__title {
    width: 134px;
    height: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    margin-bottom: 16px;
    margin-top: 5px;
  }
  .manufactureradio__input {
    appearance: none;
    position: absolute;
  }
  .manufactureradio__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .manufactureradio__container {
    display: flex;
    width: 103px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    justify-content: space-between;
  }
  .manufactureradio__label {
    height: 24px;
    width: 24px;
    border: 2px solid #A3B8CC;
    border-radius: 50%;
    margin-right: 4px;
  }
  .manufactureradio__label::after {
    content: '';
    height: 16px;
    width: 16px;
    background-color: #FF7F22;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    top: 4px;
    left: 4px;
    opacity: 0;
  }    
  .manufactureradio__text {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 63px;
    height: 32px;
  }
  .container_manufactureradio {
    width: 237px;
    padding-left: 2px;
  }
  .manufactureradio__input:checked + .manufactureradio__label::after {
    opacity: 1;
  }
</style>