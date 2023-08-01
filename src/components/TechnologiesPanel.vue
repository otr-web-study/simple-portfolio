<script setup lang="ts">
import TheContainer from '@/components/TheContainer.vue';
import TheAngle from '@/components/TheAngle.vue';
import TechnologyItem from './TechnologyItem.vue';
import { useTechnologies } from '@/hooks/useTechnologies';

const { filterKeys, filter, collapsed, toggleFilter, toggleCollapsed } = useTechnologies();
</script>

<template>
  <section class="pt-10 md:pt-[52px] xl:pt-[72px]">
    <TheContainer>
      <button
        class="group flex w-full justify-start gap-4 py-2 font-bold uppercase"
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
          <TheAngle v-if="!collapsed" key="not-collapsed" class="-rotate-90" />
          <TheAngle v-else key="collapsed" class="rotate-90" />
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
        <ul v-if="!collapsed" class="flex flex-wrap gap-4 pt-4">
          <li v-for="key in filterKeys" :key="key" class="flex">
            <TechnologyItem :technology="key" :checked="filter[key]" @change-tech="toggleFilter" />
          </li>
        </ul>
      </Transition>
    </TheContainer>
  </section>
</template>
