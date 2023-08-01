<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import GreetingSection from '@/components/GreetingSection.vue';
import TechnologiesPanel from './components/TechnologiesPanel.vue';
import { useFetchData } from '@/hooks/useFetchData';

useFetchData();
</script>

<template>
  <TheHeader />
  <main>
    <GreetingSection />
    <TechnologiesPanel />
  </main>
</template>
