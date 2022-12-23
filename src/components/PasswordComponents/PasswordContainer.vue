<script lang="ts">
    import { patchData } from '@/modules/fetchData';
    export default {
        name: 'PasswordContainer',
        data() {
            return {
                currentPassword: '',
                newPassword: '',
                confirmedNewPassword: '',
            };
        },
        methods: {
            savePassword() {
                if (this.newPassword === this.confirmedNewPassword) {
                    patchData("api.mkidea.tech" + "/user/changePassword/me", {
                        password: {
                            currentPassword: this.currentPassword,
                            newPassword: this.newPassword,
                        },
                    }).then((res) => {
                        if (res.status === 200) {
                            alert('Password changed successfully');
                        }
                        else {
                            alert('Password change failed');
                        }
                    });
                } else {
                    alert('Passwords do not match');
                }
            },
        }
    };
</script>
<template>
    <div class="change-password-content">
        <div class="password-inputs">
            <div class="current-password">
                <label for="">Current Password</label>
                <input v-model="currentPassword" type="password" placeholder="****************">
            </div>
            <div class="new-password">
                <label for="">New Password</label>
                <input v-model="newPassword" type="password" placeholder="****************">
            </div>
            <div class="confirm-new">
                <label for="">Confirm New Password</label>
                <input v-model="confirmedNewPassword" type="password" placeholder="****************">
            </div>
            <div class="save-password-btn-container">
                <button v-on:click="savePassword" class="save-password-btn btn"><a>Save Password</a></button>
            </div>
        </div>
        <div class="image-container">
            <img src="/img/password1.png" class="password-hero" alt="password-illustration" />
        </div>
    </div>
</template>

<style>
    .change-password-content {
        @apply grid grid-cols-2 items-center mx-auto gap-10;
        .current-password,
        .new-password,
        .confirm-new {
            @apply grid grid-cols-2 border-b-0 border-2 border-slate-400 py-3 px-10 bg-white;
        }

        .current-password {
            @apply rounded-t-lg;
        }

        .confirm-new {
            @apply border-b-2 border-slate-400 rounded-b-lg mb-5;
        }

        .save-password-btn-container {
            @apply flex items-center justify-center mt-8;
        .save-password-btn {
            @apply w-48;
        }
        }

        input {
            @apply px-2;
        }
    }

.password-hero {
    @apply h-[450px];
}
</style>