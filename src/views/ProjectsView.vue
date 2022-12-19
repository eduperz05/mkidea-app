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
                <div class="flex flex-col w-full bg-secondary-light">
                    <div class="projects-title-container">
                        <h2 class="projects-title">My Projects</h2>
                    </div>
                    <div class="project-table">
                        <button class="edit-button">Edit<img src="/img/edit-primary.png" class="edit-icon"></button>
                        <div class="project-organization-header">
                            <p>Project Name</p>
                            <p>Product Owner Name</p>
                            <p>Date</p>
                            <p>Completed</p>
                            <p>Delete</p>
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
                            <div class="project-organization-column">
                                <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
                                <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
                                <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
                                <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
                            </div>
                        </div>
                        <div class="add-button-container">
                            <button class="add-button"><a href="">+ Add</a></button>
                        </div>
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
            @apply flex items-center justify-center p-5 bg-white;

            .projects-title {
                @apply text-center font-spaceGrotesk text-3xl font-bold tracking-wide mb-3;
            }
        }

        .project-table {
            @apply grid items-center px-10 py-10 bg-secondary-light;

            .edit-button {
                @apply flex items-center justify-center gap-2 w-32 py-2 px-8 bg-white rounded-lg mb-5 border-2 border-primary-light text-[15px];
                .edit-icon {
                    @apply w-7;
                }
            }

            .project-organization-header {
                @apply grid grid-cols-5 text-center bg-primary py-3 text-white rounded-t-lg;
            }

            .table-columns {
                @apply grid grid-cols-5 text-center bg-white;

                .project-organization-column {
                    @apply grid grid-cols-1;
                }

                .project-organization-column p, .project-organization-column a {
                    @apply grid py-3 border-b-2 border-slate-400;
                }

                .checkbox-item {
                    @apply scale-50 accent-primary;
                }

                .bin-icon {
                    @apply mx-auto cursor-pointer;
                }
            }
            .add-button-container {
                @apply w-full flex bg-primary-lighter px-10 py-2 text-primary-light hover:text-primary rounded-b-lg;
            }
        }
    }
}
</style>
