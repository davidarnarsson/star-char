<template>
  <b-form @submit="onSubmit">
    
  </b-form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ScholarThemeMutation } from "@/models/mutations/ThemeMutation";
@Component
export default class ScholarTheme extends Vue {
  public mutation = new ScholarThemeMutation();

  public onSubmit(e: Event): void {
    e.preventDefault();

    
    
  }
}
</script>

<style>
</style>
