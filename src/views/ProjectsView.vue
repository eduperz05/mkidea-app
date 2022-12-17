<script lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
    components: { NavbarComponent, SidebarComponent }
}
</script>

<template>
    <div>
        <NavbarComponent />
        <div class="projects-container">
            <SidebarComponent />
            <div class="projects-section-container">
                <div class="flex flex-col w-full">
                    <div class="projects-title-container">
                        <h2 class="projects-title">My Projects</h2>
                    </div>
                    <div class="project-table">
                        <div class="project-organization-header">
                            <p>Project Name</p>
                            <p>Product Owner Name</p>
                            <p>Date</p>
                            <p>Completed</p>
                        </div>
                        <div class="table-columns">
                            <div class="project-organization-column">
                                <p>Project 1</p>
                                <p>Project 2</p>
                                <p>Project 3</p>
                                <p>Project 4</p>
                            </div>
                            <div class="project-organization-column">
                                <p>Product Owner</p>
                                <p>Product Owner</p>
                                <p>Product Owner</p>
                                <p>Product Owner</p>
                            </div>
                            <div class="project-organization-column">
                                <p>--/--/--</p>
                                <p>--/--/--</p>
                                <p>--/--/--</p>
                                <p>--/--/--</p>
                            </div>
                            <div class="project-organization-column">
                                <p><input type="checkbox" class="checkbox-item"></p>
                                <p><input type="checkbox" class="checkbox-item"></p>
                                <p><input type="checkbox" class="checkbox-item"></p>
                                <p><input type="checkbox" class="checkbox-item"></p>
                            </div>
                        </div>
                    </div>
                    <div class="add-button-container">
                        <button class="add-button"><a href="">+ Add</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.projects-container {
    @apply w-full flex;

    .projects-section-container {
        @apply w-full flex gap-4 border-r-2 border-b-2 border-slate-400 rounded-br-lg;

        .projects-title-container {
            @apply flex items-center justify-center mb-5 p-5;

            .projects-title {
                @apply text-center font-spaceGrotesk text-3xl font-bold tracking-wide;
            }
        }

        .project-table {
            @apply grid items-center;

            .project-organization-header {
                @apply grid grid-cols-4 text-center bg-primary py-3 text-white;
            }

            .table-columns {
                @apply grid grid-cols-4 text-center;

                .project-organization-column {
                    @apply grid grid-cols-1 text-sm;
                }

                .project-organization-column p {
                    @apply grid py-3 border-b-2 border-slate-400;
                }

                .checkbox-item {
                    @apply accent-primary;
                }
            }
        }

        .add-button-container {
            @apply w-full flex bg-[#c8c0ff83] px-5 py-2 text-primary-light hover:text-primary;
        }
    }
}
</style>
