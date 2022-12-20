<script lang="ts">
    import { getUserInfo, loginUser } from '@/modules/getUserInfo';
    export default {
        name: 'ProfileContainer',
        props: {
            firstname: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            about: {
                type: String,
                required: true
            }
        },
        methods: {
            async getLogin() {
                const URL = "http://167.99.35.238:3000/auth/login"
                console.log(await loginUser(URL, {
                    username: "romer2",
                    password: "Romer1234r"
                }))
            },
            async getUsers(){
                console.log(await getUserInfo("http://167.99.35.238:3000/user"))
            },
            async getLogout(){
                console.log(await getUserInfo("http://167.99.35.238:3000/auth/logout"))
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
            <p>John Smith</p>
            <a><img src="/img/edit.png" alt="edit icon" class="edit-icon"></a>
        </div>
        <p>Profession</p>
        <p>About you...</p>
        <button @click="getLogin">Login</button>
        <button @click="getUsers">Users</button>
        <button @click="getLogout">Logout</button>
    </div>
</template>
<style lang="scss">
    .profile-container {
        @apply w-full h-[450px] flex flex-col items-center justify-center gap-2 bg-white border-2 border-slate-400 rounded-lg;
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