<template>
  <b-container>
    <h1 class="text-center">{{title}}</h1>

    <slot></slot>

    <step-navigation v-if="showNavigation" v-bind="{prevDisabled,nextDisabled}" @prev="$emit('prev', $event)" @next="$emit('next', $event)" />      
  </b-container>
</template>
 
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import StepNavigation from '@/components/support/StepNavigation.vue';

@Component({
  components: {
    "step-navigation": StepNavigation
  }
})
export default class StepContainer extends Vue {
  @Prop() private title!: string;
  
  @Prop() private showNavigation!: boolean; 

  @Prop() private prevDisabled!: boolean;
  @Prop() private nextDisabled!: boolean; 
}
</script>
