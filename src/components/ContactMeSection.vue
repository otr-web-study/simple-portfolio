<script setup lang="ts">
import TheContainer from './TheContainer.vue';
import InputWithValidation from './InputWithValidation.vue';
</script>

<template>
  <section class="bg-tertiary pb-20 pt-16 xl:pt-20">
    <TheContainer class="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between">
      <div class="max-w-full md:max-w-[445px]">
        <h2
          class="text-[40px] font-bold leading-[40px] tracking-[-1.1px] md:text-[72px] md:leading-[72px] md:tracking-[-2px] xl:text-heading-xl xl:leading-heading-xl xl:tracking-heading-xl"
        >
          Contact
        </h2>
        <p
          class="mt-5 text-center text-[16px] leading-[26px] text-silver md:text-[18px] md:leading-[28px] xl:mt-9 xl:text-left"
        >
          I would love to hear about your project and how I could help. Please fill in the form, and
          I’ll get back to you as soon as possible.
        </p>
      </div>
      <form class="max-w-full md:max-w-[445px]">
        <InputWithValidation name="name" placeholder="Name" />
      </form>
    </TheContainer>
  </section>
</template>
