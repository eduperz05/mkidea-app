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
        mounted() {
            this.getLogin()
            this.getUsers()
        },
        methods: {
            async getLogin() {
                const URL = "http://localhost:3000/auth/login"
                console.log(await loginUser(URL, {
                    username: "romer3",
                    password: "Romer1234r"
                }))
            },
            async getUsers(){ 
                const user = await getUserInfo("http://localhost:3000/user/username/shincry", "GET")
                const { firstname, lastname, role, about } = user
                this.firstname = firstname
                this.lastname = lastname
                this.role = role
                this.about = about
            },
            async getLogout(){
                console.log(await getUserInfo("http://localhost:3000/auth/logout", "POST"))
            }
        },
        data() {
            return {
                firstname: this.firstname,
                lastname: this.lastname,
                role: this.role,
                about: this.about
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
            <p>{{ firstname }}{{ lastname }}</p>
            <a><img src="/img/edit.png" alt="edit icon" class="edit-icon"></a>
        </div>
        <p>{{role}}</p>
        <p>{{about}}</p>
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