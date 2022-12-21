<script lang="ts">
    import { getUserInfo } from '@/modules/getUserInfo';
    export default {
        name: 'ProfileContainer',
        props: {
            name: {
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
        methods: {
            async getInformation() {
                const URL = "http://167.99.35.238:3000/user"
                console.log(await getUserInfo(URL))
            }
        }
        
    };
</script>

<template>
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
</template>

<style lang="scss">
    .profile-info-container {
        @apply grid bg-white border-2 border-slate-400 rounded-lg;
        .profile-info {
            @apply grid grid-cols-2 px-10 border-b-2 border-slate-400 items-center;
        }

        .about-you {
            @apply grid px-10 py-3;
        }
    }
</style>