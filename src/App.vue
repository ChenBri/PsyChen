<script>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import MyService from "./components/MyService.vue";
import Example1 from "./components/Example1.vue";
import Example2 from "./components/Example2.vue";
import ContactMe from "./components/ContactMe.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    AboutMe,
    MyService,
    Example1,
    Example2,
    ContactMe,
    Footer,
  },
};
</script>

<template>
  <NavBar />
  <AboutMe />
  <MyService />
  <Example1 />
  <Example2 />
  <ContactMe />
  <Footer />
</template>

<style scoped>
* {
  overflow: hidden;
}
</style>
