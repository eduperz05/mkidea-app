<script lang="ts">
export default {
    name: 'ProjectDescContainer',
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
    mounted() {
        console.log(this.project);
    }
}; 
</script>

<template>
    <div class="description-text">
        <p>
            The project consists of a webpage that can track <strong>how many hours of sleep</strong> you had.
            This way you can track if you're sleeping well or not.
            It's also a way to <strong>change your behaviour</strong> in case you're sleeping bad.
        </p>
    </div>
</template>

<style>
.description-text {
    @apply w-full flex items-center justify-center px-10;
}
</style>