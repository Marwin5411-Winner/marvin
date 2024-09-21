<script setup>
const repos = ref();

onMounted(() => {
  fetch("https://api.github.com/users/Marwin5411-Winner/repos")
    .then((res) => res.json())
    .then((data) => {
      repos.value = data;

      repos.value = repos.value.filter((repo) => {
        return repo.topics.includes("workshop");
      });
      console.log(repos.value);
    });
});
</script>

<template>
  <!-- Work Section with Ghibli Dark Theme -->
  <div class="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 py-12">
    <div class="container mx-auto text-center p-2 lg:p-7">
      <p class="text-5xl font-cursive text-gray-100 mb-8">
        Workshop (Github Repo)
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="repo in repos"
          :key="repo.id"
          class="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg transform transition-transform hover:scale-105 hover:bg-opacity-90"
        >
          <div class="px-6 py-4">
            <div class="font-bold text-gray-100 text-2xl mb-2">
              {{ repo.name }}
            </div>
            <p class="text-gray-300 text-base">{{ repo.description }}</p>
          </div>
          <div
            class="px-6 pt-4 pb-2 space-x-2 flex flex-col sm:flex-row justify-center"
          >
            <a
              :href="repo.html_url"
              target="_blank"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition"
            >
              Check Repo
            </a>
            <a
              v-if="repo.homepage"
              :href="repo.homepage"
              target="_blank"
              class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition mt-2 sm:mt-0"
            >
              Visit Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repos: [
        {
          id: 1,
          name: "Repo 1",
          description: "A wonderful repository with amazing code.",
          html_url: "https://github.com/example/repo1",
          homepage: "https://example.com/repo1",
        },
        {
          id: 2,
          name: "Repo 2",
          description: "An exciting project with cutting-edge technology.",
          html_url: "https://github.com/example/repo2",
          homepage: "",
        },
        // Add more repositories as needed
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap");

/* Custom Ghibli-style font */
.font-cursive {
  font-family: "Caveat", cursive;
}

/* Responsiveness and styling */
.bg-gradient-to-b {
  background: linear-gradient(to bottom, #1c1c1e, #2c2c2e, #3a3a3c);
}

.container {
  max-width: 1200px;
}


/* Card hover effects */
.transform {
  transition: transform 0.3s ease-in-out;
}

.transition-transform:hover {
  transform: scale(1.05);
}

.bg-gray-800 {
  background-color: #2e2e2e;
}

.bg-opacity-80 {
  background-color: rgba(46, 46, 46, 0.8);
}

.hover\:bg-opacity-90:hover {
  background-color: rgba(46, 46, 46, 0.9);
}

.text-gray-100 {
  color: #f5f5f5;
}

.text-gray-300 {
  color: #d1d1d1;
}

.bg-blue-600 {
  background-color: #2563eb;
}

.hover\:bg-blue-700:hover {
  background-color: #1e3a8a;
}

.bg-green-600 {
  background-color: #10b981;
}

.hover\:bg-green-700:hover {
  background-color: #065f46;
}

.shadow-lg {
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.5);
}

.rounded-xl {
  border-radius: 1rem;
}

.rounded-full {
  border-radius: 9999px;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-bold {
  font-weight: 700;
}

.p-6 {
  padding: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

@media (max-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
}
</style>
