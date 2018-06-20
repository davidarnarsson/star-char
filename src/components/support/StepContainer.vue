<template>

  <b-container>
    <h1 class="text-center">{{title}}</h1>
    <slot></slot>

    <b-btn-group>
      <b-button class="btn btn-secondary" :disabled="prevDisabled" @click="onPrevClick">Previous</b-button> 
      <b-button class="btn btn-primary" :disabled="nextDisabled" @click="onNextClick">Next</b-button> 
    </b-btn-group> 
  </b-container>
</template>
 
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class StepContainer extends Vue {
  @Prop() private title!: string;

  @Prop() private prevDisabled!: boolean;

  @Prop() private nextDisabled!: boolean;

  @Emit("prev")
  public onPrevClick(e: Event): void {}

  @Emit("next")
  public onNextClick(e: Event): void {}
}
</script>
