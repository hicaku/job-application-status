<script setup lang="ts">
import JobsTable from "@/components/JobsTable.vue";
import JobsGraph from "@/components/JobsGraph.vue";
</script>

<template>
    <div class="text-white font-sans">
        <header
            class="h-20 bg-gray-400 text-gray-900 font-bold text-lg text-center flex items-center justify-center"
        >
            MY JOB APPLICATIONS
        </header>
        <main class="p-5 h-full bg-gray-900 sm:flex sm:flex-row">
            <JobsGraph class="w-full sm:w-1/2 sm:border-r" />
            <JobsTable class="bg-gray-900 mt-5 sm:w-1/2 sm:h-full sm:pl-4" />
        </main>
    </div>
</template>
