<script setup lang="ts">
import { useIndexStore, jobStatus } from "@/stores/index";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useIndexStore();
const { jobs } = store;
const { activeSorting } = storeToRefs(store);
const jobsSorted = ref(jobs) as any;
jobsSorted.value.sort((a: any, b: any) => {
    const [dayA, monthA, yearA] = a.applicationDate.split("-");
    const [dayB, monthB, yearB] = b.applicationDate.split("-");
    return (
        new Date(+yearB, monthB - 1, +dayB).getTime() -
        new Date(+yearA, monthA - 1, +dayA).getTime()
    );
});

const sortTable = (sorting: number) => {
    activeSorting.value =
        Math.abs(activeSorting.value) === sorting
            ? -activeSorting.value
            : sorting;
    if (activeSorting.value === 1) {
        jobsSorted.value.sort((a: any, b: any) =>
            a.company.localeCompare(b.company)
        );
    } else if (activeSorting.value === -1) {
        jobsSorted.value.sort((a: any, b: any) =>
            b.company.localeCompare(a.company)
        );
    } else if (activeSorting.value === 2) {
        jobsSorted.value.sort((a: any, b: any) => {
            const [dayA, monthA, yearA] = a.applicationDate.split("-");
            const [dayB, monthB, yearB] = b.applicationDate.split("-");
            return (
                new Date(+yearB, monthB - 1, +dayB).getTime() -
                new Date(+yearA, monthA - 1, +dayA).getTime()
            );
        });
    } else if (activeSorting.value === -2) {
        jobsSorted.value.sort((a: any, b: any) => {
            const [dayA, monthA, yearA] = a.applicationDate.split("-");
            const [dayB, monthB, yearB] = b.applicationDate.split("-");
            return (
                new Date(+yearA, monthA - 1, +dayA).getTime() -
                new Date(+yearB, monthB - 1, +dayB).getTime()
            );
        });
    } else if (activeSorting.value === 3) {
        jobsSorted.value.sort(
            (a: any, b: any) => a.statusIndex - b.statusIndex
        );
    } else if (activeSorting.value === -3) {
        jobsSorted.value.sort(
            (a: any, b: any) => b.statusIndex - a.statusIndex
        );
    }
};
</script>

<template>
    <table class="table-auto w-full ml-5">
        <tr class="select-none">
            <th
                class="py-2 text-left cursor-pointer"
                @click="sortTable(activeSorting === 1 ? -1 : 1)"
            >
                Company <span v-if="activeSorting === 1">▼</span>
                <span v-if="activeSorting === -1">▲</span>
            </th>
            <th
                class="py-2 text-left cursor-pointer"
                @click="sortTable(activeSorting === 2 ? -2 : 2)"
            >
                Date <span v-if="activeSorting === 2">▼</span>
                <span v-if="activeSorting === -2">▲</span>
            </th>
            <th
                class="py-2 text-right px-5 cursor-pointer"
                @click="sortTable(activeSorting === 3 ? -3 : 3)"
            >
                Status <span v-if="activeSorting === 3">▼</span>
                <span v-if="activeSorting === -3">▲</span>
            </th>
        </tr>
        <tr v-for="(job, index) in jobsSorted" :key="index">
            <td class="py-2 text-left">{{ job.company }}</td>
            <td class="py-2 text-left">{{ job.applicationDate }}</td>
            <td class="py-2 text-right px-2">
                {{ jobStatus[job.statusIndex] }}
            </td>
        </tr>
    </table>
</template>
