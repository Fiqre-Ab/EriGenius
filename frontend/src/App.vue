<template>
  <div id="app">
    <NavBar />
    <main style="flex: 1; padding: 20px;">
      <router-view />
    </main>
    <Footer />

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/FooterBar.vue'


export default {
  components: { NavBar, Footer }
}


</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}
main {
  flex: 1;
}
</style>
