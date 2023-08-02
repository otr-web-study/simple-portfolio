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
    class="group relative flex w-full cursor-pointer items-center justify-between rounded-md bg-secondary px-4 py-2 text-[11px] md:text-[13px]"
  >
    {{ technology }}
    <span
      class="relative h-3 w-3 rounded-[50%] bg-grayish transition-colors duration-[400ms] after:absolute after:h-3 after:w-3 after:rounded-[50%] after:bg-grayish after:content-[''] after:group-hover:animate-ping"
      :class="{
        'bg-accent after:!bg-accent': props.checked,
      }"
    />
    <input
      type="checkbox"
      class="absolute z-0 opacity-0"
      :id="technology"
      :checked="checked"
      @change="handleInputChange"
    />
  </label>
</template>
