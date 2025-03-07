<template>
    <section class="work-experience bg-gray-50 py-16 dark:bg-gray-800">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Work Experience</h2>
            
            <div class="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
                <!-- All Jobs -->
                <div 
                    v-for="(job, index) in allJobs" 
                    :key="index" 
                    class="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 dark:text-white"
                    :class="{'border-l-4 border-blue-500': job.current}"
                >
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-semibold">{{ job.title }}</h3>
                        <span v-if="job.current" class="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">CURRENT</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-2">{{ job.company }}</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ job.period }}</p>
                    <p class="mb-4">{{ job.description }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span 
                            v-for="(tech, techIndex) in job.technologies" 
                            :key="techIndex"
                            class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300"
                        >
                            {{ tech }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const currentJobs = [
    {
        title: "Full Stack Developer",
        company: "Freelance",
        period: "Oct 2024 - Present",
        description: "Building web applications and websites for clients using modern frontend and backend technologies.",
        technologies: ["NuxtJS", "Node.js", "MongoDB", "Tailwind CSS", "PostgreSQL", "Docker", "Linux"],
        current: true
    },
    {
        title: "Technical Writer",
        company: "Dev Community",
        period: "Mar 2023 - Present",
        description: "Writing technical articles and tutorials on frontend development topics.",
        technologies: ["Technical Writing", "Documentation", "Web Development"],
        current: true
    }
];

const workHistory = [
    {
        title: "Web Developer",
        company: "KsportWorld (Non-Company)",
        period: "June 2024 - Mar 2025",
        description: "Built client websites and handled maintenance and updates for existing web properties.",
        technologies: ["JavaScript", "React", "Bootstrap", "PHP"],
        current: false
    },
    {
        title: "Tech Consultant",
        company: "Siambnbplantbased Co.",
        period: "Jan 2022 - May 2024",
        description: "Assisted senior developers in building and testing web applications.",
        technologies: ["HTML", "CSS", "jQuery"],
        current: false
    }
];

// Combine current jobs and work history for rendering
const allJobs = [...currentJobs, ...workHistory];
</script>

<style scoped>
/* Style remains the same */
.work-experience {
    position: relative;
}

.work-experience::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}
</style>