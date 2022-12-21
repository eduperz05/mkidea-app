<script lang="ts">
    import ProfileContainer from "@/components/ProfileComponents/ProfileContainer.vue";
    import ProfileInfoContainer from "@/components/ProfileComponents/ProfileInfoContainer.vue";
    export default {
        name: "ProfileView",
        components: {
            ProfileContainer,
            ProfileInfoContainer
        },
    }
</script>

<template>
    <div class="w-full flex flex-col gap-4 bg-secondary-light py-2 px-5">
        <div class="w-full flex gap-4">
            <ProfileContainer />
            <ProfileInfoContainer />
        </div>
        <div class="social-media-container">
            <div class="social-media">
                <p>Social Media</p>
            </div>
            <div class="media-container">
                <div class="icon-media-container">
                    <img src="/img/trello.svg" alt="" class="icon">
                    <p>Trello</p>
                </div>
                <div class="account">
                    <p>John Smith</p>
                </div>
            </div>
            <div class="media-container">
                <div class="icon-media-container">
                    <img src="/img/github.svg" alt="" class="icon">
                    <p>Github</p>
                </div>
                <div class="account">
                    <p>John Smith the best developer</p>
                </div>
            </div>
            <div class="media-container">
                <div class="icon-media-container">
                    <img src="/img/linkedin.svg" alt="" class="icon">
                    <p>LinkedIn</p>
                </div>
                <div class="account">
                    <p>John Smith</p>
                </div>
            </div>
            <div class="media-container">
                <div class="icon-media-container">
                    <img src="/img/facebook.svg" alt="" class="icon">
                    <p>Facebook</p>
                </div>
                <div class="account">
                    <p>Sr. Smith</p>
                </div>
            </div>
            <div class="media-container">
                <div class="icon-media-container">
                    <img src="/img/whatsapp.svg" alt="" class="icon">
                    <p>WhatsApp</p>
                </div>
                <div class="account">
                    <p>+34666777420</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .social-media-container{
        @apply bg-white rounded-lg;
        .social-media {
            @apply bg-secondary px-10 py-2 text-[18px] border-b-0 border-2 border-slate-400 rounded-t-lg font-spaceGrotesk text-3xl font-bold tracking-wide;
        }

        .media-container {
            @apply px-12 grid grid-cols-2 text-left border-b-0 border-2 border-slate-400 py-3;
            .icon-media-container {
                @apply flex justify-start gap-12;
            }

            .icon {
                @apply w-7 h-7;
            }
        }

        .media-container:last-child {
            @apply border-b-2 rounded-b-lg;
        }
    }
</style>
