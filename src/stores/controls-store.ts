import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useControlsStore = defineStore('controls-store', () => {
  const filter = ref<Record<string, boolean>>({});
  const filterKeys = ref<string[]>([]);
  const page = ref<number>(1);

  const addFilter = (val: Record<string, boolean>) => {
    filter.value = val;
    filterKeys.value = Object.keys(val);
  };

  const toggleFilter = (key: string) => {
    filter.value[key] = !filter.value[key];
  };

  const setPage = (val: number) => {
    page.value = val;
  };

  const sortedFilterKeys = computed(() => filterKeys.value.sort((a, b) => (a < b ? -1 : 1)));

  return {
    filterKeys: sortedFilterKeys,
    filter,
    page,
    toggleFilter,
    setPage,
    addFilter,
  };
});
