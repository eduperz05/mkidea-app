<script lang="ts">
export default {
    name: 'ProjectMainContainer',
    props: {
    },
}; 
</script>

<template>
    <div class="project-info">
        <div class="status">
            <p>Status: Completed</p><img src="/img/check.svg" class="check-icon">
        </div>
        <p>Owner: John Smith</p>
        <p>Created/Updated</p>
        <p>Participants: 2</p>
    </div>
</template>

<style>
    .project-info {
        @apply flex flex-col;
        .status {
            @apply flex justify-center gap-2;
            .check-icon {
                @apply w-5;
            }
        }
    }
</style>




