<script lang="ts">
    import ProjectsEditContainer from "@/components/ProjectsComponents/ProjectsEditContainer.vue"
    import ProjectsButtonContainer from "@/components/ProjectsComponents/ProjectsButtonContainer.vue"
    import ProjectsContainer from '@/components/ProjectsComponents/ProjectsContainer.vue';
    import { getData } from "@/modules/fetchData";
    export default {
        name: "ProjectsView",
        components: {
            ProjectsEditContainer,
            ProjectsContainer,
            ProjectsButtonContainer,
        },
        data() {
            return {
                projects: []
            }
        },
        created() {
            getData("api.mkidea.tech" + "/project/owner/me").then((res) => {
            const allProjects = res;
            this.projects = allProjects.slice(0,8);
            });
        },
    }
</script>

<template>
    <div class="projects-section-container">
        <div class="flex flex-col w-full">
            <div class="projects-title-container">
                <h2 class="projects-title">My Projects</h2>
            </div>
            <div class="project-table">
                <ProjectsEditContainer />
                <div class="project-organization-header">
                    <p>Project Name</p>
                    <p>Product Owner Name</p>
                    <p>Date</p>
                    <p>Completed</p>
                    <p>Delete</p>
                </div>
                <ProjectsContainer :projects="projects"/>
                <ProjectsButtonContainer/>
            </div>
        </div>
    </div>
</template>

<style>
    .projects-section-container {
        @apply w-full flex gap-4;
        .projects-title-container {
            @apply flex items-center justify-center p-5 bg-white;
            .projects-title {
                @apply text-center font-spaceGrotesk text-3xl font-bold tracking-wide mb-3;
            }
        }

        .project-table {
            @apply grid items-center px-10 py-10;
            .project-organization-header {
                @apply grid grid-cols-5 text-center bg-primary py-3 text-white rounded-t-lg border-b-0 border-2 border-slate-400;
            }
        }
    }
</style>
