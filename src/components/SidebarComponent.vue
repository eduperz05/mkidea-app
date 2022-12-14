<script lang="ts">

export default {
}
</script>

<template>
    <div class="sidenav-container">
        <nav class="sidenav">
            <div class="sidenav-items">
                <ul class="items">
                    <li class="text">Profile Info</li>
                    <li>Password and Security</li>
                    <li>My Projects</li>
                    <li>My Team</li>
                    <li>Search for Ideas</li>
                </ul>
                <div class="log-out">
                    <button class="log-out-button btn"><a href="">Log Out</a></button>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
.sidenav-container {
    @apply bg-primary-lighter border-t-0 border-2 border-slate-400 rounded-bl-lg px-4 py-8;
    .sidenav {
        @apply px-3 h-[65vh] flex;
        .sidenav-items {
            @apply flex flex-col justify-between;
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
}
</style>