<script lang="ts">
export default {
    name: 'ProjectsEditContainer'
};
</script>

<template>
    <button class="edit-button">Edit<img src="/img/edit-primary.png" class="edit-icon"></button>

</template>

<style lang="scss">
.edit-button {
    @apply flex items-center justify-center gap-2 w-32 py-2 px-8 bg-white rounded-lg mb-5 border-2 border-primary-light text-[15px];

    .edit-icon {
        @apply w-7;
    }
}
</style>