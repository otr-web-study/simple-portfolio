<script setup lang="ts">
import TheContainer from './TheContainer.vue';
import AppLink from './AppLink.vue';
import ProjectItem from './ProjectItem.vue';
import { useProjects } from '@/hooks/useProjects';

const { projects, hasNextPage, handleNextPageClick } = useProjects();
</script>

<template>
  <section class="pb-10 pt-10 md:pt-[52px] xl:pt-[72px]">
    <TheContainer class="flex flex-col">
      <div class="flex items-center justify-between">
        <h2
          class="text-[40px] font-bold leading-[40px] tracking-[1.1px] md:text-[72px] md:leading-[72px] md:tracking-[2px] xl:text-heading-xl xl:leading-heading-xl xl:tracking-heading-xl"
        >
          Projects
        </h2>
        <AppLink to="#contact-me">Contarc Me</AppLink>
      </div>
      <ul
        class="mb-11 grid grid-cols-1 gap-[40px] pt-10 md:grid-cols-2 md:gap-[60px_21px] md:pt-14 xl:gap-[70px_24px] xl:pt-20"
      >
        <TransitionGroup
          enter-active-class="duration-300 ease"
          enter-from-class="opacity-0"
          enter-to-class="opacity-1"
          leave-active-class="duration-300"
          leave-from-class="opacity-1"
          leave-to-class="opacity-0"
        >
          <li v-for="project in projects" :key="project.title">
            <ProjectItem :project="project" />
          </li>
        </TransitionGroup>
      </ul>
      <button
        v-if="hasNextPage"
        class="tracking-heading-[2.286px] mx-auto rounded bg-secondary px-24 py-[2px] text-base uppercase leading-[26px] transition-colors duration-[400ms] hover:text-accent"
        @click="handleNextPageClick"
      >
        more...
      </button>
    </TheContainer>
  </section>
</template>
