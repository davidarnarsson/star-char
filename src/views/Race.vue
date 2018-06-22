<template>
  <div>
    <single-mutation-selector :options="races" title="Choose a race" :mutation="race" @mutation="onRace" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import AndroidRace from "@/components/races/AndroidRace.vue";
import RaceMutation from "@/models/mutations/RaceMutation";
import { WizardState } from "@/wizard/types";
import StepContainer from "@/components/support/StepContainer.vue";
import SingleMutationSelector from "@/components/support/SingleMutationSelector.vue";

const namespace = "wizard";

@Component({
  components: {
    "single-mutation-selector": SingleMutationSelector
  }
})
export default class RaceView extends Vue {
  @Mutation("setMutation", { namespace })
  public setMutation: any;

  @Getter("race", { namespace })
  public race!: RaceMutation;

  races = [
    {
      text: "Android",
      value: "Android",
      component: AndroidRace
    }
  ];

  public onRace(race: RaceMutation): void {
    debugger;
    this.setMutation(race);

    this.$router.push("theme");
  }
}
</script>

<style>
</style>
