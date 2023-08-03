<script setup lang="ts">
interface AppLinkProps {
  class?: string;
  to: string;
  target?: string;
}
const props = withDefaults(defineProps<AppLinkProps>(), { class: '', target: '' });
</script>

<template>
  <a
    :href="to"
    class="tracking-heading-[2.286px] inline-block border-b-2 border-b-accent pb-[10px] text-base uppercase leading-[26px] transition-colors duration-[400ms] hover:text-accent"
    :class="props.class"
    :target="target"
  >
    <slot />
  </a>
</template>
