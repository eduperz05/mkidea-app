<script lang="ts">
    export default {
        name: 'ProjectMemberContainer'
    }; 
</script>


<template>    
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
</template>

<style>
.project-members-container {
                @apply h-full w-full text-center font-spaceGrotesk tracking-wide border-2 border-slate-400 rounded-lg bg-white;
                .members-title {
                    @apply font-spaceGrotesk text-3xl font-bold py-4 bg-primary-lighter;
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
</style>