<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import autosize from 'autosize';

interface TextareaProps {
  modelValue: string;
  placeholder?: string;
}

defineProps<TextareaProps>();
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const handleInput = (evt: Event) => {
  emit('update:modelValue', (evt.target as HTMLTextAreaElement).value);
};

const element = ref<HTMLTextAreaElement>();

onMounted(() => {
  autosize(element.value);
});

onBeforeUnmount(() => {
  autosize.destroy(element.value);
});
</script>

<template>
  <textarea
    ref="element"
    @input="handleInput"
    :value="modelValue"
    :placeholder="placeholder"
    class="transiton-all min-h-[100px] w-full resize-none border-b border-b-grayish bg-tertiary px-6 text-[16px] leading-[26px] tracking-[-0.2px] outline-none duration-[400ms] placeholder:uppercase placeholder:text-white placeholder:opacity-50 focus-visible:border-b-accent"
  />
</template>
