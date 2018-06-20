<template>
   <b-container>
    <h1 class="text-center">Choose theme</h1>
    <b-row>
      <b-col>
      <b-form-select :options="themes" v-model="selectedTheme" />
      </b-col>
    </b-row>
    <b-row v-if="selectedTheme">
      <b-col>
        <component :is="selectedTheme" @theme="onTheme">
        </component>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Action, Getter, Mutation } from "vuex-class";
import { WizardState, WizardMutations } from "@/wizard/types";
import ScholarTheme from "@/components/themes/ScholarTheme.vue";
import ThemeMutation from "@/models/mutations/ThemeMutation";

@Component({
  components: {
    "scholar-theme": ScholarTheme
  }
})
export default class ThemeView extends Vue {
  @Mutation("setTheme", { namespace: "wizard" })
  public setTheme: any;

  @State("wizard") public wizard: WizardState | undefined;

  public mounted() {
    if (this.wizard && this.wizard.theme) {
      this.selectedTheme = this.wizard.theme.type;
    }
  }

  public selectedTheme: string | null = null;
  public themes = [
    {
      text: "Choose a theme",
      value: null
    },
    {
      text: "Scholar",
      value: "scholar-theme"
    }
  ];

  public onTheme(theme: ThemeMutation): void {
    this.setTheme(theme);
  }
}
</script>

<style>
</style>
