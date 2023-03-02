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
  },
};
</script>

<template>
  <nav id="navbar">
    <div
      v-if="!burgerMenu || this.windowWidth >= 768"
      class="flex flex-col md:flex-row justify-between px-4 md:px-24 py-4"
    >
      <img
        src="../assets/images/logo_horizontal.png"
        class="w-32 h-auto m-auto md:m-0 pb-4 md:pb-0"
      />
      <ul class="flex flex-col md:flex-row gap-6 items-center">
        <li><a href="#about_me">About Me</a></li>
        <li><a href="#my_service">My Service</a></li>
        <li><a href="#example_1">Examples</a></li>
        <li>
          <a href="#contact_me" class="border-psy-blue border-2 p-3 rounded-xl"
            >Contant Me</a
          >
        </li>
      </ul>
      <button class="block md:hidden pt-6" @click="toggle">Close Menu</button>
    </div>
    <div v-else class="flex justify-between px-4">
      <img src="../assets/images/logo_horizontal.png" class="w-32 py-2" />
      <button class="block md:hidden text-end px-4" @click="toggle">=</button>
    </div>
  </nav>
</template>
