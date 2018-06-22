<template>
   <b-container>
    <h1 class="text-center">Choose a theme</h1>
    <b-row>
      <b-col>
      <b-form-select :options="themes" v-model="selectedTheme" />
      </b-col>
    </b-row>
    <b-row v-if="selectedTheme">
      <b-col>
        <component :is="selectedTheme" :theme="theme" @theme="onTheme">
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
const namespace = "wizard";
@Component({
  components: {
    "Scholar": ScholarTheme
  }
})
export default class ThemeView extends Vue {
  @Mutation("setMutation", { namespace })
  public setMutation: any;

  @Getter("theme", { namespace }) public theme!: ThemeMutation;

  public selectedTheme: string | null = null;

  mounted() {
    if (this.theme) {
      this.selectedTheme = this.theme.target.name;
    }
  }


  /// This should probably somewhere else
  public themes = [
    {
      text: "Choose a theme",
      value: null
    },
    {
      text: "Scholar",
      value: "Scholar"
    }
  ];

  public onTheme(theme: ThemeMutation): void {
    this.setMutation(theme);
    
    this.$router.push("ability-scores");
  }
}
</script>

<style>
</style>
