<template>
  <step-container :show-navigation="true" title="Concept" :prevDisabled="true" :nextDisabled="!playerState || !characterState" @prev="$router.back()" @next="onNext">
      <b-row>
        <b-col>
          <p>First, create a character concept.</p>
          <b-form-group id="player" label="Enter your name" label-for="player" :state="playerState" :invalid-feedback="nullOrEmptyPlayer">
            <label for="player">Your name</label>
            <b-form-input placeholder="Please enter your name" v-model="player" :state="playerState" />
          </b-form-group>

          <b-form-group id="character" label="Enter the character name" label-for="character" :state="characterState" :invalid-feedback="nullOrEmptyCharacter">
            <label for="character">Character name</label>
            <b-form-input placeholder="Please enter your character's name" v-model="name" :state="characterState" />
          </b-form-group>
          <b-form-group id="description" label="Enter a character description" label-for="description">
            <label for="description">Description</label>
            <b-textarea v-model="description" />
          </b-form-group>
        </b-col>
      </b-row>
      
  </step-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import { WizardState, WizardMutations } from "@/wizard/types";
import StepContainer from "@/components/support/StepContainer.vue";
import StepNavigation from "@/components/support/StepNavigation.vue";
import Mut from "@/models/Mutation";
import ConceptMutation from "@/models/mutations/ConceptMutation";

const namespace: string = "wizard";

@Component({
  components: {
    "step-container": StepContainer,
    "step-navigation": StepNavigation
  }
})
export default class Concept extends Vue {
  @Getter("concept", { namespace }) public concept!: ConceptMutation;

  @Mutation("setMutation", { namespace })
  public setMutation: any;

  private player:string = "";
  private name:string = "";
  private description:string = "";

  
  mounted() {
    if (this.concept) {
      this.player = this.concept.player;
      this.name = this.concept.name;
      this.description = this.concept.description;
    }
  }


  get playerState() {
    return this.player && this.player.length > 0;
  }

  get characterState() {
    return this.name && this.name.length > 0;
  }

  get nullOrEmptyPlayer() {
    return this.playerState ? "" : "Please enter your name.";
  }

  get nullOrEmptyCharacter() {
    return this.characterState ? "" : "Please enter your character name.";
  }

  public onNext(e: Event) {
    e.preventDefault();
    if (this.nullOrEmptyPlayer || this.nullOrEmptyCharacter) return;

    const mutation = new ConceptMutation(this.player, this.name, this.description);

    this.setMutation(mutation);

    this.$router.push("race");
  }
}
</script>

<style>
</style>
