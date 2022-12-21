<script lang="ts">
    export default {
        name: 'ProjectsContainer',
        props: {
        },  
    }; 
</script>

<template>
    <div class="table-columns">
        <div class="project-organization-column">
            <router-link to="/project">Project 1</router-link>
            <router-link to="/project">Project 2</router-link>
            <router-link to="/project">Project 3</router-link>
            <router-link to="/project">Project 4</router-link>
        </div>
        <div class="project-organization-column">
            <p>Product Owner</p>
            <p>Product Owner</p>
            <p>Product Owner</p>
            <p>Product Owner</p>
        </div>
        <div class="project-organization-column">
            <p>--/--/--</p>
            <p>--/--/--</p>
            <p>--/--/--</p>
            <p>--/--/--</p>
        </div>
        <div class="project-organization-column">
            <p><input type="checkbox" class="checkbox-item"></p>
            <p><input type="checkbox" class="checkbox-item"></p>
            <p><input type="checkbox" class="checkbox-item"></p>
            <p><input type="checkbox" class="checkbox-item"></p>
        </div>
        <div class="project-organization-column">
            <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
            <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
            <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
            <a><img src="/img/bin.svg" alt="bin" class="bin-icon"></a>
        </div>
    </div>
</template>

<style>
    .table-columns {
        @apply grid grid-cols-5 text-center bg-white;
        .project-organization-column {
            @apply grid grid-cols-1;
        }

        .project-organization-column:first-child {
            @apply border-l-2 border-slate-400;
        }

        .project-organization-column:last-child {
            @apply border-r-2 border-slate-400;
        }

        .project-organization-column p, .project-organization-column a {
            @apply grid py-3 border-b-2 border-slate-400;
        }

        .checkbox-item {
            @apply scale-50 accent-primary;
        }

        .bin-icon {
            @apply mx-auto cursor-pointer;
        }
    }
</style>