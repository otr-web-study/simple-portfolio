<script setup lang="ts">
import { useField } from 'vee-validate';

interface InputProps {
  name: string;
  placeholder?: string;
}

const props = defineProps<InputProps>();

const { value, errorMessage } = useField(() => props.name);
</script>

<template>
  <input v-model="value" class="" autocomplete="off" :placeholder="placeholder" />
  <span class="" :class="{ 'opacity-100': errorMessage }">
    {{ errorMessage }}
  </span>
</template>
