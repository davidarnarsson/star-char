<template>
  <b-btn-group>
    <b-button class="btn btn-secondary" :disabled="prevDisabled" @click="$emit('prev', $event)">Previous</b-button> 
    <b-button class="btn btn-primary" :disabled="nextDisabled" @click="$emit('next', $event)">Next</b-button> 
  </b-btn-group> 
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class StepNavigation extends Vue {
  @Prop() prevDisabled!: boolean;

  @Prop() nextDisabled!: boolean;
}
</script>

<style>
</style>
