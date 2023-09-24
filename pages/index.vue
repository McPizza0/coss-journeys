<script setup lang="ts">
const links = [
  { name: 'Youtube', icon: '', href: '/' },
  { name: 'Twitch', icon: '', href: '/about' },
  { name: 'Twitter', icon: '', href: '/contact' },
];
</script>

<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center gap-8 overflow-hidden">
    <div
      class="w-full h-screen flex flex-col items-center justify-start gap-8 overflow-y-scroll pt-20 pb-20 pl-8 pr-8">
      <div
        class="flex flex-col rounded-3xl bg-base-3 gap-0 items-center min-w-40 min-h-40 justify-center">
        <span class="font-display text-4xl">COSS</span>
        <span class="font-display text-xl">Journeys</span>
      </div>
      <div>
        <span>
          A dive into the early life of a COSS startup (commercial open source
          software)
        </span>
        <span>
          Meet the founders, learn about the product, and see how they are
          building a business.
        </span>
      </div>
      <div class="flex flex-col gap-4 items-center w-sm">
        <span class="font-display text-2xl">Watch live</span>
        <nuxt-link
          to="https://youtube.com/@cossjourneys"
          class="p-4 bg-base-3 rounded w-full cursor-pointer">
          <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-4">
              <svg-icon name="youtube" class="w-8 h-8" />
              <span class="font-display text-xl">Youtube</span>
            </div>
            <span class="font-display text-xl">@COSSJourneys</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="https://www.twitch.tv/mcpizza0"
          class="p-4 bg-base-3 rounded w-full cursor-pointer">
          <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-4">
              <svg-icon name="twitch" class="w-8 h-8" />
              <span class="font-display text-xl">Twitch</span>
            </div>
            <div>
              <span class="font-display text-xl">@McPizza0</span>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link
          to="https://x.com/mcpizza0"
          class="p-4 bg-base-3 rounded w-full cursor-pointer">
          <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-4">
              <svg-icon name="twitter" class="w-8 h-8" />
              <svg-icon name="x" class="w-8 h-8 fill-base-12" />
              <span class="font-display text-xl">Twitter / X</span>
            </div>
            <span class="font-display text-xl">@McPizza0</span>
          </div>
        </nuxt-link>
      </div>

      <div class="flex flex-col gap-4 items-center w-sm">
        <span class="font-display text-2xl">Links</span>
        <nuxt-link
          to="https://coss.fyi/d"
          class="p-4 bg-base-3 rounded w-full cursor-pointer">
          <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-2">
              <svg-icon name="youtube" class="w-8 h-8" />
            </div>
            <span class="font-display text-xl">COSS Discord Server</span>
          </div>
        </nuxt-link>
        <nuxt-link
          to="https://x.com/mcpizza0"
          class="p-4 bg-base-3 rounded w-full cursor-pointer">
          <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-2">
              <svg-icon name="twitter" class="w-8 h-8" />
              <svg-icon name="x" class="w-8 h-8 fill-base-12" />
            </div>
            <span class="font-display text-xl">Omar's Twitter / X</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
