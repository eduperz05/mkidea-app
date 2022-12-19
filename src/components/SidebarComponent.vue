<script lang="ts">

export default {
}
</script>

<template>
    <nav class="sidenav-container">
            <div class="sidenav-items">
                <ul class="items">
                    <li>Home</li>
                    <li class="text">Profile Info</li>
                    <li>My Projects</li>
                    <li>Password and Security</li>
                    <li>Search for Ideas</li>
                </ul>
            </div>
            <div class="log-out">
                <button class="log-out-button btn"><a href="">Log Out</a></button>
            </div>
    </nav>
</template>

<style>
.sidenav-container {
    @apply bg-primary-lighter border-r-2 border-slate-400 px-10 py-8 h-[88vh] flex flex-col justify-between;
        .sidenav-items {
            @apply flex flex-col;
            .items {
                @apply flex flex-col gap-3;
                li {
                    @apply hover:text-primary-light cursor-pointer;
                }
                .text {
                    @apply text-primary;
                }
            }
            .log-out {
                @apply flex items-center justify-center;
            }
        }
    }
</style>
