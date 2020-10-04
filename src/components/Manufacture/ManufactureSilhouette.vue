<template lang="pug">
img(:src="'img/robots/' + derictory + '/'+ picture + '.svg'")
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator'
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState([
      'manufacture',
    ]),
    picture: function() {
      switch (this.manufacture.roboType.stabilizer + this.manufacture.roboType.type) {
        case ('MaleFrontEnd'): return 'maleFrontend'; break;
        case ('MaleDesign'): return 'maleDesign'; break;
        case ('FemaleFrontEnd'): return 'famaleFrontend'; break;
        case ('FemaleDesign'): return 'famaleDesign'; break;
        default:break;
      }
    },
    derictory: function() {
      if (this.manufacture.robotIsCreated) { return 'created'}
      else if (this.isBeCreate) { return 'canBeCreated'}
      else { return 'canNotBeCreated' }
    }
  },
})
export default class ManufactureSilhouette extends Vue {
  @Prop(String) readonly stabilizer: ''
  @Prop(String) readonly type: ''
  @Prop(Boolean) readonly isBeCreate: false
}
</script>