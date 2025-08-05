<template>
  <section class="about-page">
    <div class="container">
      <h1 class="animate__animated animate__fadeInDown">🌟 About EriGenius Academy</h1>
      <p class="intro animate__animated animate__fadeInUp">
        At EriGenius, we believe that learning should be joyful, interactive, and full of possibility!
        Whether it’s mastering languages or building your first app, we’re here to make education exciting.
      </p>

      <div class="blocks">
        <div class="block animate__animated animate__fadeInLeft">
          <h2>🎯 Our Mission</h2>
          <p>
            Empower young minds through engaging, fun, and culturally rooted education in languages and coding.
          </p>
        </div>
        <div class="block animate__animated animate__fadeInRight">
          <h2>🚀 Our Vision</h2>
          <p>
            To become the leading creative academy for kids learning Tigrinya, Amharic, English, and technology — locally and globally.
          </p>
        </div>
        <div class="block animate__animated animate__zoomIn">
          <h2>❤️ Why EriGenius?</h2>
          <ul>
            <li>📚 Bilingual & multicultural learning</li>
            <li>💡 Project-based coding</li>
            <li>👩‍🏫 Kind, expert instructors</li>
            <li>🏠 Virtual & in-person options</li>
            <li>🎨 Designed for kids & teens</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.about-page {
  background: linear-gradient(to bottom, #fff9c4, #ffffff);
  padding: 60px 20px;
  text-align: center;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 2.8rem;
  color: #e65100;
  font-family: 'Comic Sans MS', cursive;
  margin-bottom: 20px;
}

.intro {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 50px;
  line-height: 1.6;
}

.blocks {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.block {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: left;
}

.block h2 {
  color: #f57c00;
  margin-bottom: 10px;
}

.block p,
.block ul {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.block ul {
  list-style: none;
  padding-left: 0;
}

.block ul li {
  margin-bottom: 8px;
}

@media (min-width: 768px) {
  .blocks {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block {
    width: 48%;
  }

  .block:last-child {
    width: 100%;
  }
}
</style>
