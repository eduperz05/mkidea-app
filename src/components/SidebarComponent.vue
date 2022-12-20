<script lang="ts">
export default {
    name: "SidebarComponent",
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
            <button class="log-out-button btn"><a href="">Log Out</a></button>
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
