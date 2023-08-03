import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { PROJECT_PER_PAGE } from '@/constants';
import { useControlsStore } from '@/stores/controls-store';
import { useProjectsStore } from '@/stores/projects-store';

export const useProjects = () => {
  const controlStore = useControlsStore();
  const { projects } = storeToRefs(useProjectsStore());

  const selectedFilters = computed(() =>
    Object.entries(controlStore.filter)
      .filter(([_, val]) => val)
      .map(([key]) => key),
  );

  const filteredProjects = computed(() =>
    selectedFilters.value.length
      ? projects.value.filter((project) =>
          selectedFilters.value.every((filter) => project.technologies.includes(filter)),
        )
      : projects.value,
  );

  const visibleProjects = computed(() =>
    filteredProjects.value.slice(0, controlStore.page * PROJECT_PER_PAGE),
  );

  const hasNextPage = computed(
    () => controlStore.page < filteredProjects.value.length / PROJECT_PER_PAGE,
  );

  const handleNextPageClick = () => {
    controlStore.setPage(controlStore.page + 1);
  };

  return { projects: visibleProjects, hasNextPage, handleNextPageClick };
};
