<template>
  <b-container>
    <h1>Choose race</h1>
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
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import AndroidRace from "@/components/races/AndroidRace.vue";
import RaceMutation from "@/models/mutations/RaceMutation";
import { WizardState } from '@/wizard/types';
@Component({
  components: {
    "android-race": AndroidRace
  }
})
export default class RaceView extends Vue {
  @Mutation("setRace", {  namespace: "wizard" }) public setRace : any;

  @State("wizard") public wizard: WizardState | undefined;

  public mounted() {
    if (this.wizard && this.wizard.race) {
      this.selectedRace = this.wizard.race.type;
    }
  }

  public selectedRace: string | null = null;

  get race() : RaceMutation | null {
    return this.wizard && this.wizard.race || null;
  }

  public races = [
    {
      text: "Select one",
      value: null
    },
    {
      text: "Androids",
      value: "android-race"
    }
  ];

  public onRace(race: RaceMutation): void {
    this.setRace(race);

    this.$router.push("/theme");
  }
}
</script>

<style>
</style>
