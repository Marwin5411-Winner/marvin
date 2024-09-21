<script setup>
const socials = ref([
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/win.rop48/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/marvin_rop_/",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png",
  },
  {
    id: 4,
    name: "Github",
    url: "https://github.com/Marwin5411-Winner",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png",
  },
  {
    id: 5,
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCCdD5Ck5LIgzweicahiO5Aw",
    img: "https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png",
  },
  {
    id: 6,
    name: "Spotify",
    url: "https://open.spotify.com/user/31ezhubxfef4jinonjfflsofrekm?si=126fba719b8840e7",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png",
  },
  {
    id: 7,
    name: "Discord",
    url: "https://discord.com/users/397745750270017539",
    img: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png",
  },
]);
</script>

<template>
    <div class="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 py-12">
      <div class="container mx-auto text-center">
        <p class="text-5xl font-cursive text-gray-100 mb-8">Connect with Me</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div 
            v-for="social in socials" 
            :key="social.id" 
            class="bg-gray-800 bg-opacity-80 p-6 rounded-xl shadow-lg transform transition-transform hover:scale-110 hover:rotate-2 hover:bg-opacity-90"
          >
            <img 
              :src="social.img" 
              alt="Social Media Icon" 
              class="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-blue-500"
            />
            <h3 class="text-gray-100 text-xl font-semibold mb-4">{{ social.name }}</h3>
            <a 
              :href="social.url" 
              target="_blank" 
              class="bg-blue-600 text-white font-bold py-2 px-5 rounded-full shadow-md hover:bg-blue-700 transition"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
  
  .font-cursive {
    font-family: 'Caveat', cursive;
  }
  </style>
  