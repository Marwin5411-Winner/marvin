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
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-2">Marvin Ropmuang</h1>
        <h2 class="text-2xl md:text-3xl text-gray-300 mb-5">Developer • Designer • Creator</h2>

        <div class="mb-8">
          <p class="text-lg leading-relaxed text-gray-200">
            Passionate Software Engineer from Sa Keao, Thailand, crafting
            minimalistic, intuitive solutions while maintaining technical
            excellence. Known to friends as Marvin, Winner, or Win.
          </p>
        </div>

        <div class="ghibli-details">
          <div class="bg-opacity-10 bg-white rounded-xl p-4 my-4 shadow-lg">
            <div class="flex items-center mb-2">
              <div class="text-2xl mr-2">🎂</div>
              <h3 class="text-xl text-white m-0">Birthday</h3>
            </div>

            <div class="pl-3 border-l-2 border-white border-opacity-30">
              <div class="font-medium text-white">8 March 2005</div>
              <div class="text-gray-300">
                {{ new Date().getFullYear() - 2005 }} years old
              </div>
            </div>
          </div>

          <div class="bg-opacity-10 bg-white rounded-xl p-4 my-4 shadow-lg">
            <div class="flex items-center mb-3">
              <div class="text-2xl mr-2">📍</div>
              <h3 class="text-xl text-white m-0">Locations</h3>
            </div>

            <div
              class="flex flex-col gap-2 pl-3 border-l-2 border-white border-opacity-30"
            >
              <div class="location-item">
                <div class="font-medium text-white">Current</div>
                <div class="text-gray-300">Bangkok, Thailand</div>
              </div>
              <div class="location-item">
                <div class="font-medium text-white">Hometown</div>
                <div class="text-gray-300">Sa Keao, Thailand</div>
              </div>
            </div>
          </div>

          <div class="education-card">
            <div class="education-card-header">
              <div class="education-icon">🎓</div>
              <h3 class="education-title">Education</h3>
            </div>

            <div class="education-card-content">
              <div class="education-item">
                <h4>High School</h4>
                <div class="education-program">
                  Math-Science-ComputerGraphic
                </div>
                <div class="education-school">
                  Benchamarachuthit Chanthaburi, Thailand
                </div>
                <div class="education-year">2022</div>
              </div>

              <div class="education-item">
                <h4>Bachelor </h4>
                <div class="education-program">
                  Computer Application (BCA)
                </div>
                <div class="education-school">
                  Christ University, Bangalore, India
                </div>
                <div class="education-status">Ongoing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f0f0f0;
  font-family: "Arial", sans-serif;
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

.education-card {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  margin: 15px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.education-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.education-icon {
  font-size: 24px;
  margin-right: 10px;
}

.education-title {
  font-size: 1.5rem;
  margin: 0;
  color: white;
}

.education-card-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.education-item {
  padding-left: 10px;
  border-left: 2px solid rgba(255, 255, 255, 0.3);
}

.education-item h4 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
  color: white;
}

.education-program {
  font-weight: 500;
  color: #cccccc;
}

.education-school {
  color: #dddddd;
  margin-top: 3px;
}

.education-year,
.education-status {
  color: #aaaaaa;
  font-size: 0.9rem;
  margin-top: 3px;
}

.education-status {
  color: #4caf50;
  font-weight: 500;
}

@media (max-width: 768px) {
  .education-card-content {
    gap: 10px;
  }

  .education-title {
    font-size: 1.3rem;
  }

  .education-item h4 {
    font-size: 1rem;
  }
}
</style>
