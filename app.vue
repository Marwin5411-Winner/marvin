<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
  });
});
</script>

<template>
  <div>
    <div>
      <Navbar />
    </div>
    <div data-aos="fade-up">
      <Hero />
    </div>

    <div data-aos="fade-right">
      <PersonalDetails />
    </div>
    <div data-aos="fade-left">
      <SocialMedia />
    </div>
    <div data-aos="zoom-in">
      <WorkExperience />
    </div>

    <div data-aos="zoom-in-up">
      <Work />
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
