<template>
    <div class="ghibli-section bg-gray-900">
      <div class="ghibli-overlay-text">Marvin</div>
      <div class="ghibli-content">
        <!-- Profile Section with large image -->
        <div class="ghibli-profile">
          <img
            src="/images/IMG_3140.jpg" 
            alt="Your Portrait"
            class="ghibli-portrait"
          />
        </div>
  
        <!-- Personal Information Section -->
        <div class="ghibli-info">
          <h1 class="ghibli-title">Marvin Ropmuang</h1>
          <h2 class="ghibli-subtitle">aka: Marvin, Winner, Win</h2>
          <p class="ghibli-text">
            I’m a passionate Software Engineer and Developer from Sa Keao, Thailand.
            I love working on minimalistic, intuitive solutions while keeping
            technical excellence at the core of what I do.
          </p>
          <div class="ghibli-details">
            <div class="ghibli-detail-item">
              <span>Age:</span> {{ new Date().getFullYear() - 2005 }}
            </div>
            <div class="ghibli-detail-item">
              <span>Birthday:</span> 8 March 2005
            </div>
            <div class="ghibli-detail-item">
              <span>Location:</span><br> Sa Keao, Thailand <br> Bangkok, Thailand
            </div>
            <div class="ghibli-detail-item">
              <span>Education:</span><br> High School: Math - Science - ComputerGraphic Benchamarachuthit Chanthaburi, Thailand (2022) <br>Undergraduate: Bachelor of Computer Graphic Christ University, Bangalore, India (Ongoing)
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  body {
    background-color: #f0f0f0;
    font-family: 'Arial', sans-serif;
  }
  
  .ghibli-section {
    position: relative;
    color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    overflow: hidden;
  }
  
  .ghibli-overlay-text {
    font-size: 10rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.1);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 0;
  }
  
  .ghibli-content {
    display: flex;
    flex-direction: row;
    z-index: 2;
    align-items: center;
    gap: 50px;
  }
  
  .ghibli-profile {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .ghibli-portrait {
    width: 400px;
    border-radius: 20px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.5);
  }
  
  .ghibli-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .ghibli-title {
    font-size: 4rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;
  }
  
  .ghibli-subtitle {
    font-size: 2rem;
    color: #cccccc;
    margin-bottom: 20px;
  }
  
  .ghibli-text {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #dddddd;
    margin-bottom: 30px;
  }
  
  .ghibli-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .ghibli-detail-item {
    font-size: 1.1rem;
    font-weight: 400;
    color: #eeeeee;
  }
  
  .ghibli-detail-item span {
    font-weight: bold;
    color: #ffffff;
  }
  
  /* Responsive design for smaller screens */
  @media (max-width: 1024px) {
    .ghibli-portrait {
      width: 350px;
    }
  
    .ghibli-title {
      font-size: 3.5rem;
    }
  
    .ghibli-subtitle {
      font-size: 1.8rem;
    }
  
    .ghibli-overlay-text {
      font-size: 8rem;
    }
  }
  
  @media (max-width: 768px) {
    .ghibli-overlay-text {
      font-size: 5rem;
    }
  
    .ghibli-content {
      flex-direction: column;
      gap: 20px;
    }
  
    .ghibli-title {
      font-size: 2.5rem;
    }
  
    .ghibli-subtitle {
      font-size: 1.5rem;
    }
  
    .ghibli-portrait {
      width: 250px;
    }
  
    .ghibli-text {
      font-size: 1rem;
    }
  
    .ghibli-details {
      gap: 5px;
    }
  
    .ghibli-detail-item {
      font-size: 1rem;
    }
  }
  </style>
  