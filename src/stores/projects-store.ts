import { ref } from 'vue';
import { defineStore } from 'pinia';
import { type Project } from '@/types/Project';

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Project[]>([]);

  const addProjects = (items: Project[]) => {
    projects.value = items;
  };

  return { projects, addProjects };
});
