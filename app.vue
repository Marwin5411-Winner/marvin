<script>
//fetch data from https://api.github.com/users/Marwin5411-Winner/repos
import { collection } from "firebase/firestore";

export default {
  data() {
    return {
      repos: [],
      videos: [],
      playlists: [],
      socials: [
        {
          id: 1,
          name: "Facebook",
          url: "https://www.facebook.com/win.rop48/",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
        },
        {
          id: 2,
          name: "Instagram",
          url: "https://www.instagram.com/marwin_rop5411/",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png",
        },
        {
          id: 3,
          name: "Twitter",
          url: "https://twitter.com/marwin5411",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_2012_logo.svg/640px-Twitter_2012_logo.svg.png",
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
      ],
    };
  },
  async mounted() {
    fetch("https://api.github.com/users/Marwin5411-Winner/repos")
      .then((res) => res.json())
      .then((data) => {
        this.repos = data;

        this.repos = this.repos.filter((repo) => {
          return repo.topics.includes("workshop");
        });
        console.log(this.repos);
      });
      //
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=UULFCdD5Ck5LIgzweicahiO5Aw&key=AIzaSyCEEbzOJsafeRZq7fb4Ne8HsyGjLiXiYNo"
    )
      .then((res) => res.json())
      .then((data) => {
        this.videos = data.items;
        console.log(this.videos);
      });

      fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/19zRo8KAC4GkgmDQkNTgMnW28Cz6IEk93yRXDY3WPQOQ/values/A2:B?key=AIzaSyCEEbzOJsafeRZq7fb4Ne8HsyGjLiXiYNo"
    )
      .then((res) => res.json())
      .then((data) => {
        this.playlists = data.values;
        console.log(this.videos);
      });
  },
};
</script>

<template>
  <div>
    <div class="md:container md:mx-auto p-7 justify-center">
      <div class="flex sm:flex-row flex-col space-x-4">
        <div class="">
          <div class="profile">
            <img
              class="rounded w-96 h-auto"
              src="/images/IMG_1338.jpg"
            />
          </div>
        </div>
        <div class="container">
          <p class="text-6xl text-white">Marvin Ropmuang</p>
          <p class="text-2xl text-white">aka : Marvin, Winner, Win</p>
          <p class="text-2xl text-white">Developer</p>
          <p class="text-2xl text-white">CTO at Siambnbplantbased</p>
          <p class="text-2xl text-white">Age : 18</p>
          <p class="text-2xl text-white">Birthday : 08/03/2005</p>
          <p class="text-2xl text-white">
            Education : Graduated High School at Benjamarachuthit Chanthaburi
            (Math-Graphic-Science)
          </p>
          <p class="text-2xl text-white">Sa Keao, Thailand</p>
          <p class="text-2xl text-white">Email : marwin5411@outlook.com</p>
        </div>
      </div>
    </div>
    <!-- ประสบการณ์ | Experience -->
    <div class="md:container md:mx-auto p-7 justify-center">
      <div class="flex sm:flex-row flex-col space-x-4">
        <div class="container">
          <p class="text-4xl text-white">Social Media</p>
          <div class="grid sm:grid-cols-7 gap-4 p-2">
            <div v-for="social in this.socials" :key="social.id">
              <div
                class="max-w-md rounded overflow-hidden shadow-lg bg-gray-800 p-5 h-full"
              >
                <img class="w-full" :src="social.img" />
                <div class="px-6 py-2 flex justify-center">
                  <div class="font-bold text-white text-xl mb-2 overflow-auto">
                    {{ social.name }}
                  </div>
                </div>
                <div
                  class="px-6 pt-4 pb-2 space-x-2 flex flex-row justify-center"
                >
                  <a
                    :href="social.url"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >Click here</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ผลงาน | Work -->
    <div class="md:container md:mx-auto p-7 justify-center">
      <div class="flex sm:flex-row flex-col space-x-4">
        <div class="container">
          <p class="text-4xl text-white">Workshop (Github Repo)</p>
          <div class="grid sm:grid-cols-3 gap-4 p-2">
            <div v-for="repo in this.repos" :key="repo.id">
              <div
                class="max-w-md rounded overflow-hidden shadow-lg bg-gray-800 p-5 h-"
              >
                <div class="px-6 py-2">
                  <div class="font-bold text-white text-xl mb-2 overflow-auto">
                    {{ repo.name }}
                  </div>
                  <p class="text-white text-base">
                    {{ repo.description }}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 space-x-2 flex flex-row">
                  <a
                    :href="repo.html_url"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >Click here to check Repo</a
                  >
                  <a
                    v-if="repo.homepage != ''"
                    :href="repo.homepage"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >Click here to visit</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- วิดีโอ | Video -->
    <div class="md:container md:mx-auto p-7 justify-center">
      <div class="flex sm:flex-row flex-col space-x-4">
        <div class="container">
          <p class="text-4xl text-white">Youtube Content</p>
          <div class="grid sm:grid-cols-3 gap-4 p-2">
            <div v-for="video in this.videos" :key="video.id">
              <div
                class="max-w-md rounded overflow-hidden shadow-lg bg-gray-800 p-5 h-"
              >
                <img
                  class="w-full"
                  :src="video.snippet.thumbnails.medium.url"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-2">
                  <div class="font-bold text-white text-xl mb-2 overflow-auto">
                    {{ video.snippet.title }}
                  </div>
                  <p class="text-white text-base">
                    {{ video.snippet.description }}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 space-x-2 flex flex-row">
                  <a
                    :href="
                      'https://youtube.com/watch?v=' +
                      video.contentDetails.videoId
                    "
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >Click here to Watch video</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Spotify | Playlist -->
    <div class="md:container md:mx-auto p-7 justify-center">
      <div class="flex sm:flex-row flex-col space-x-4">
        <div class="container">
          <p class="text-4xl text-white">Spotify Playlist</p>
          <div class="grid sm:grid-cols-3 gap-4 p-2">
            <div v-for="playlist in this.playlists" :key="playlist[0]">
              <div v-html="playlist[1]" ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #000000;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
