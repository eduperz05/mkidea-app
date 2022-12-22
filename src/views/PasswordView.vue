<script lang="ts">
    import PasswordContainer from '@/components/PasswordComponents/PasswordContainer.vue';

    export default {
        name: "PasswordView",
        components: {
            PasswordContainer
        },
    };
</script>

<template>
    <div class="change-password-section">
        <div class="flex flex-col gap-4 w-full">
            <div class="password-title-container">
                <h1 class="password-title">Change Password</h1>
                <div class="password-subtext">
                    <p>Choose a strong password and don't reuse it for other accounts.</p>
                    <p>Enter the new password below to change your password.</p>
                </div>
            </div>
            <PasswordContainer  />
        </div>
    </div>
</template>

<style>
    .change-password-section {
        @apply w-full flex flex-col rounded-br-lg bg-white items-center;
        .password-title {
            @apply text-3xl font-spaceGrotesk text-center font-bold py-5;
        }

        .password-subtext {
            @apply flex flex-col items-center text-slate-600 py-3 bg-white;
        }
    }
</style>
