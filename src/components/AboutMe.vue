<script>
import ParticlesBackground from "./ParticlesBackground.vue";
import { scrollToId } from "../scripts/scrollFunction";

export default {
  components: {
    ParticlesBackground,
  },
  methods: {
    scrollToId,
  },
};
</script>

<template>
  <ParticlesBackground id="tsparticles" />
  <section id="about_me">
    <div class="content" id="test">
      <div class="flex flex-col lg:flex-row gap-0 md:gap-8">
        <div class="flex flex-col gap-4 basis-3/5">
          <h1>PsyChen</h1>
          <h2>PsychoPy Experiment Creation</h2>
          <div>
            <p>
              Hey! My name is
              <span class="text-cyan-400">Chen Brilling</span>.
            </p>
            <p class="mb-4">
              I am a B.A. Student in Psychology at Bar-Ilan University.
            </p>

            <p class="mb-4">
              For the past two years, I worked as a Research Assistant in the
              Social Neuroscience Lab. In this role, I gained a broad, hands-on
              experience with various tools, including:
              <span class="text-purple-400">PsychoPy</span> and
              <span class="text-purple-400">Qualitrics</span>.
            </p>

            <p class="mb-4">
              I have also been interning as a Front-End Developer at <span class="text-purple-400">Labvanced</span>, a
              platform for creating online experiments.
            </p>

            <p>
              In addition, I have experience with data processing tools,
              including; <span class="text-amber-400">SPSS</span>,
              <span class="text-amber-400">Jamovi</span>,
              <span class="text-amber-400">Excel (VBA)</span>, and Media tools
              such as <span class="text-amber-200">Photoshop</span>,
              <span class="text-amber-200">After Effect</span>, and
              <span class="text-amber-200">Illustrator</span>.
            </p>
          </div>
          <div class="hidden lg:flex justify-center lg:justify-start">
            <button
              @click="scrollToId(`contact_me`)"
              class="px-10 py-4 mt-12 lg:mt-6 bg-psy-blue rounded-lg text-white font-quicksand"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div class="flex basis-2/5 justify-end mt-12">
          <div class="relative w-[80%]">
            <img
              src="../assets/images/profile/Chen_Brilling_temp.png"
              alt="Chen Brilling"
              class="rounded-border-blue-big"
            />
            <img
              src="../assets/images/psychopy_logo.png"
              alt="PsychoPy logo"
              class="left-[-50px] sm:left-[-80px] lg:left-[-25px] xl:left-[10px] lg:top-[10px] bottom-[195px] rounded-border-blue-small-abs"
            />
            <img
              src="../assets/images/python_logo.png"
              alt="Python logo"
              class="left-[-70px] sm:left-[-60px] lg:left-[-60px] xl:left-[-40px] lg:top-[80px] bottom-[115px] sm:bottom-[110px] rounded-border-blue-small-abs"
            />
            <img
              src="../assets/images/javascript_logo.png"
              alt="JavaScript logo"
              class="left-[-50px] sm:left-[-20px] lg:left-[-60px] lg:top-[170px] bottom-[35px] rounded-border-blue-small-abs"
            />
          </div>
        </div>
      </div>
      <div class="flex lg:hidden jlex justify-center lg:justify-start">
        <button
          @click="scrollToId(`contact_me`)"
          class="px-10 py-4 mt-12 lg:mt-6 bg-psy-blue rounded-lg text-white font-quicksand"
        >
          Contact Me
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  z-index: -1;
}
</style>
