<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text">{{theme.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li :key="feature.name" v-for="feature in theme.features" class="list-group-item">
        <h5>{{feature.name}} (level {{feature.level}})</h5>
        <p>{{feature.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Emit } from "vue-property-decorator";
import { Theme } from "@/models/CharacterSheet";

@Component
export default class ThemeHeader extends Vue {
  @Prop() public theme!: Theme;

  get title() {
    return `${this.theme.name} (+${this.theme.keyAbilityScore} ${this.theme.keyAbilityScoreName})`;
  }
}
</script>

<style>
</style>
