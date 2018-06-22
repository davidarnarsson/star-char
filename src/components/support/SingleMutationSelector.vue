<template>
  <step-container :show-navigation="false" :title="title" @prev="$router.back()" @next="onNext()">
    <b-row>
      <b-col>
        <b-form-select :options="options" :value="mutation && mutation.target.name" @change="onSelectMutation" />
      </b-col>
    </b-row>
    <b-row v-if="selectedMutation">
      <b-col>
        <component :is="selectedMutationComponent" :mutation="mutation" @race="onMutation">
        </component>
      </b-col>
    </b-row>
  </step-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { VueConstructor } from "vue";
import MutationBase from "@/models/mutations/MutationBase";
import StepContainer from "./StepContainer.vue";
const namespace = "wizard";

export interface MutationOption {
  text: string;
  value: string;
  component: VueConstructor<Vue>;
}

@Component({
  components: {
    "step-container": StepContainer
  }
})
export default class SingleMutationSelector<T extends { name: string }> extends Vue {
  @Prop() public mutation!: MutationBase<T>;

  @Prop() public options!: MutationOption[];

  @Prop() public title!: String;

  private selectedMutation: string | null = null;

  private localMutation!: MutationBase<T>;

  mounted() {
    this.localMutation = this.mutation;

    if (this.mutation) {
      this.selectedMutation = this.mutation.target.name;
    }
  }

  @Watch("mutation")
  onNewMutation(mut: MutationBase<T>) {
    this.selectedMutation = mut.target.name;
    this.localMutation = mut;
  }

  get selectedMutationComponent() {
    if (this.selectedMutation == null) return null;

    const option = this.options.find(x => x.value === this.selectedMutation);

    if (!option) return null;

    return option.component;
  }
  
  onMutation(mutation:MutationBase<T>) {
    this.localMutation = mutation;
  }

  onNext() {
    this.$emit('mutation', this.localMutation);
  }

  onSelectMutation(mutation: string) {
    this.selectedMutation = mutation;
  }
}
</script>