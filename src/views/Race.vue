<template>
  <step-container :show-navigation="false" title="Choose a race" @prev="$router.back()" @next="onNext">
    <b-row>
      <b-col>
      <b-form-select :options="races" v-model="selectedRace" />
      </b-col>
    </b-row>
    <b-row v-if="selectedRace">
      <b-col>
        <component :is="selectedRace" :race="race" @race="onRace">
        </component>
      </b-col>
    </b-row>
  </step-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import AndroidRace from "@/components/races/AndroidRace.vue";
import RaceMutation from "@/models/mutations/RaceMutation";
import { WizardState } from "@/wizard/types";
import StepContainer from "@/components/support/StepContainer.vue";

const namespace = "wizard";
@Component({
  components: {
    "Android": AndroidRace,
    "step-container": StepContainer
  }
})
export default class RaceView extends Vue {
  @Mutation("setMutation", { namespace })
  public setMutation: any;

  @Getter("race", { namespace }) 
  public race!: RaceMutation;

  public selectedRace: string | null = null;

  mounted() {
    if (this.race) {
      this.selectedRace = this.race.target.name;
    }
  }
  
  // this should probably be somewhere else
  public races = [
    {
      text: "Select one",
      value: null
    },
    {
      text: "Android",
      value: "Android"
    }
  ];

  public onNext(e: Event): void {}

  public onRace(race: RaceMutation): void {
    this.setMutation(race);

    this.$router.push("theme");
  }
}
</script>

<style>
</style>
