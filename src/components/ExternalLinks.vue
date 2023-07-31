<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue';
import FmIcon from '@/components/icons/FmIcon.vue';
import TelegramIcon from '@/components/icons/TelegramIcon.vue';
</script>

<template>
  <nav>
    <ul class="flex items-center gap-6">
      <li>
        <a href="https://github.com/otr-web-study" target="_blank">
          <GithubIcon
            class="h-5 w-5 fill-grayish transition-fill hover:fill-accent md:h-6 md:w-6"
          />
        </a>
      </li>
      <li>
        <a href="https://www.frontendmentor.io/profile/otr-web-study" target="_blank">
          <FmIcon class="h-5 w-5 fill-grayish transition-fill hover:fill-accent md:h-6 md:w-6" />
        </a>
      </li>
      <li>
        <a href="https://t.me/tr01egr" target="_blank">
          <TelegramIcon
            class="h-5 w-5 fill-grayish transition-fill hover:fill-accent md:h-6 md:w-6"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>
