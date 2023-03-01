<script>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";

export default {
  components: {
    NavBar,
    AboutMe,
  },
};
</script>

<template>
  <NavBar />
  <div class="content">
    <AboutMe />
  </div>
</template>
