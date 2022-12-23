import { getData } from '../../modules/fetchData';
<script lang="ts">
import { getData } from '@/modules/fetchData';
export default {
    name: 'ProjectMainContainer',
    props: {
        project: {
            type: Object,
            required: true,
        }
    },
}; 
</script>

<template>
    <div class="project-info">
        <div class="status">
            <p >Status: {{ project.status }}</p>
            <img v-if="project.status == 'active'" src="/img/check.svg" class="check-icon">
            <img v-else src="/img/cross.svg" class="check-icon">
            
        </div>
        <p> {{ project.id_owner }} </p>
        <p> {{ project.createdAt.split("T")[0] }} </p>
    </div>
</template>

<style>
    .project-info {
        @apply flex flex-col py-4;
        .status {
            @apply flex justify-center gap-2 py-4;
            .check-icon {
                @apply w-5;
            }
        }
    }
</style>




