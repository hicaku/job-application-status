<script setup lang="ts">
import { useIndexStore, jobStatus } from "@/stores/index";
import Highcharts from "highcharts";
import { onMounted } from "vue";

const store = useIndexStore();
const { jobs } = store;

const counts = [] as any;
for (const job of jobs) {
    counts[job.statusIndex] = counts[job.statusIndex]
        ? counts[job.statusIndex] + 1
        : 1;
}
const plotData = [] as any;
counts.forEach((count: number, index: number) => {
    plotData.push({
        name: jobStatus[index],
        y: count,
    });
});
onMounted(() => {
    const options = {
        chart: {
            renderTo: "jobsChart",
            type: "pie",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: "transparent",
            height: "100%",
        },
        title: {
            text: "Chart of My Job Applications",
            style: {
                color: "#fff",
            },
        },
        tooltip: {
            headerFormat: "",
            pointFormat:
                "{point.name}: <b>{point.percentage:.1f}% ({point.y})</b>",
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    style: {
                        color: "#fff",
                        fontSize: "18px",
                    },
                },
                colors: ["#4d4d4d", "#4d0404", "#004085", "#d48302", "#1ba300"],
            },
        },
        series: [
            {
                name: "Ratio",
                colorByPoint: true,
                data: plotData,
            },
        ],
        credits: {
            enabled: false,
        },
    } as any;
    Highcharts.chart("jobsChart", options);
});
</script>

<template>
    <div class="w-full pt-1 pl-5 mt-5">
        <div id="jobsChart"></div>
        <div class="w-full p-5">
            <table class="table-auto w-full">
                <tr class="border-b">
                    <th class="text-left">Status</th>
                    <th class="text-right">Count</th>
                </tr>
                <tr v-for="(status, index) in plotData" :key="index">
                    <td>{{ status.name }}</td>
                    <td class="text-right">{{ status.y }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
