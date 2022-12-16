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
        <div class="project-page-container">
            <SidebarComponent />
            <div class="project-section-container">
                <div class="flex flex-col w-full">
                    <div class="project-inftools-container flex-col w-full h-full">
                        <div class="project-info-container ">
                            <div class="project-image-container">
                                <img src="/img/ppic.webp" alt="" class="profile-img">
                            </div>
                            <div class="info-title">
                                <h2>Project Name</h2>
                            </div>
                            <p>The project consist on a webpage that can track how many hours of sleep you had.
                                this way you can track if you're sleeping well or not.It's also a way to
                                change your behaviour in case you're sleeping bad
                            </p>
                        </div>
                        <div class="project-tools-container">
                            <div class="tools-title">
                                <h2>Tools</h2>
                            </div>
                            <p>The tools that we will use are the next ones:
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full">
                    <div class="project-group-container flex-col w-full h-full">
                        <div class="project-members-container">
                            <div class="members-title">
                                <p>Members</p>
                            </div>
                            <p>Paco</p>
                        </div>
                        <div class="project-task-container">
                            <div class="task-title">
                                <p>Task</p>
                            </div>
                            <p>Wtf is here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.project-page-container {
    @apply w-full flex;

    .project-section-container {
        @apply w-full flex gap-4 border-r-2 border-b-2 border-slate-400 rounded-br-lg;

        .project-inftools-container {
            @apply flex gap-4 items-center justify-around;

            .project-info-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-b-2 border-r-2 border-slate-400 rounded-br-lg;

                .project-image-container {
                    @apply flex w-full items-center justify-center rounded-full mb-6 h-32;

                    .profile-img {
                        @apply flex w-32 h-32 rounded-full border-2 border-slate-400 bg-secondary;
                    }

                    .info-title {
                        @apply font-spaceGrotesk text-3xl font-bold
                    }
                }

            }

            .project-tools-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-t-2 border-r-2 border-slate-400 rounded-tr-lg;

                .tools-title {
                    @apply font-spaceGrotesk text-3xl font-bold
                }
            }
        }

        .project-group-container {
            @apply flex flex-col gap-4;

            .project-members-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-b-2 border-l-2 border-slate-400 rounded-bl-lg;

                .members-title {
                    @apply font-spaceGrotesk text-3xl font-bold
                }

            }

            .project-task-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-t-2 border-l-2 border-slate-400 rounded-tl-lg;

                .task-title {
                    @apply font-spaceGrotesk text-3xl font-bold
                }

            }
        }
    }
}
</style>