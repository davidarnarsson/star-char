<template>
  <div>
    <slot></slot>

    <step-navigation v-bind="{prevDisabled,nextDisabled}" @prev="$emit('prev', $event)" @next="$emit('next', $event)" />      
  </div>
</template>
 
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import StepNavigation from '@/components/support/StepNavigation.vue';

@Component({
  components: {
    "step-navigation": StepNavigation
  }
})
export default class SubStepContainer extends Vue {
  @Prop() private prevDisabled!: boolean;
  @Prop() private nextDisabled!: boolean; 
}
</script>
