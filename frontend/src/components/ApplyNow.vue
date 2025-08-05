<template>
  <section class="apply-page">
    <div class="container">
      <h1 class="animate__animated animate__fadeInDown">Apply Now</h1>
      <p class="intro animate__animated animate__fadeInUp">
        Ready to start your learning adventure with EriGenius Academy? 🎓  
        Fill out this quick form and let the journey begin!
      </p>

      <form @submit.prevent="submitForm" class="form-box animate__animated animate__zoomIn">
        <input v-model="form.name" type="text" placeholder="Your Full Name" required />
        <input v-model="form.age" type="number" placeholder="Your Age" required />
        <select v-model="form.interest" required>
          <option disabled value="">Choose Interest</option>
          <option>Learn Tigrinya</option>
          <option>Learn English</option>
          <option>Learn Amharic</option>
          <option>Learn Coding</option>
          <option>All of the above</option>
        </select>
        <textarea v-model="form.notes" placeholder="Tell us something fun about you!"></textarea>
        <button type="submit" class="cta-btn">Send My Application 🚀</button>
      </form>

      <div v-if="submitted" class="thank-you animate__animated animate__fadeInUp">
        🎉 Thank you! We’ll get in touch soon!
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ApplyNowPage',
  data() {
    return {
      form: {
        name: '',
        age: '',
        interest: '',
        notes: ''
      },
      submitted: false
    }
  },
  methods: {
    submitForm() {
      this.submitted = true;
      // You could integrate API/email/send logic here
      console.log("Application submitted:", this.form);
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.apply-page {
  background: linear-gradient(180deg, #ffffff 0%, #e3f2fd 100%);
  padding: 60px 20px;
  text-align: center;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 2.8rem;
  color: #1976d2;
  font-family: 'Comic Sans MS', cursive;
}

.intro {
  font-size: 1.2rem;
  color: #555;
  margin: 20px 0 40px;
  line-height: 1.5;
}

.form-box {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, select, textarea {
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.cta-btn {
  padding: 14px;
  background-color: #f4c542;
  color: #000;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-btn:hover {
  background-color: #ffdb58;
}

.thank-you {
  margin-top: 30px;
  font-size: 1.3rem;
  color: #388e3c;
}
</style>
