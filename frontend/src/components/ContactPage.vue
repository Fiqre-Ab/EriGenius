<template>
  <section class="contact-page">
    <div class="container">
      <h1 class="animate__animated animate__fadeInDown">📬 Get in Touch with Us!</h1>
      <p class="intro animate__animated animate__fadeInUp">
        Got a question, idea, or just want to say hi?  
        We're all ears! 👂🎉 Send us a message and the EriGenius team will get back to you as soon as possible.
      </p>

      <form @submit.prevent="submitForm" class="contact-form animate__animated animate__zoomIn">
        <input v-model="form.name" type="text" placeholder="Your Name" required />
        <input v-model="form.email" type="email" placeholder="Your Email" required />
        <textarea v-model="form.message" placeholder="Type your message here..." required></textarea>
        <button type="submit" class="submit-btn">Send Message 🚀</button>
      </form>

      <div v-if="submitted" class="thank-you animate__animated animate__fadeInUp">
        🎉 Thank you! We've received your message.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false
    }
  },
  methods: {
    submitForm() {
      this.submitted = true;
      console.log("Contact form submitted:", this.form);
      // Optionally integrate email service or backend call
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.contact-page {
  background: linear-gradient(180deg, #f0f9ff, #ffffff);
  padding: 60px 20px;
  text-align: center;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #1976d2;
  font-family: 'Comic Sans MS', cursive;
  margin-bottom: 20px;
}

.intro {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 40px;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 14px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-btn {
  padding: 14px;
  background-color: #f4c542;
  color: black;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background-color: #ffdb58;
}

.thank-you {
  margin-top: 30px;
  font-size: 1.3rem;
  color: #388e3c;
}
</style>