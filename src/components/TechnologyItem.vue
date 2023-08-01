<script setup lang="ts">
interface PropsType {
  technology: string;
  checked: boolean;
}

const props = defineProps<PropsType>();
const emits = defineEmits<{ (e: 'change-tech', key: string): void }>();

const handleInputChange = () => emits('change-tech', props.technology);
</script>

<template>
  <label
    :for="technology"
    class="flex h-5 w-[clamp(150px,calc(20%+10px),170px)] cursor-pointer items-center justify-between rounded-md bg-secondary px-4 py-4"
  >
    {{ technology }}
    <input
      type="checkbox"
      class="absolute z-0 opacity-0"
      :id="technology"
      :checked="checked"
      @change="handleInputChange"
    />
  </label>
</template>
