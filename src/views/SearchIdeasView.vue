<script lang="ts">
    import 'tw-elements';
    import NavbarComponent from '@/components/NavbarComponent.vue';
    import SidebarComponent from '@/components/SidebarComponent.vue';
    export default {
        components: {
            NavbarComponent,
            SidebarComponent
    }
}
</script>

<template>
    <div>
        <NavbarComponent />
        <div class="start-project-container">
            <SidebarComponent />
            <div class="start-project-content">
                <div class="start-title">
                    <h1>Start Project</h1>
                </div>
                <div class="start-project">
                    <div class="tutorial-block">
                        <div class="start-sub-title">
                        <p>How To Start</p>
                        </div>
                        <div class="start-sub-text"><p><strong>Sign Up or Log In</strong> in case you already have an account. Go to our Projects Page. Add your first project including name, description, dates...</p></div>
                    </div>
                    <div class="tutorial-block">
                        <div class="start-sub-title">
                            <p>What do you need to get started?</p>
                        </div>
                            <p class="start-sub-text">First define your Goals, your Work and identify your Team Members. Develop your Plan, don't forget to Delegate and Execute and Monitor.</p>
                    </div>
                            </div>
                    <div class="start-btn-container">
                        <button class="btn">Start</button>
                    </div>
                <div class="search-ideas-title">
                    <h1 class="search-title">Search for Ideas</h1>
                    <p class="search-text">Type a keyword to search for an idea related to it.</p>
                </div>
                <div class="search-input-section">
                    <div class="keyword">
                        <input type="text" placeholder="Write your keyword here" class="keyword-input">
                    </div>
                    <div class="search-button">
                        <button class="search-btn btn">Search</button>
                    </div>
                </div>
                <div class="search-results">
                    <ul>
                        <li>Landing Page</li>
                        <li>Landing Page</li>
                        <li>Landing Page</li>
                        <li>Landing Page</li>
                        <li>Landing Page</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
</template>

<style>
.start-project-container {
    @apply flex border-r-2 border-slate-400 rounded-br-lg;
    .start-project-content {
        @apply w-full flex flex-col border-b-2 border-slate-400 rounded-br-lg;
        .start-title{
            @apply w-full flex items-center justify-center font-spaceGrotesk text-3xl font-bold tracking-wide bg-white py-5;
        }
        .start-project {
            @apply w-full flex justify-center gap-12 px-10 py-5;
            .tutorial-block {
                @apply flex flex-col gap-2;
            }
            .start-sub-title {
                @apply text-center bg-primary-lighter rounded-md shadow-md p-1;
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
        .search-input-section {
            @apply flex justify-center gap-4 mb-5;
        .keyword {
            @apply flex flex-col gap-2;
            .keyword-input {
                @apply w-96 px-5 py-2 bg-slate-100 rounded-lg text-sm;
            }
        }
        .search-button {
            @apply flex items-end;
            .search-btn {
                @apply p-1.5;
            }
        }
    }
        }
    .search-results {
        @apply px-10 mt-2;
        li {
            @apply border-t-0 border-2 border-slate-400 px-10 py-3;
        }
        li:first-child {
            @apply border-t-2 border-slate-400 rounded-t-lg;
        }
        li:last-child {
            @apply rounded-b-lg;
        }
    }

}
</style>
