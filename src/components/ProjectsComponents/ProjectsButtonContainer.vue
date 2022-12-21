<script lang="ts">
    import "tw-elements";
    export default {
        name: 'ProjectsButtonContainer',
        props: {
        },
    };
</script>

<template>
    <div class="add-button-container">
        <button type="button" class="add-button" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add</button>
    </div>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full h-[26rem] pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between py-4 px-6 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Add Project Menu</h5>
                    <button type="button" class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body relative p-4 px-6">
                    <p class="mb-4">Add the Project by filling the consequent data:</p>
                    <div class="modal-form flex flex-col gap-2">
                        <label for="">Project Name
                        </label>
                        <input type="text" placeholder="Shopping Web">
                        <label for="">Product Owner Name
                        </label>
                        <input type="text" placeholder="John Smith">
                        <label for="">Date
                        </label>
                        <input type="date">
                    </div>
                    
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" class="px-6 py-2.5 bg-red-400 text-white bg-red font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg  focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0   active:bg-red-600 active:shadow-lg   transition   duration-150   ease-in-out" data-bs-dismiss="modal">
                        Cancel
                    </button>
                <button type="button" class="px-6 py-2.5 bg-secondary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#49ad85] hover:shadow-lg  focus:bg-[#49ad85] focus:shadow-lg focus:outline-none focus:ring-0  active:bg-[#49ad85] active:shadow-lg   transition   duration-150   ease-in-out   ml-1">
                    Add Project
                </button>  
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.add-button-container {
        @apply w-full flex bg-primary-lighter px-10 py-2 text-primary-light hover:text-primary rounded-b-lg border-t-0 border-2 border-slate-400;
    }
    .modal-form label {
        @apply text-sm;
    }
    .modal-form input {
        @apply w-96 px-5 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none;
    }
</style>