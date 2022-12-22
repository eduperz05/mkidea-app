<script lang="ts">
    export default {
        name: 'ProfileContainer',
        props: {
            user: {
                type: Object,
                required: true
            }
        } 
    };
</script>
<template>
    <div class="profile-container">
        <div class="image-container">
            <img src="/img/ppic.jpeg" alt="" class="profile-img">
        </div>
        <div class="name-surname">
            <p>{{ user.firstname }} {{ user.lastname }}</p>
            <a><img src="/img/edit.png" alt="edit icon" class="edit-icon"></a>
        </div>
        <p>{{ user.role }}</p>
        <p class="w-72 text-center">{{ user.about }}</p>
    </div>
</template>
<style lang="scss">
    .profile-container {
        @apply w-3/12 h-[450px] flex flex-col items-center justify-center gap-2 bg-white border-2 border-slate-400 rounded-lg;
        .image-container {
            @apply rounded-full mb-6;
            .profile-img {
                @apply w-32 h-32 rounded-full border-2 border-secondary-light;
            }
        }

        .name-surname {
            @apply flex items-center justify-center gap-2 text-2xl font-bold text-secondary-dark;
            .edit-icon {
                @apply w-7;
            }
        }
    }
</style>