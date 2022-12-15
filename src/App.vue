<script setup lang="ts">
import ProfileView from '@/views/ProfileView.vue';
import PasswordView from '@/views/PasswordView.vue'; 
import SearchIdeasView from '@/views/SearchIdeasView.vue';
import ProjectsView from './views/ProjectsView.vue';
</script>

<template>
  <div class="app">
    <!-- <ProfileView /> -->
    <!-- <SearchIdeasView /> -->
    <!-- <PasswordView /> -->
    <ProjectsView />
  </div>

</template>

<style lang="scss">
@import "@/index.scss";
.app {
  @apply w-[70%];
}
</style>
