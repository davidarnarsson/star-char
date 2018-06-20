<template>
    <b-form-group label="Select alignment">
      <b-form-select v-model="value" :options="options" v-on:input="$emit('input', $event);" />
    </b-form-group>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, Provide, Inject } from "vue-property-decorator";
import Alignment from "@/models/Alignment";

@Component({
  name: "alignment-selector"
})
export default class AlignmentSelector extends Vue {
  @Prop({ type: String })
  public value!: Alignment;

  public localValue!: Alignment;

  @Watch("value")
  public onValue(newVal: Alignment, oldVal: Alignment) {
    this.localValue = newVal;
  }

  @Watch("localValue")
  public onLocalValue(newVal: Alignment, oldVal: Alignment) {
    this.$emit("input", this.localValue);
  }

  public options = [
    {
      text: "Chaotic Evil",
      value: "ChaoticEvil"
    },
    {
      text: "Neutral Evil",
      value: "NeutralEvil"
    },
    {
      text: "Lawful Evil",
      value: "LawfulEvil"
    },
    {
      text: "Chaotic Neutral",
      value: "ChaoticNeutral"
    },
    {
      text: "True Neutral",
      value: "TrueNeutral"
    },
    {
      text: "Lawful Neutral",
      value: "LawfulNeutral"
    },
    {
      text: "Chaotic Good",
      value: "ChaoticGood"
    },
    {
      text: "Neutral Good",
      value: "NeutralGood"
    },
    {
      text: "Lawful Good",
      value: "LawfulGood"
    }
  ];
}
</script>

<style>
</style>
