<template>
  <b-form @submit="onSubmit">
    <theme-header :theme="mutation.theme" />
    <button class="btn btn-primary" type="submit">Next</button>
  </b-form>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import ThemeMutation,{ ScholarThemeMutation } from "@/models/mutations/ThemeMutation";
import ThemeHeader from "./ThemeHeader.vue";

@Component({
  components: {
    "theme-header": ThemeHeader
  }
})
export default class ScholarTheme extends Vue {
  public mutation = new ScholarThemeMutation();

  public onSubmit(e: Event): void {
    e.preventDefault();

    this.onTheme(this.mutation);
  }

  @Emit("theme")
  public onTheme(mutation: ThemeMutation): void {
     
  }
}
</script>

<style>
</style>
