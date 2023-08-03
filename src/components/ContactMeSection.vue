<script setup lang="ts">
import { useContactForm } from '@/hooks/useContactForm';
import TheContainer from '@/components/TheContainer.vue';
import InputWithValidation from '@/components/InputWithValidation.vue';
import TextateaAutosize from '@/components/TextareaAutosize.vue';

const { message, onSubmit } = useContactForm();
</script>

<template>
  <section id="contact-me" class="border-b border-b-grayish bg-tertiary pb-[90px] pt-16 xl:pt-20">
    <TheContainer class="flex flex-col items-center xl:flex-row xl:items-start xl:justify-between">
      <div class="max-w-[500px] md:max-w-[445px]">
        <h2
          class="text-center text-[40px] font-bold leading-[40px] tracking-[-1.1px] md:text-[72px] md:leading-[72px] md:tracking-[-2px] xl:text-left xl:text-heading-xl xl:leading-heading-xl xl:tracking-heading-xl"
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
      <form
        class="mt-12 flex w-full max-w-[500px] flex-col md:max-w-[445px] xl:mt-0"
        @submit="onSubmit"
      >
        <InputWithValidation name="name" placeholder="Name" />
        <InputWithValidation name="email" placeholder="Email" />
        <TextateaAutosize v-model="message" placeholder="Message" />
        <button
          type="submit"
          class="tracking-heading-[2.286px] self-end border-b-2 border-b-accent pb-[10px] pt-8 text-base uppercase leading-[26px] transition-colors duration-[400ms] hover:text-accent"
        >
          send message
        </button>
      </form>
    </TheContainer>
  </section>
</template>
