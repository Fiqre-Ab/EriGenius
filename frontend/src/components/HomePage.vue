<template>
  <div class="home">
    <!-- Hero Banner -->
    <section class="hero">
      <div class="overlay">
        <div class="hero-content animate__animated animate__fadeInDown">
          <h1>Launch Your Tech Career with EriGenius Academy</h1>
          <p>Learn Tigrinya, English, Amharic & Coding — immersive, cohort-based, mentor-led learning.</p>
          <div class="cta-group">
            <router-link to="/courses" class="cta-btn primary">Explore Programs</router-link>
            <router-link to="/contact" class="cta-btn outline">Talk to Us</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Overview -->
    <section class="overview">
      <h2>Why Our EriGenius Stands Out</h2>
      <p>40‑week immersive learning, EriGenius‑inspired curriculum, dedicated mentors, capstone projects, and career coaching.</p>
      <router-link to="/about" class="learn-more">Learn More</router-link>
    </section>

    <!-- Feature Cards -->
<section class="features">
  <article>
    <h3>Live Instructor‑Led Cohorts</h3>
    <p>Real-time classes, peer collaboration, and live debugging—just like EriGenius  model.</p>
  </article>
  <article>
    <h3>Hands-On Capstone Projects</h3>
    <p>A portfolio-ready full stack project at program end, taught with live mentorship.</p>
  </article>
  <article>
    <h3>Career Healing & Mentorship</h3>
    <p>Get resume prep, mock interviews, and job strategy tailored to launching in tech. 71% job success rate in 6 months.</p>
  </article>
</section>

  </div>
</template>

<style scoped>
.home {
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}
.hero {
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b') center/cover no-repeat;
  position: relative;
  display: flex;
}
.overlay {
  background: rgba(0,0,0,0.6);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}
.hero-content {
  text-align: center;
  color: #fff;
  max-width: 700px;
}
.hero-content h1 {
  font-size: 3.2rem;
  font-family: 'Georgia', serif;
  margin-bottom: 25px;
}
.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 35px;
  line-height: 1.5;
}
.cta-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.cta-btn {
  padding: 14px 32px;
  font-size: 1rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}
.cta-btn.primary {
  background: #f4c542;
  color: black;
}
.cta-btn.primary:hover {
  background: #ffdb58;
}
.cta-btn.outline {
  background: transparent;
  color: #f4c542;
  border: 2px solid #f4c542;
}
.cta-btn.outline:hover {
  background: #f4c542;
  color: black;
}
.overview {
  text-align: center;
  padding: 60px 20px;
}
.overview h2 {
  font-size: 2.4rem;
  margin-bottom: 18px;
}
.overview p {
  font-size: 1.15rem;
  margin-bottom: 22px;
}
.learn-more {
  color: #8c1d40;
  font-weight: 600;
  text-decoration: none;
}
.learn-more:hover {
  text-decoration: underline;
}
.features {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 60px 20px;
  flex-wrap: wrap;
  gap: 30px;
}
.features article {
  flex: 1 1 250px;
  max-width: 300px;
}
.features h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}
.features p {
  font-size: 1rem;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 { font-size: 2.2rem; }
  .hero-content p { font-size: 1.05rem; }
  .cta-btn { font-size: 0.9rem; padding: 12px 24px; }
  .overview h2 { font-size: 1.9rem; }
  .features { flex-direction: column; align-items: center; }
}
</style>
