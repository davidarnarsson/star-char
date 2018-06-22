<template>
  <sub-step-container :prevDisabled="false" :nextDisabled="!alignment" @prev="$router.back()" @next="onSubmit">
    <alignment-selector v-model="alignment" />
  </sub-step-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";

import AlignmentSelector from "@/components/AlignmentSelector.vue";
import Alignment from "@/models/Alignment";
import AndroidRaceMutation from "@/models/mutations/races/AndroidRaceMutation";
import SubStepContainer from "@/components/support/SubStepContainer.vue";

@Component({
  components: {
    "alignment-selector": AlignmentSelector,
    "sub-step-container": SubStepContainer
  }
})
export default class AndroidRace extends Vue {
  public alignment: Alignment | null = null;

  @Prop() public race: AndroidRaceMutation | undefined;

  mounted() {
    if (this.race != null) {
      this.alignment = this.race.alignment;
    }
  }

  public onSubmit(e: Event): void {
    e.preventDefault();

    const mutation = new AndroidRaceMutation();

    if (this.alignment) {
      mutation.alignment = this.alignment;
    }

    this.$emit("race", mutation);
  }
}
</script>

<style>
</style>
