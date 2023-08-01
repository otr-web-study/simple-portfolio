import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useControlsStore } from '@/stores/controls-store';

export const useTechnologies = () => {
  const controlsStore = useControlsStore();
  const { toggleFilter } = controlsStore;
  const { filterKeys, filter } = storeToRefs(controlsStore);
  const collapsed = ref(false);

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value;
  };

  return { filterKeys, filter, collapsed, toggleFilter, toggleCollapsed };
};
