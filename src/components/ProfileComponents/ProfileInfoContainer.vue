<script lang="ts">
    export default {
        name: "ProfileContainer",
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    };
</script>

<template>
    <div class="profile-info-container">
        <div class="profile-info">
            <p><strong>First Name</strong></p>
            <p>{{ user.firstname }}</p>
        </div>
        <div class="profile-info">
            <p><strong>Last Name</strong></p>
            <p>{{ user.lastname }}</p>
        </div>
            <div class="profile-info">
            <p><strong>Email</strong></p>
            <p>{{ user.email }}</p>
        </div>
        <div class="profile-info">
            <p><strong>Phone Number</strong></p>
            <p>+34 {{ user.phone }}</p>
        </div>
        <div class="about-you">
            <p><strong>About You</strong></p>
            <p class="text-justify">{{ user.about }}</p>
        </div>
    </div>
</template>

<style lang="scss">
    .profile-info-container {
        @apply w-5/6 grid bg-white border-2 border-slate-400 rounded-lg;
        .profile-info {
            @apply grid grid-cols-2 px-10 border-b-2 border-slate-400 items-center;
        }

        .about-you {
            @apply grid px-10 py-3;
        }
    }
</style>