<script setup lang="ts">
import TheContainer from './TheContainer.vue';
import ContactMe from './ContactMe.vue';
import ProjectItem from './ProjectItem.vue';
import { useProjects } from '@/hooks/useProjects';

const { projects, hasNextPage } = useProjects();
</script>

<template>
  <section class="pt-10 md:pt-[52px] xl:pt-[72px]">
    <TheContainer>
      <div class="flex items-center justify-between">
        <h2
          class="text-[40px] font-bold leading-[40px] tracking-[1.1px] md:text-[72px] md:leading-[72px] md:tracking-[2px] xl:text-heading-xl xl:leading-heading-xl xl:tracking-heading-xl"
        >
          Projects
        </h2>
        <ContactMe />
      </div>
      <ul
        class="grid grid-cols-1 gap-[40px] pt-10 md:grid-cols-2 md:gap-[60px_21px] md:pt-14 xl:gap-[70px_24px] xl:pt-20"
      >
        <li v-for="project in projects" :key="project.title">
          <ProjectItem :project="project" />
        </li>
      </ul>
    </TheContainer>
  </section>
</template>
