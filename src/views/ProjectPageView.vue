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
                <div class="flex flex-col w-[40%]">
                    <div class="project-inftools-container flex-col w-full h-full">
                        <div class="project-info-container ">
                            <div class="project-image-container">
                                <img src="/img/project.png" alt="" class="profile-img">
                            </div>
                            <div class="info-title">
                                <h2>Project Name</h2>
                            </div>
                            <div class="project-info">
                                <div class="status">
                                    <p>Status: Completed</p><img src="/img/check.svg" class="check-icon">
                                </div>
                                <p>Owner: Eduardo Smith</p>
                                <p>Created/Updated</p>
                                <p>Participants: 2</p>
                            </div>
                        </div>
                        <div class="project-description-container">
                            <div class="description-title">
                                <h2>Project Description</h2>
                            </div>
                            <div class="description-text">
                                <p>
                                    The project consists of a webpage that can track <strong>how many hours of
                                        sleep</strong> you had.
                                    This way you can track if you're sleeping well or not.
                                    It's also a way to <strong>change your behaviour</strong> in case you're sleeping
                                    bad.
                                </p>
                            </div>
                            <div class="tools-title">
                                <h3>Tools</h3>
                            </div>
                            <div class="tools">
                                <div class="tool">
                                    <img src="/img/react.svg" alt="" class="tool-icon">
                                    <li>React</li>
                                </div>
                                <div class="tool">
                                    <img src="/img/typescript.svg" alt="" class="tool-icon">
                                    <li>TypeScript</li>
                                </div>
                                <div class="tool">
                                    <img src="/img/node.svg" alt="" class="tool-icon">
                                    <li>Node</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-[60%]">
                    <div class="project-group-container flex-col w-full h-full">
                        <div class="project-tools-container">
                            <div class="resources-title">
                                <h2>Project Resources</h2>
                            </div>
                            <p class="mb-2">This is the list of resources that we are using:
                            </p>
                            <div class="media-container">
                                <div class="icon-media-container">
                                    <img src="/img/trello.svg" alt="" class="icon">
                                    <p>Trello</p>
                                </div>
                                <div class="title-media-container">
                                    <p>Project Trello</p>
                                </div>
                            </div>
                            <div class="media-container">
                                <div class="icon-media-container">
                                    <img src="/img/github.svg" alt="" class="icon">
                                    <p>Github</p>
                                </div>
                                <div class="title-media-container">
                                    <p>Project Repository</p>
                                </div>
                            </div>
                            <div class="media-container">
                                <div class="icon-media-container">
                                    <img src="/img/twitter.png" alt="" class="icon">
                                    <p>Twitter</p>
                                </div>
                                <div class="title-media-container">
                                    <p>Project Twitter</p>
                                </div>
                            </div>
                            <div class="media-container">
                                <div class="icon-media-container">
                                    <img src="/img/discord.png" alt="" class="icon">
                                    <p>Discord</p>
                                </div>
                                <div class="title-media-container">
                                    <p>Project Discord</p>
                                </div>
                            </div>
                            <div class="media-container">
                                <div class="icon-media-container">
                                    <img src="/img/instagram.svg" alt="" class="icon">
                                    <p>Instagram</p>
                                </div>
                                <div class="title-media-container">
                                    <p>Project Instagram</p>
                                </div>
                            </div>
                        </div>
                        <div class="project-members-container">
                            <div class="members-title">
                                <p>Members</p>
                            </div>
                            <div class="members-content">
                                <div class="members-header">
                                    <p>Name</p>
                                    <p>Role</p>
                                    <p>Contact</p>
                                </div>
                                <div class="members">
                                    <div class="members-column">
                                        <p>John Smith</p>
                                        <p>Lucy Smith</p>
                                    </div>
                                    <div class="members-column">
                                        <p>FullStack</p>
                                        <p>Frontend</p>
                                    </div>
                                    <div class="members-column">
                                        <p>johnsmith@gmail.com</p>
                                        <p>lucysmith@gmail.com</p>
                                    </div>
                                </div>
                            </div>
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
        @apply w-full flex border-r-2 border-b-2 border-slate-400 rounded-br-lg bg-secondary-light;

        .project-inftools-container {
            @apply flex items-center justify-around;

            .project-info-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-r-2 border-slate-400 py-4 bg-white;

                .project-info {
                    @apply flex flex-col;

                    .status {
                        @apply flex justify-center gap-2;

                        .check-icon {
                            @apply w-5;
                        }
                    }
                }

                .project-image-container {
                    @apply flex w-full items-center justify-center rounded-full mb-6;

                    .profile-img {
                        @apply w-32 h-32 rounded-full border-2 border-slate-400 bg-secondary;
                    }

                }

                .info-title {
                    @apply text-2xl font-bold text-secondary-dark mb-2;
                }
            }

            .project-description-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-r-2 border-slate-400 py-3 flex flex-col gap-3 bg-white;

                .description-title {
                    @apply text-3xl font-bold;
                }

                .description-text {
                    @apply w-full flex items-center justify-center px-10;

                }

                .tools-title {
                    @apply font-spaceGrotesk text-2xl font-bold;
                }

                .tools {
                    @apply flex flex-col gap-2;

                    .tool {
                        @apply flex justify-center list-none gap-2;
                    }

                    .tool-icon {
                        @apply w-5;
                    }
                }

            }

        }

        .project-group-container {
            @apply flex flex-col gap-4 p-4;

            .project-tools-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-2 border-slate-400 rounded-lg bg-white;

                .resources-title {
                    @apply text-3xl font-bold mb-2 mt-2;
                }

                .media-container {
                    @apply px-12 grid grid-cols-2 text-left border-t-2 border-slate-400 py-3;

                    .icon-media-container {
                        @apply flex justify-start gap-12;
                    }

                    .icon {
                        @apply w-7 h-7;
                    }
                }
            }


            .project-members-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-2 border-slate-400 rounded-lg bg-white;

                .members-title {
                    @apply font-spaceGrotesk text-3xl font-bold py-4;
                }

                .members-content {
                    @apply grid items-center;

                    .members-header {
                        @apply grid grid-cols-3 py-3 bg-slate-200 font-bold;
                    }

                    .members {
                        @apply grid grid-cols-3;

                        .members-column p {
                            @apply grid text-sm border-b-2 border-slate-400 py-3;
                        }
                    }
                }
            }
        }
    }
}
</style>
