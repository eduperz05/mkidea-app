<script lang="ts">
export default {
    name: "ProfileView"
}
</script>

<template>
    <div class="flex flex-col gap-4 bg-secondary-light py-2 px-5">
        <div class="flex gap-4">
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
            </div>
            <div class="profile-info-container">
                <div class="profile-info">
                    <p><strong>First Name</strong></p>
                    <p>John</p>
                </div>
                <div class="profile-info">
                    <p><strong>Last Name</strong></p>
                    <p>Smith</p>
                </div>
                <div class="profile-info">
                    <p><strong>Email</strong></p>
                    <p>johnsmith@johnsmith.com</p>
                </div>
                <div class="profile-info">
                    <p><strong>Phone Number</strong></p>
                    <p>957477079</p>
                </div>
                <div class="about-you">
                    <p><strong>About You</strong></p>
                    <p class="text-justify">La nueva habilidad de Teostra es un poco confusa. Así que vengo a intentar explicar de forma
                        detallada como funciona. Advierto que puede haber datos poco precisos, ya que no llevamos ni 24H de update. Para empezar, cada arma tiene una cantidad fija de ataques
                        para que se produzca. Esa cantidad se puede reducir aumentando la cantidad de puntos de habilidad. En general, es una reducción de: 25% LVL2 | 50% LVL3
                    </p>
                </div>
            </div>
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

    .profile-info-container {
        @apply grid bg-white border-2 border-slate-400 rounded-lg;
        .profile-info {
            @apply grid grid-cols-2 px-10 border-b-2 border-slate-400 items-center;
        }

        .about-you {
            @apply grid px-10 py-3;
        }
    }

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
