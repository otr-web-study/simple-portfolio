<script setup lang="ts">
import { type Project } from '@/types/Project';

defineProps<{ project: Project }>();
</script>

<template>
  <div>
    <img :src="project.cover" :alt="project.title" class="aspect-[5/3] rounded-sm" />
    {{ project.title }}
  </div>
</template>
