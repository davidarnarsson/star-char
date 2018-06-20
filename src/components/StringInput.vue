<template>
  <b-form-group id="player" description="The name of the player playing this character" label="Enter your name" label-for="player" :state="playerState" :invalid-feedback="nullOrEmptyPlayer">
              <label for="player name" -></label>
              <b-form-input :placeholder="placeholder" v-model="concept.player" :state="playerState" />
            </b-form-group>  
</template>

<script lang="ts">

</script>
