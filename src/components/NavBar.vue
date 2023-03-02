<script>
export default {
  data() {
    return {
      burgerMenu: true,
      windowWidth: 1920,
    };
  },
  methods: {
    toggle() {
      this.burgerMenu = !this.burgerMenu;
    },
    resize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth >= 768) {
        this.burgerMenu = true;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    this.resize();
  },
};
</script>

<template>
  <nav id="navbar">
    <div class="absolute -right-2 py-4">
      <div
        v-show="this.windowWidth <= 768"
        @click="toggle"
        id="nav-icon"
        :class="{ open: !burgerMenu }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div
      v-if="!burgerMenu || this.windowWidth >= 768"
      class="flex flex-col md:flex-row justify-between px-4 md:px-24 py-4"
    >
      <img
        src="../assets/images/logo_horizontal.png"
        class="w-32 h-auto m-auto md:m-0 pb-4 md:pb-0"
      />
      <ul class="flex flex-col md:flex-row gap-6 items-center">
        <li><a href="#about_me" @click="toggle">About Me</a></li>
        <li><a href="#my_service" @click="toggle">My Service</a></li>
        <li><a href="#example_1" @click="toggle">Examples</a></li>
        <li>
          <a
            href="#contact_me"
            @click="toggle"
            class="border-psy-blue border-2 p-3 rounded-xl"
            >Contant Me</a
          >
        </li>
      </ul>
    </div>
    <div v-else class="flex justify-between px-4">
      <img src="../assets/images/logo_horizontal.png" class="w-32 py-2" />
    </div>
  </nav>
</template>

<style scoped>
#nav-icon {
  width: 60px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 50%;
  right: 26px;
  border-radius: 9px;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon span:nth-child(2) {
  top: 9px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon span:nth-child(3) {
  top: 18px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

#nav-icon.open span:nth-child(1) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -3px;
  left: 4px;
}

#nav-icon.open span:nth-child(2) {
  width: 0%;
  opacity: 0;
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 18px;
  left: 4px;
}
</style>
