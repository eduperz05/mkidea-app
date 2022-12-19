<script setup lang="ts">
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import SidebarComponent from '@/components/SidebarComponent.vue';
</script>

<template>
  <div class="app">
    <NavbarComponent />
    <div class="app-container">
      <SidebarComponent />
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/index.scss";

.app {
  @apply w-full h-full;
  .app-container {
    @apply w-full flex;
  }
}
</style>
