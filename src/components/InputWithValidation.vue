<script setup lang="ts">
import { useField } from 'vee-validate';
import ErrorExclamation from './icons/ErrorExclamation.vue';

interface InputProps {
  name: string;
  placeholder?: string;
}

const props = defineProps<InputProps>();

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <label class="relative">
    <input
      v-model="value"
      class="transiton-all w-full border-b border-b-grayish bg-tertiary pb-4 pl-6 pr-10 text-[16px] leading-[26px] tracking-[-0.2px] outline-none duration-[400ms] placeholder:uppercase placeholder:text-white placeholder:opacity-50 focus-visible:border-b-accent"
      :class="{ 'border-b-error': errorMessage }"
      autocomplete="off"
      :placeholder="placeholder"
    />
    <Transition
      enter-active-class="duration-400 ease"
      enter-from-class="opacity-0"
      enter-to-class="opacity-1"
      leave-active-class="duration-400"
      leave-from-class="opacity-1"
      leave-to-class="opacity-0"
    >
      <ErrorExclamation v-if="errorMessage" class="absolute right-0 top-0" />
    </Transition>
  </label>
  <span
    class="my-1 h-4 text-right text-xs text-error opacity-0 transition-opacity duration-[400ms]"
    :class="{ 'opacity-100': errorMessage }"
  >
    {{ errorMessage }} tst
  </span>
</template>
