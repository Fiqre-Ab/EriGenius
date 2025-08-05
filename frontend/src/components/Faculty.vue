<template>
  <section class="faculty-page">
    <div class="container">
      <h1 class="animate__animated animate__fadeInDown">Who Will I Learn From?</h1>
      <p class="intro animate__animated animate__fadeInLeft">
        At EriGenius Academy, we believe that learning should be magical, fun, and guided by amazing mentors!
        Our faculty members are expert educators, coding superheroes, language storytellers, and creative explorers who love working with kids.
      </p>
      <p class="intro animate__animated animate__fadeInRight">
        Whether you're learning how to say "hello" in Tigrinya or building your very first game or website,
        our team will guide you with energy, kindness, and creativity. We learn, laugh, and grow together.
      </p>

      <div class="instructors">
        <div class="card animate__animated animate__zoomIn" v-for="inst in instructors" :key="inst.name">
          <img :src="inst.photo" :alt="inst.name" />
          <h3>{{ inst.name }}</h3>
          <p class="role">{{ inst.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FacultyPage',
  data() {
    return {
      instructors: [
        {
          name: 'Meron Ghebremeskel',
          role: 'Language Wizard ✨ & Communication Coach',
          photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=400&h=400'
        },
        {
          name: 'Yohannes Berhane',
          role: 'Full-Stack Hero 🧑‍💻 & Game Builder',
          photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fit=crop&w=400&h=400'
        },
        {
          name: 'Selam Tesfay',
          role: 'Literacy Artist 🎨 & Storytelling Specialist',
          photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=400&h=400'
        },
        {
          name: 'Nahom Gebreyesus',
          role: 'Tech Explorer 🚀 & Classroom Guide',
          photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?fit=crop&w=400&h=400'
        }
      ]
    }
  }
}
</script>

<style scoped>
.faculty-page {
  background: linear-gradient(180deg, #fefcea 0%, #f1da36 100%);
  padding: 60px 20px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #e64a19;
  font-family: 'Comic Sans MS', cursive, sans-serif;
}

.intro {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 30px;
  line-height: 1.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.instructors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.card {
  background: #fffefc;
  border-radius: 15px;
  overflow: hidden;
  width: 260px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-bottom: 4px solid #f4c542;
}

.card h3 {
  font-size: 1.4rem;
  margin: 12px 0 4px;
  color: #333;
  font-weight: bold;
}

.card .role {
  font-size: 1rem;
  color: #666;
  padding-bottom: 16px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  .intro {
    font-size: 1rem;
    padding: 0 10px;
  }
  .instructors {
    flex-direction: column;
    align-items: center;
  }
}
</style>
