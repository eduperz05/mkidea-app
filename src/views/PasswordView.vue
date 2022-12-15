<script lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
    components: { NavbarComponent, SidebarComponent }
}
</script>

<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <SidebarComponent />
            <div class="change-password-section">
                <div class="flex flex-col gap-4">
                    <div class="password-title-container">
                        <h1 class="password-title">Change Password</h1>
                        <div class="password-subtext">
                            <p>Choose a strong password and don't reuse it for other accounts.</p>
                            <p>Enter the new password below to change your password.</p>
                        </div>
                    </div>
                    <div class="change-password-content">
                        <div class="password-inputs">
                            <div class="current-password">
                                <label for="">Current Password</label>
                                <input type="text" placeholder="*********************">
                            </div>
                            <div class="new-password">
                                <label for="">New Password</label>
                                <input type="text" placeholder="*********************">
                            </div>
                            <div class="confirm-new">
                                <label for="">Confirm New Password</label>
                                <input type="text" placeholder="*********************">
                            </div>
                            <div class="save-password-btn-container">
                                <button class="save-password-btn btn"><a href="">Save Password</a></button>
                            </div>
                        </div>
                        <div class="image-container">
                            <img src="/img/password1.png" class="password-hero" alt="password-illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    @apply flex w-full;
    .change-password-section {
        @apply w-full flex flex-col gap-4 border-r-2 border-b-2 border-slate-400 rounded-br-lg p-5;
    .password-title {
        @apply text-3xl font-spaceGrotesk text-center font-bold mb-2;
    }
    .password-subtext {
        @apply flex flex-col items-center text-slate-600 mb-5;
    }

    .change-password-content {
        @apply flex items-center justify-center;
        .password-inputs {
            @apply flex flex-col;
            .current-password, .new-password, .confirm-new {
                @apply flex border-b-0 border-2 border-slate-400 py-3 px-10;
            }
            .current-password {
                @apply flex gap-20 rounded-t-lg;
            }
            .new-password {
                @apply flex gap-[103px];
            }
            .confirm-new {
                @apply gap-[38px] border-b-2 border-slate-400 rounded-b-lg mb-10;
            }
            .save-password-btn-container {
                @apply flex items-center justify-center;
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
        }
    }
}
</style>