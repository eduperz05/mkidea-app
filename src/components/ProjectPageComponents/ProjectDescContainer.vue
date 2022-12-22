<script lang="ts">
export default {
    name: 'ProjectDescContainer',
    props: {
        project: {
            type: Object,
            required: true,
        }
    }
}; 
</script>

<template>
    <div class="description-text">
        <p>
            {{ project.description }}
        </p>
    </div>
</template>

<style>
.description-text {
    @apply w-full flex items-center justify-center px-10;
}
</style>