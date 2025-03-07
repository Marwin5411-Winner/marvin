<script setup>

</script>

<template>
    <div class="hero-section">
      <div class="content" ref="elementRef">
        <div class="hero-text">
          <p class="title">Creative</p>
          <h1 class="role">Marvin Ropmuang</h1>
          <p class="description">
            I’m a Software Developer inspired by nature and the beauty of elegant code. With a passion for crafting seamless user experiences, I build solutions that blend creativity and technical precision.
          </p>
          <button class="contact-btn">CONTACT ME</button>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .hero-section {
    position: relative;
    background-image: url('/assets/kazetachinu024.jpg'); /* Replace with your custom background */
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Caveat", sans-serif;
    padding-inline: 3px;
  }
  
  .hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* 10% black overlay */
    z-index: 1; /* Place the overlay behind the content */
  }
  
  .content {
    position: relative;
    z-index: 2; /* Ensures the content is above the overlay */
    text-align: center;
  }
  
  .hero-text .title {
    font-size: 3rem;
    font-weight: 300;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
  }
  
  .hero-text .role {
    font-size: 8rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin: 0;
  }
  
  .hero-text .description {
    font-size: 1.5rem;
    margin: 1.5rem 0;
    color: #f0f0f0;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
  
  .contact-btn {
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    border: 1px solid white;
    padding: 1rem 2rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-block: 20px;
  }
  
  .contact-btn:hover {
    background-color: rgba(255, 255, 255, 0.6);
  }
  
  @media (max-width: 768px) {
    .hero-text .role {
      font-size: 4rem;
    }
  
    .hero-text .description {
      font-size: 1rem;
    }
  
    .contact-btn {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
  </style>
  