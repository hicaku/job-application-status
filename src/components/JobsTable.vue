<script setup lang="ts">
import { useIndexStore, jobStatus } from "@/stores/index";

const store = useIndexStore();
const { jobs } = store;
</script>

<template>
    <div class="h-screen-150 w-full overflow-y-scroll">
        <table class="table-auto w-full">
            <tr>
                <th class="py-2 w-16 text-left">Index</th>
                <th class="py-2 text-left">Company</th>
                <th class="py-2 text-left">Date</th>
                <th class="py-2 text-right pr-5">Status</th>
            </tr>
            <tr v-for="(job, index) in jobs" :key="index">
                <td class="py-2 w-16 text-left">{{ index + 1 }}</td>
                <td class="py-2 text-left">{{ job.company }}</td>
                <td class="py-2 text-left">{{ job.applicationDate }}</td>
                <td class="py-2 text-right pr-5">
                    {{ jobStatus[job.statusIndex] }}
                </td>
            </tr>
        </table>
    </div>
</template>
