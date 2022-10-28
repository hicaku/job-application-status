<script setup lang="ts">
import { useIndexStore, jobStatus } from "@/stores/index";

const store = useIndexStore();
const { jobs } = store;
</script>

<template>
    <table class="w-full h-screen-150 overflow-y-scroll block">
        <tr>
            <th class="py-1 pr-10">Index</th>
            <th class="py-1 px-10 text-left">Company</th>
            <th class="py-1 px-5 text-left">Date</th>
            <th class="py-1 px-10 text-right">Status</th>
        </tr>
        <tr v-for="(job, index) in jobs" :key="index">
            <td class="py-1 pr-10">{{ index + 1 }}</td>
            <td class="py-1 px-10 text-left">{{ job.company }}</td>
            <td class="py-1 px-5 text-left">{{ job.applicationDate }}</td>
            <td class="py-1 px-10 text-right">
                {{ jobStatus[job.statusIndex] }}
            </td>
        </tr>
    </table>
</template>
