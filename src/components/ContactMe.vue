<script setup lang="ts">
const props = defineProps<{ class: string }>();
</script>

<template>
  <a
    href="#contact-me"
    class="tracking-heading-[2.286px] inline-block border-b-2 border-b-accent pb-[10px] text-base uppercase leading-[26px] transition-colors duration-[400ms] hover:text-accent"
    :class="props.class"
    >contact me</a
  >
</template>
