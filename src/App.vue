<script>
import NavBar from "./components/NavBar.vue";
import AboutMe from "./components/AboutMe.vue";
import MyService from "./components/MyService.vue";
import Example1 from "./components/Example1.vue";

export default {
  components: {
    NavBar,
    AboutMe,
    MyService,
    Example1,
  },
};
</script>

<template>
  <NavBar />
  <AboutMe />
  <MyService />
  <Example1 />
</template>
