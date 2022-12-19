<script lang="ts">
export default {

}
</script>

<template>
    <div class="navbar-container">
        <nav class="navbar">
            <div class="logo-container">
                <a href="/"><img src="/img/logo.png" class="logo" alt="brand-logo"></a>
                <a href="/">
                    <p class="brand-name">MKIDEA</p>
                </a>
            </div>
            <div class="input-container">
                <a href="/"><input type="text" placeholder="Search" class="search-input"></a>
                <img src="/img/search.svg" class="search-icon"/>
            </div>
            <div class="ppic-container">
                <img src="/img/ppic.jpeg" alt="" class="ppic">
            </div>
        </nav>
    </div>
</template>

<style lang="scss">
@import "@/index.scss";

    .navbar {
        @apply h-[12vh] px-16 flex items-center justify-between bg-primary border-b-2 border-slate-400;

        .logo-container {
            @apply flex items-center justify-center gap-2;

            .logo {
                @apply w-14 max-sm:w-12;
                filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black);
            }
            .brand-name {
                @apply text-2xl font-spaceGrotesk text-white font-bold;
            }
        }
        .input-container {
            @apply relative;
            .search-input {
                @apply w-60 py-1.5 px-10 bg-slate-100 rounded-lg;
            }
            .search-icon {
                @apply w-4 h-4 absolute top-2.5 left-3;
            }
        }
        .ppic-container {
            @apply flex items-center justify-center border-secondary-light border-2 rounded-full;
            .ppic {
                @apply w-14 h-14 rounded-full;
            }
        }
    }
</style>
