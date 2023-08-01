<script setup lang="ts">
import TheContainer from './TheContainer.vue';
import ContactMe from './ContactMe.vue';
</script>

<template>
  <section>
    <TheContainer
      class="flex flex-col items-center border-b border-b-grayish pb-20 md:block xl:relative"
    >
      <img
        class="right-0 top-0 -z-[1] max-w-[70%] md:fixed md:w-[40%] xl:absolute xl:-top-[170px] xl:max-w-[490px]"
        src="../assets/images/main.jpg"
        alt="motorcycle helmet with eyes lenses"
      />
      <h1
        class="mt-10 text-center text-4xl leading-10 tracking-heading-l md:mt-24 md:max-w-[55%] md:text-left md:text-[64px] md:leading-[72px] md:-tracking-[2px] xl:mt-28"
      >
        Nice to meet you! I’m
        <span class="whitespace-nowrap border-b-4 border-b-accent md:whitespace-normal">
          otr-web-study</span
        >.
      </h1>
      <p
        class="mt-9 text-center text-base leading-[26px] text-silver md:mt-[60px] md:max-w-[50%] md:text-left md:text-normal md:leading-[28px]"
      >
        I’m a front-end developer passionate about building accessible web apps that users love.
      </p>
      <ContactMe class="mt-5 md:mt-52" />
    </TheContainer>
  </section>
</template>
