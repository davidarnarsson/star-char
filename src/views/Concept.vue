<template>
  <b-container v-if="concept">
    <h1 class="text-center">Concept</h1>
      <b-row>
        <b-col>
          <b-form @submit="formSubmit">
            <p>First, create a character concept.</p>
            <b-form-group id="player" label="Enter your name" label-for="player" :state="playerState" :invalid-feedback="nullOrEmptyPlayer">
              <label for="player name">Your name</label>
              <b-form-input placeholder="Please enter your name" v-model="concept.player" :state="playerState" />
            </b-form-group>

            <b-form-group id="character" label="Enter the character name" label-for="character" :state="characterState" :invalid-feedback="nullOrEmptyCharacter">
              <label for="character">Character name</label>
              <b-form-input placeholder="Please enter your character's name" v-model="concept.name" :state="characterState" />
            </b-form-group>

            <b-button :disabled="!playerState || !characterState" type="submit">Next</b-button>
          </b-form>
        </b-col>
      </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import { WizardState, WizardMutations } from "@/wizard/types";

import Mut from "@/models/Mutation";
import ConceptMutation from "@/models/mutations/ConceptMutation";

const namespace: string = "wizard";

@Component
export default class Concept extends Vue {
  @State("wizard") public wizard: WizardState | undefined;

  @Mutation("setConcept", { namespace })
  public setConcept: any;

  public concept: ConceptMutation | null = null;

  public mounted() {
    this.concept = this.wizard && this.wizard.concept ? this.wizard.concept : new ConceptMutation();
  }

  get playerState() {
    return this.concept && this.concept.player.length > 0;
  }

  get characterState() {
    return this.concept && this.concept.name.length > 0;
  }

  get nullOrEmptyPlayer() {
    return this.playerState ? "" : "Please enter your name.";
  }

  get nullOrEmptyCharacter() {
    return this.characterState ? "" : "Please enter your character name.";
  }

  public formSubmit(e: Event) {
    e.preventDefault();
    if (this.nullOrEmptyPlayer || this.nullOrEmptyCharacter) return;
    
    this.setConcept(this.concept);

    this.$router.push("race");
  }
}
</script>

<style>
</style>