<script lang="ts">
    import type{ PropType } from 'vue';

    export default {
        name: 'ProjectsContainer',
        props: {
            projects: {
                type: Array as PropType<Array<{ 
                    id_project: string,
                    name: string,
                    id_owner: string,
                    updatedAt: string,
                    status: string
                }>>,
                required: true,
            },
        },  
    }; 
</script>

<template>
    <div class="table-columns">
        <div class="project-organization-column">
            <div v-for="project in projects">
                <router-link :to="{ name: 'project', params: { id_project: project.id_project}}"> 
                    {{ project.name }}
                </router-link>
            </div>
        </div>
        <div class="project-organization-column">
            <p v-for="project in projects">{{ project.id_owner }}</p>
        </div>
        <div class="project-organization-column">
            <p v-for="project in projects">{{ project.updatedAt }}</p>
        </div>
        <div class="project-organization-column">
            <p class="checkbox-column-container" v-for="project in projects">
                <div class="checkbox-container" v-if="project.status == 'active' || project.status == 'pending'"> 
                    <input type="checkbox" class="checkbox-item">
                </div>
                <div class="checkbox-container" v-else>
                    <input type="checkbox" class="checkbox-item" checked>
                </div>
            </p>
        </div>
        <div class="project-organization-column">
            <a v-for="project in projects"><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
        </div>
    </div>
</template>

<style>
.table-columns {
        @apply grid grid-cols-5 text-center bg-white;
        .project-organization-column {
            @apply grid grid-cols-1;
        }

        .project-organization-column:first-child {
            @apply border-l-2 border-slate-400;
        }

        .project-organization-column:last-child {
            @apply border-r-2 border-slate-400;
        }

        .project-organization-column p, .project-organization-column a {
            @apply grid py-3 border-b-2 border-slate-400;
        }

        .project-organization-column div {
            @apply grid;
        }

        .checkbox-item {
            @apply scale-50 accent-primary;
        }

        .bin-icon {
            @apply mx-auto cursor-pointer;
        }
    }
</style>