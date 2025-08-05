<template>
  <section class="courses-page">
    <div class="container">
      <h1 class="animate__animated animate__fadeInDown">🎓 Our Courses</h1>
      <p class="intro animate__animated animate__fadeInUp">
        EriGenius offers creative and immersive courses to help kids learn languages and coding in a fun, supportive environment!
      </p>

      <div class="courses-grid">
        <div
          class="course-card animate__animated animate__zoomIn"
          v-for="course in courses"
          :key="course.title"
        >
          <div class="emoji">{{ course.emoji }}</div>
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
        </div>
      </div>

      <router-link to="/apply" class="cta-btn animate__animated animate__fadeInUp">
        Enroll Today 🚀
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoursesPage',
  data() {
    return {
      courses: [
        {
          title: 'Tigrinya for Kids',
          emoji: '📘',
          description: 'Read, write, and speak Tigrinya through songs, stories, and cultural games.'
        },
        {
          title: 'English Fun Lab',
          emoji: '🗣️',
          description: 'Master vocabulary and storytelling with exciting word games and writing projects.'
        },
        {
          title: 'Amharic Adventures',
          emoji: '📖',
          description: 'Learn Amharic by exploring characters, rhymes, and Ethiopian folk tales.'
        },
        {
          title: 'Coding with Scratch',
          emoji: '🧱',
          description: 'Use colorful blocks to build animations and interactive stories. Perfect for beginners!'
        },
        {
          title: 'Web Development Basics',
          emoji: '💻',
          description: 'Learn HTML, CSS, and JavaScript to build and style your very own website.'
        },
        {
          title: 'Game Coding with JavaScript',
          emoji: '🎮',
          description: 'Create real games with characters, controls, and scoring logic using JavaScript!'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.courses-page {
  background: linear-gradient(to bottom, #e1f5fe, #ffffff);
  padding: 60px 20px;
  text-align: center;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  font-size: 2.8rem;
  color: #0277bd;
  font-family: 'Comic Sans MS', cursive;
  margin-bottom: 10px;
}

.intro {
  font-size: 1.2rem;
  color: #444;
  max-width: 700px;
  margin: 0 auto 50px;
  line-height: 1.6;
}

.courses-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.course-card {
  background: #ffffff;
  width: 280px;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.course-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

</style>