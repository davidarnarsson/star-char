<template>
  <b-btn-group>
    <b-button class="btn btn-secondary"  :disabled="prevDisabled" @click="onPrevClick">Previous</b-button> 
    <b-button class="btn btn-primary" :disabled="nextDisabled" @click="onNextClick">Next</b-button> 
  </b-btn-group> 
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class StepNavigation extends Vue {
  @Prop() prevDisabled!: boolean;

  @Prop() nextDisabled!: boolean;

  @Prop() prev: string | null = null; 

  @Emit("next")
  onNext() : void {

  }

  @Emit("prev")
  onPrevClick(e: Event) : void {
    if (!this.prev) {
      return this.$router.back();
    }

    return this.$router.push(this.prev);

  }

  @Emit("next")
  onNextClick(e: Event) : void {
  
  }
}
</script>

<style>
</style>
