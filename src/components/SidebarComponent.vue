<script lang="ts">
import { postData } from '@/modules/fetchData';
export default {
    name: "SidebarComponent",
    methods: {
        logOut() {
            postData(import.meta.env.VITE_API_HOST + "/auth/logout", 
                {}).then((data) => {
                if (data.status === 200) {
                    this.$router.push({ name: 'login' });
                } else {
                    alert("Could not log out.");
                }
                });
        },
    },
}
</script>

<template>
    <nav class="sidenav-container">
        <div class="sidenav-items">
            <ul class="items">
                <li><router-link to="/">Start Project</router-link></li>
                <li><router-link to="/profile">Profile Info</router-link></li>
                <li><router-link to="/projects">My Projects</router-link></li>
                <li><router-link to="/password">Password and Security</router-link></li>
            </ul>
        </div>
        <div class="log-out">
            <button class="log-out-button btn" @click="logOut">Log Out</button>
        </div>
    </nav>
</template>

<style>
.sidenav-container {
    @apply min-w-[240px] min-h-[88vh] bg-primary-lighter border-r-2 border-slate-400 px-10 py-8 flex flex-col justify-between;
        .sidenav-items {
            @apply flex flex-col;
            .items {
                @apply flex flex-col gap-3;
                li {
                    @apply hover:text-primary-light cursor-pointer;
                }
                a:focus {
                    @apply text-primary;
                }

            }

            .log-out {
                @apply flex items-center justify-center;
            }
        }
    }
</style>
