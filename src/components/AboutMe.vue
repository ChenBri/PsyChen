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
          <p class="leading-12">
            Hey, my name is Chen Brilling. I'm a B.A. student in Psychology in
            my last semester at Bar-Ilan University. During the previous two
            years, I've worked as a research assistant in the Social
            Neuroscience Lab, where I developed a keen interest in creating
            experiments. As a research assistant, I've gained a lot of hands-on
            experience with various tools, including EEG, physiological systems,
            FFMPEG, OpenPose, and experiment creation using PsychoPy, Labvanced,
            and Qualitrics. Until recently, I have also been doing an internship
            as a Front-End Developer in Labvanced, another excellent platform
            for online experiments creation. I have experience with data
            processing tools, including SPSS, Jamovi, and Excel (VBA). I have a
            broad understanding of Javascript and Python and have created many
            experiments using PsychoPy. I also have expertise in editing tools
            such as Photoshop, After Effects, and Illustrator, which always come
            in handy. And many more tools.
          </p>
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
      <div class="flex justify-center lg:justify-start">
        <button
          @click="scrollToId(`contact_me`)"
          class="px-10 py-4 mt-12 lg:mt-6 bg-psy-blue rounded-lg text-white font-quicksand"
        >
          Contant Me
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
