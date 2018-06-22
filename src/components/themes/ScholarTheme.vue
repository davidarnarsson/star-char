<template>
  <sub-step-container @prev="$router.back()" :nextDisabled="!specializationState || !skillState" @next="onSubmit">
    <theme-header :theme="scholar" />

    <b-form-group class="mt-20" label="Choose a specialization skill" description="The scholar gets +1 to the chosen skill if it is a class skill, other wise she gets a -5 to DC checks regarding the selected specialization below">
      <b-form-select v-model="themeKnowledge" :options="['Life Science', 'Physical Science']" />
    </b-form-group>

    <b-form-group label="Choose a specialization in the field chosen above" :state="specializationState">
      <b-input v-model="themeKnowledgeSpecialization" :state="specializationState" />
    </b-form-group>
  </sub-step-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import ThemeHeader from "./ThemeHeader.vue";
import StepNavigation from "@/components/support/StepNavigation.vue";
import SubStepContainer from "@/components/support/SubStepContainer.vue";
import ScholarThemeMutation, {Scholar} from "@/models/mutations/themes/ScholarThemeMutation";
import ThemeMutation from "@/models/mutations/ThemeMutation";

@Component({
  components: {
    "theme-header": ThemeHeader,
    "sub-step-container": SubStepContainer
  }
})
export default class ScholarTheme extends Vue {
  
  @Prop() 
  theme!: ScholarThemeMutation;

  scholar = Scholar;

  private themeKnowledge: "Life Science" | "Physical Science" | null = null;
  private themeKnowledgeSpecialization: string = "";
  mounted() {
    if (this.theme) {
      this.themeKnowledge = this.theme.themeKnowledge;
      this.themeKnowledgeSpecialization = this.theme.themeKnowledgeSpecialization || "";
    }
  }

  get specializationState() {
    return (
      this.themeKnowledgeSpecialization.length > 0
    );
  }

  get skillState() {
    return this.themeKnowledge && this.themeKnowledge.length > 0;
  }

  public onSubmit(e: Event): void {
    e.preventDefault();

    const mutation = new ScholarThemeMutation();
    mutation.themeKnowledge = this.themeKnowledge;
    mutation.themeKnowledgeSpecialization = this.themeKnowledgeSpecialization;

    if (this.specializationState && this.skillState) {
      this.onTheme(mutation);
    }
  }

  @Emit("theme")
  public onTheme(mutation: ThemeMutation): void {}
}
</script>

<style>
</style>
