<template>
  <sub-step-container :prevDisabled="false" @prev="$router.back()" @next="onNext">
  </sub-step-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SubStepContainer from '@/components/support/SubStepContainer.vue';


@Component({
  components: {
    "sub-step-container": SubStepContainer
  }
})
export default class EnvoyClass extends Vue { 

  
}
</script>

<style>

</style>
