<template>
  <div class="home">
    <section class="hero">
      <div class="overlay">
        <div class="content animate__animated animate__fadeInDown">
          <h1>Welcome to EriGenius Academy</h1>
          <p>Learn Tigrinya, English, Amharic & Coding in a fun, engaging way.</p>
          <router-link to="/courses" class="cta-button">Explore Courses</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b') center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.6); /* dark overlay */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.content {
  text-align: center;
  color: white;
  max-width: 800px;
}

.content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Georgia', serif;
}

.content p {
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 30px;
  line-height: 1.6;
}

.cta-button {
  padding: 12px 28px;
  font-size: 1rem;
  background: #f4c542;
  color: black;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #ffdb58;
}

/* Responsive */
@media (max-width: 768px) {
  .content h1 {
    font-size: 2.2rem;
  }
  .content p {
    font-size: 1rem;
  }
  .cta-button {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}
</style>
