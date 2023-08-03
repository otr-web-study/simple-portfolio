<script setup lang="ts">
import TheContainer from './TheContainer.vue';
import ExternalLinks from './ExternalLinks.vue';
</script>

<template>
  <TheContainer class="flex flex-col items-center justify-between gap-5 md:flex-row">
    <h2 class="text-heading-m font-bold -tracking-[0.444px] md:text-3xl">otr-web-study</h2>
    <ExternalLinks />
  </TheContainer>
</template>
