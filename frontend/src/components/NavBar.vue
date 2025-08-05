<template>
  <nav class="navbar">
    <div class="navbar__logo">EriGenius</div>

    <button class="navbar__toggle" @click="toggleMenu">
      ☰
    </button>

    <ul v-bind:class="isOpen ? 'navbar__links navbar__links--open' : 'navbar__links'">

      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
      <li><router-link to="/courses" @click="closeMenu">Courses</router-link></li>
      <li><router-link to="/faculty" @click="closeMenu">Faculty</router-link></li>
      <li><router-link to="/tuition" @click="closeMenu">Tuition</router-link></li>
      <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
      <li><router-link to="/apply" @click="closeMenu">Apply Now</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8c1d40;
  padding: 15px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar__logo {
  color: #fff;
  font-size: 1.7rem;
  font-weight: bold;
  font-family: 'Georgia', serif;
}

.navbar__toggle {
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.navbar__links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  
}

.navbar__links li {
  font-family: 'Segoe UI', sans-serif;
}

.navbar__links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.navbar__links a:hover {
  color: #f4c542;
}

/* === Responsive === */
@media (max-width: 768px) {
  .navbar__toggle {
    display: block;
  }

  .navbar__links {
    display: none;
    flex-direction: column;
    background-color: #8c1d40;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 999;
  }

  .navbar__links--open {
    display: flex;
  }

  .navbar__links li {
    margin: 10px 0;
    text-align: center;
  }
}
</style>
