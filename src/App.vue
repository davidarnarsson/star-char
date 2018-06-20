<template>
<div id="app">
  <b-container>
    <b-row>
      <b-nav>
        <b-nav-item>
          <router-link to="/">1. Concept</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/race">2. Race</router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link to="/theme">3. Theme</router-link>
        </b-nav-item>
      </b-nav>
    </b-row>
    </b-container>
  
    <router-view/>
  </div>
</template>
<script lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { Component, Prop, Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>
