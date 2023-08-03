<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import GreetingSection from '@/components/GreetingSection.vue';
import TechnologiesPanel from './components/TechnologiesPanel.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactMeSection from './components/ContactMeSection.vue';
import { useFetchData } from '@/hooks/useFetchData';

useFetchData();
</script>

<template>
  <TheHeader />
  <main>
    <GreetingSection />
    <TechnologiesPanel />
    <ProjectsSection />
    <ContactMeSection />
  </main>
</template>
