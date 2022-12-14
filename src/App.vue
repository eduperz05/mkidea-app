<script setup lang="ts">
import ProfileView from '@/views/ProfileView.vue';
import SearchIdeasView from '@/views/SearchIdeasView.vue';
</script>

<template>
  <div class="app">
    <!-- <ProfileView /> -->
    <SearchIdeasView />
  </div>

</template>

<style lang="scss">
@import "@/index.scss";
.app {
  @apply w-[70%];
}
</style>
