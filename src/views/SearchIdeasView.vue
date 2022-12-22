<script lang="ts">
    import SearchContainer from '@/components/SearchComponents/SearchContainer.vue';
    import { getData } from "@/modules/fetchData";
    export default {
        name: "SearchIdeasView",
        components: {
            SearchContainer
        },
    data() {
        return {
            projects: [],
        }
    },
    created() {
        getData( import.meta.env.VITE_API_HOST + "/public/project").then((res) => {
            const allProjects = res.map((project:any) => project.name);
            this.projects = allProjects.slice(0,5);
        });
    }
}
</script>

<template>
    <div class="start-project-container">
        <div class="start-project-content">
            <div class="start-title">
                <h1>Start Project</h1>
            </div>
            <div class="start-project">
                <div class="tutorial-block">
                    <div class="start-sub-title">
                        <p>How To Start</p>
                    </div>
                    <div class="start-sub-text">
                        <p>
                            <strong>Sign Up or Log In</strong> in case you already have an account. Go to our Projects Page. 
                            Add your first project including name, description, dates...
                        </p>
                    </div>
                </div>
                <div class="tutorial-block">
                    <div class="start-sub-title">
                        <p>What do you need to get started?</p>
                    </div>
                    <p class="start-sub-text">
                        First define your Goals, your Work and identify your Team Members. Develop your Plan, 
                        don't forget to Delegate and Execute and Monitor.
                    </p>
                </div>
            </div>
            <div class="start-btn-container">
                <button class="btn"><router-link to="/projects">Start</router-link></button>
            </div>
            <div class="search-ideas-title">
                <h1 class="search-title">Search for Ideas</h1>
                <p class="search-text">Type a keyword to search for an idea related to it.</p>
            </div>
            <SearchContainer :projects="projects" />
        </div>
    </div>
</template>

<style>
    .start-project-container {
        @apply flex;
        .start-project-content {
            @apply w-full flex flex-col p-10;
            .start-title{
                @apply w-full flex items-center justify-center font-spaceGrotesk text-3xl font-bold tracking-wide bg-white py-5;
            }

            .start-project {
                @apply w-full flex justify-center gap-12 px-10 py-5;
                .tutorial-block {
                    @apply flex flex-col gap-2 border-2 border-slate-400 rounded-lg p-2;
                }

                .start-sub-title {
                    @apply text-center bg-secondary-light rounded-md shadow-md p-1;
                }

                .start-sub-text {
                    @apply flex flex-col text-center leading-6;
                }
            }

            .start-btn-container {
                @apply flex items-center justify-center my-5;
            }

            .search-ideas-title {
                @apply flex flex-col items-center gap-1.5;
                .search-title {
                    @apply w-full flex items-center justify-center font-spaceGrotesk text-3xl font-bold tracking-wide;
                }

                .search-text {
                    @apply text-slate-600 mb-5;
                }
            }
        }
    }
</style>
