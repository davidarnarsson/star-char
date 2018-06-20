<template>
  <b-form @submit="onSubmit">
    <alignment-selector v-model="alignment" @change="onSubmit" />
  </b-form>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import RaceMutation, { AndroidRaceMutation } from "@/models/mutations/RaceMutation";
import AlignmentSelector from "@/components/AlignmentSelector.vue";
import Alignment from "@/models/Alignment";

@Component({
  components: { "alignment-selector": AlignmentSelector }
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
