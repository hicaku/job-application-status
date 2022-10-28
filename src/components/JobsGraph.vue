<script setup lang="ts">
import { useIndexStore, jobStatus } from "@/stores/index";
import Highcharts from "highcharts";
import { onMounted } from "vue";

const store = useIndexStore();
const { jobs } = store;

onMounted(() => {
    const counts = [] as any;
    for (const job of jobs) {
        counts[job.statusIndex] = counts[job.statusIndex]
            ? counts[job.statusIndex] + 1
            : 1;
    }
    const plotData = [] as Array<Object>;
    counts.forEach((count: number, index: number) => {
        plotData.push({
            name: jobStatus[index],
            y: count,
        });
    });
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
            pointFormat: "{point.name}: <b>{point.percentage:.1f}%</b>",
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    color: "#fff",
                },
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
    <div class="w-full pt-1 pl-5 mt-5"><div id="jobsChart"></div></div>
</template>
