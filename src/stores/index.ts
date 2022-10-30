import { defineStore } from "pinia";
import jobs from "@/jobs.json";

interface Job {
    company: string;
    statusIndex: number;
    applicationDate: string;
}

export const jobStatus = [
    "No Response",
    "Rejected After Application",
    "Ghosted After Interview",
    "Rejected After Interview",
    "Got the Job Offer",
];

export const useIndexStore = defineStore({
    id: "index",
    state: () => ({
        jobs: jobs as Job[],
        activeSorting: 2,
    }),
});
