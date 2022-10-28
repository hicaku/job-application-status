<script setup lang="ts">
import JobsTable from "@/components/JobsTable.vue";
import JobsGraph from "@/components/JobsGraph.vue";
</script>

<template>
    <div class="bg-gray-900 text-white font-sans h-screen overflow-hidden">
        <header
            class="h-20 bg-gray-400 text-gray-900 font-bold text-lg text-center flex items-center justify-center"
        >
            MY JOB APPLICATIONS
        </header>
        <main class="p-5 flex">
            <JobsTable class="w-1/2" />
            <JobsGraph class="w-1/2" />
        </main>
    </div>
</template>
