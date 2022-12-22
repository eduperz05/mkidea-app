<script lang="ts">
import ProjectMainContainer from '@/components/ProjectPageComponents/ProjectMainContainer.vue';
import ProjectDescContainer from '@/components/ProjectPageComponents/ProjectDescContainer.vue';
import ProjectMemberContainer from '@/components/ProjectPageComponents/ProjectMemberContainer.vue';
import { getData } from '../modules/fetchData';
export default {
    name: "ProjectPageView",
    components: {
        ProjectMainContainer,
        ProjectDescContainer,
        ProjectMemberContainer,
    },
    data() {
        return {
            project: {
                id_project: "",
                name: "",
                id_owner: "",
                createdAt: "",
                status: "",
                description: "",
            },
            members: [""],
        }
    },
    mounted() {
        getData(import.meta.env.VITE_API_HOST + "/project/" + this.$route.params.id_project).then((res) => {
            this.project = {
                id_project: res.id_project,
                name: res.name,
                id_owner: res.id_owner,
                createdAt: res.createdAt,
                status: res.status,
                description: res.description
            }
        }).then(() => {
            getData(import.meta.env.VITE_API_HOST + "/public/user/" + this.project.id_owner).then((res) => {
                this.project.id_owner = res.username;
            });
        }).then(() => {
            getData(import.meta.env.VITE_API_HOST + "/team/project/" + this.project.id_project).then((res) => {
                res.map((member: any) => {
                    console.log(member);
                    getData(import.meta.env.VITE_API_HOST + "/public/user/" + member.id_users).then((res) => {
                        this.members.push(res);
                    });
                });
            });
        });


    },
}
</script>

<template>
    <div class="project-section-container">
        <div class="flex flex-col w-[40%]">
            <div class="project-inftools-container flex-col w-full h-full">
                <div class="project-info-container ">
                    <div class="project-image-container">
                        <img src="/img/project.png" alt="" class="profile-img">
                    </div>
                    <div class="info-title">
                        <h2>Project Name</h2>
                        <a><img src="/img/edit.png" alt="edit icon" class="edit-icon"></a>
                    </div>
                    <ProjectMainContainer :project="project" />
                </div>
                <div class="project-description-container">
                    <div class="description-title">
                        <h2>Project Description</h2>
                    </div>
                    <ProjectDescContainer :project="project" />
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
        <div class="flex flex-col w-[60%] px-14">
            <div class="project-group-container flex-col w-full h-full">
                <div class="project-tools-container">
                    <div class="resources-title">
                        <h2>Project Resources</h2>
                    </div>
                    <p class="py-2">This is the list of resources that we are using:
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
                <ProjectMemberContainer :members="members" />
            </div>
        </div>
    </div>
</template>

<style>
.project-section-container {
    @apply w-full flex bg-secondary-light;

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
                @apply flex items-center justify-center gap-2 text-2xl font-bold text-secondary-dark mb-2;

                .edit-icon {
                    @apply w-7;
                }
            }
        }

        .project-description-container {
            @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-r-2 border-slate-400 py-3 flex flex-col gap-3 bg-white;

            .description-title {
                @apply text-3xl font-bold py-4;
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
        @apply flex flex-col gap-4 py-4;

        .project-tools-container {
            @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-2 border-slate-400 rounded-lg bg-white;

            .resources-title {
                @apply text-3xl font-bold py-4 bg-primary-lighter;
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
    }
}
</style>
