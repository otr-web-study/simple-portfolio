<script setup lang="ts">
import TheContainer from '@/components/TheContainer.vue';
import TheAngle from '@/components/TheAngle.vue';
import TechnologyItem from './TechnologyItem.vue';
import AngleUp from './icons/AngleUp.vue';
import AngleDown from './icons/AngleDown.vue';
import { useTechnologies } from '@/hooks/useTechnologies';

const { filterKeys, filter, collapsed, toggleFilter, toggleCollapsed } = useTechnologies();
</script>

<template>
  <section>
    <TheContainer class="border-b border-b-grayish py-10 md:border-b-0 md:py-[52px] xl:py-[72px]">
      <button
        class="group flex w-full items-center justify-start gap-4 py-2 font-bold uppercase"
        @click="toggleCollapsed"
      >
        Techologies
        <Transition
          mode="out-in"
          enter-active-class="duration-300 ease"
          enter-from-class="scale-0"
          enter-to-class="scale-1"
          leave-active-class="duration-300"
          leave-from-class="scale-1"
          leave-to-class="scale-0"
        >
          <TheAngle v-if="collapsed"><AngleDown /></TheAngle>
          <TheAngle v-else><AngleUp /></TheAngle>
        </Transition>
      </button>
      <Transition
        enter-active-class="duration-300 ease"
        enter-from-class="scale-y-0"
        enter-to-class="scale-y-1"
        leave-active-class="duration-300"
        leave-from-class="scale-y-1"
        leave-to-class="scale-y-0"
      >
        <ul v-if="!collapsed" class="grid grid-cols-tech gap-4 pt-4 md:grid-cols-tech-md">
          <li v-for="key in filterKeys" :key="key" class="flex">
            <TechnologyItem :technology="key" :checked="filter[key]" @change-tech="toggleFilter" />
          </li>
        </ul>
      </Transition>
    </TheContainer>
  </section>
</template>
