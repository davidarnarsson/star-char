<template>
  <step-container :show-navigation="false" title="Choose a class">
    <b-row>
      <b-col>
      <b-form-select :options="classes" v-model="selectedClass" />
      </b-col>
    </b-row>
    <b-row v-if="selectedClass">
      <b-col>
        <component :is="selectedClass" :class="classMutation" @class="onClass">
        </component>
      </b-col>
    </b-row>
  </step-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";

import { WizardState } from "@/wizard/types";
import StepContainer from "@/components/support/StepContainer.vue";
import ClassMutation from '@/models/mutations/ClassMutation';

const namespace = "wizard";
@Component({
  components: {
    "step-container": StepContainer
  }
})
export default class PickClass extends Vue {
  @Mutation("setMutation", { namespace })
  public setMutation: any;

  @Getter("class", { namespace }) 
  public classMutation!: ClassMutation;

  public selectedClass: string | null = null;

  mounted() {
    if (this.classMutation) {
      this.selectedClass = this.classMutation.target.name;
    }
  }
  
  // this should probably be somewhere else
  public classes = [
    {
      text: "Select one",
      value: null
    },
    {
      text: "Envoy",
      value: "Envoy"
    }
  ];

  public onClass(theClass: ClassMutation): void {
    this.setMutation(theClass);

    this.$router.push("theme");
  }
}
</script>

<style>
</style>
