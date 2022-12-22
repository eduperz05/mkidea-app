<script lang="ts">
    export default {
        name: 'SearchContainer',
        props: {
            projects: {
                type: Array,
                required: true
            }
        }
    }; 

</script>

<template>
    <div class="search-input-section">
        <div class="keyword">
                <input type="text" placeholder="Write your keyword here" class="keyword-input">
        </div>
            <div class="search-button">
                <button class="search-btn btn">Search</button>
            </div>
        </div>
    <div class="search-results">
        <ul id="some-projects">
            <li v-for="project in projects">{{ project }}</li>
        </ul>
    </div> 
</template>

<style lang="scss">
.search-input-section {
    @apply flex justify-center gap-4 mb-5;

    .keyword {
        @apply flex flex-col gap-2;

        .keyword-input {
            @apply w-96 px-5 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none;
        }
    }

    .search-button {
        @apply flex items-end;

        .search-btn {
            @apply p-1.5;
        }
    }
}

.search-results {
    @apply px-10 mt-2;

    li {
        @apply flex items-center border-t-0 border-2 border-slate-400 px-10 min-h-[45px];
    }

    li:first-child {
        @apply border-t-2 border-slate-400 rounded-t-lg;
    }

    li:last-child {
        @apply rounded-b-lg;
    }
}
</style>