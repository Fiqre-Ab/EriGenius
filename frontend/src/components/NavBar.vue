<template>
  <nav class="navbar">
    <div class="navbar__logo">EriGenius</div>
    <ul class="navbar__links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/courses">Courses</router-link></li>
      <li><router-link to="/faculty">faculty</router-link></li>
      <li><router-link to="/tuition">Tuition</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/apply">Apply Now</router-link></li>
      
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8c1d40; 
  padding: 15px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar__logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Georgia', serif;
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
  color: #f4c542; /* Gold accent on hover */
}
</style>
