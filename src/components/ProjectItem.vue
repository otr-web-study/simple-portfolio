<script setup lang="ts">
import AppLink from './AppLink.vue';
import { type Project } from '@/types/Project';

defineProps<{ project: Project }>();
</script>

<template>
  <div class="flex h-full flex-col">
    <div class="group relative">
      <img
        :src="project.cover"
        :alt="project.title"
        class="aspect-[5/3] h-full w-full rounded-sm object-cover"
      />
      <img
        :src="project.image"
        :alt="project.title"
        class="absolute bottom-0 left-full right-0 aspect-[5/3] h-full w-0 overflow-hidden rounded-sm object-cover transition-all duration-700 group-hover:left-0 group-hover:w-full"
      />
    </div>
    <h3 class="pt-5 text-heading-m font-bold uppercase leading-heading-m">
      {{ project.title }}
    </h3>
    <div class="flex flex-grow flex-wrap items-start gap-2">
      <span
        v-for="tech in project.technologies"
        :key="tech"
        class="rounded bg-secondary px-2 py-1 text-sm uppercase md:text-normal md:leading-normal"
        >{{ tech }}</span
      >
    </div>
    <div class="mt-5 flex gap-8">
      <AppLink v-if="project.linkLive" :to="project.linkLive" target="_blank">view project</AppLink>
      <span v-else class="tracking-heading-[2.286px] text-base uppercase leading-[26px]"
        >not published</span
      >
      <AppLink :to="project.linkCode" target="_blank">view code</AppLink>
    </div>
  </div>
</template>
