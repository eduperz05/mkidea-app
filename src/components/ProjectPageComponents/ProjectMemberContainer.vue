<script lang="ts">
import { getData } from '@/modules/fetchData';
import type{ PropType } from 'vue';
    export default {
        name: 'ProjectMemberContainer',
        props: {
            members: {
                type: Array as PropType<Array<{ 
                    username: string,
                    role: number,
                    email: string,
                }>>,
                required: true,
            }
        },
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
                    <p v-for="member of members">{{member.username}}</p>
                </div>
                <div class="members-column">
                    <p v-for="member of members">{{member.role}}</p>
                </div>
                <div class="members-column">
                    <p v-for="member of members">{{member.email}}</p>
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