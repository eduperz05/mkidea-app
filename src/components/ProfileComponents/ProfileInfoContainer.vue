<script lang="ts">
    import { getUserInfo } from '@/modules/getUserInfo';
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
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            },
            about: {
                type: String,
                required: true
            }
        },
        mounted() {
            this.getUser()
        },
        methods: {
            async getUser() {
                const users = await getUserInfo("http://localhost:3000/user/3", "GET")
                users.map((user: any) => {
                    const { firstname, lastname, about, phone, email } = user
                    this.firstname = firstname
                    this.lastname = lastname
                    this.about = about
                    this.phone = phone
                    this.email = email
                })
            },
        },
        data() {
            return {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                phone: this.phone,
                about: this.about
            }
        }
        
    };
</script>

<template>
    <div class="profile-info-container">
        <div class="profile-info">
            <p><strong>First Name</strong></p>
            <p>{{ firstname }}</p>
        </div>
        <div class="profile-info">
            <p><strong>Last Name</strong></p>
            <p>{{ lastname }}</p>
        </div>
            <div class="profile-info">
            <p><strong>Email</strong></p>
            <p>{{ email }}</p>
        </div>
        <div class="profile-info">
            <p><strong>Phone Number</strong></p>
            <p>{{ phone }}</p>
        </div>
        <div class="about-you">
            <p><strong>About You</strong></p>
            <p class="text-justify">{{ about }}</p>
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