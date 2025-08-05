<template>
  <section class="tuition-page">
    <div class="container">
      <h1 class="animate__animated animate__fadeInDown">Tuition & Financing</h1>
      <p class="intro animate__animated animate__fadeInUp">
        We believe great education should be accessible. Here’s how our program costs break down — with flexible options that work for families like yours.
      </p>

      <div class="cost-box animate__animated animate__fadeInUp">
        <h2>Program Tuition</h2>
        <p><strong>EriGenius 40‑Week Learning Bundle:</strong> $12,500</p>
        <p><em>(Comparable immersive programs often cost $13,000–$14,000 for full‑time):contentReference[oaicite:2]{index=2}</em></p>
      </div>

      <div class="options">
        <div class="option animate__animated animate__zoomIn">
          <h3>Pay Upfront</h3>
          <p>One-time payment: <strong>$12,500</strong></p>
        </div>
        <div class="option animate__animated animate__zoomIn">
          <h3>Installments</h3>
          <p>Split into 4 easy payments of $3,200 each</p>
        </div>
        <div class="option animate__animated animate__zoomIn">
          <h3>Scholarship</h3>
          <p>Save $2,500 (Need‑based or merit), total price: <strong>$10,000</strong></p>
        </div>
      </div>

      <div class="financing-info animate__animated animate__fadeInUp">
        <h2>Financing Support</h2>
        <p>
          We partner with trusted providers to offer interest-free payment plans and deferred tuition options.  
          Some programs even let you pay after job placement (15–22% of your salary). Examples show typical costs around $13,500 for full‑time immersive programs.:contentReference[oaicite:3]{index=3}
        </p>
      </div>

      <router-link to="/apply" class="cta-btn animate__animated animate__fadeInUp">
        Get Started & Apply Now 🚀
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TuitionPage'
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.tuition-page {
  background: linear-gradient(180deg, #e0f7fa 0%, #ffffff 100%);
  padding: 60px 20px;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.8rem;
  color: #00796b;
  font-family: 'Comic Sans MS', cursive;
}

.intro {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
  line-height: 1.6;
}

.cost-box {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 40px;
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
}

.option {
  background: #ffffff;
  border-radius: 12px;
  width: 220px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.option h3 {
  color: #00796b;
  margin-bottom: 10px;
}

.option p {
  font-size: 1rem;
  color: #444;
}

.financing-info {
  margin-bottom: 50px;
}

.financing-info h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #00796b;
}

.financing-info p {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.cta-btn {
  display: inline-block;
  padding: 14px 28px;
  background-color: #f4c542;
  color: #000;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;
}

.cta-btn:hover {
  background-color: #ffdb58;
}

@media (max-width: 768px) {
  .options {
    flex-direction: column;
    align-items: center;
  }
}
</style>
