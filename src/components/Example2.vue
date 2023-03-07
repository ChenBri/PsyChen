<script>
import FlowImage from "./FlowImage.vue";
import { observe } from "./../scripts/observeFunction";

export default {
  data() {
    return {
      image2Open: false,
      image2URL: "./src/assets/images/exp2_flow.png",
    };
  },
  methods: {
    toggleImage() {
      this.image2Open = !this.image2Open;
    },
  },
  components: {
    FlowImage,
  },
  mounted() {
    observe(example_2, example_2_circle, "scale-0");
  },
};
</script>

<template>
  <section class="bg-psy-bg-light">
    <div class="content" id="example_2">
      <div class="flex flex-col-reverse lg:flex-row-reverse gap-12">
        <div class="relative z-10 basis-1/2">
          <video class="rounded-md z-30" autoplay muted controls loop>
            <source src="./../assets/videos/Vid2_720p.mp4" type="video/mp4" />
          </video>
          <img
            src="./../assets/images/decorations/decorations_circle.png"
            class="absolute -z-10 -right-24 -bottom-8 lg:bottom-24 xl:-bottom-16 w-48 md:w-64 xl:w-72 duration-1000 scale-0"
            id="example_2_circle"
          />
        </div>
        <div class="basis-1/2">
          <h2>Example #2:</h2>
          <h2 class="text-[28px]">Cue Reactivity</h2>
          <p>
            The Cue Reactivity experiment consists of three categories of
            stimuli: neutral, non-operating state, and in-use state.
            Participants view 24 blocks of five images each, each containing
            images from one of the categories. Each block lasts 20 seconds and
            is presented randomly, with a fixation cross presented between each
            block. After each block, participants rate their desire to use their
            phone on a scale of 1 to 7. The laboratory session is about 40
            minutes and includes recording physiological data, a computerized
            assignment, and various activities involving phone use and
            face-to-face interaction.
          </p>
          <div
            class="flex flex-row justify-center lg:justify-start gap-4 lg:gap-8 mt-6"
          >
            <button class="flex items-center gap-2 p-2">
              <img class="w-8 h-8" src="./../assets/images/github_button.png" />
              <p class="px-1">
                <a
                  href="https://github.com/ChenBri/Cue-Reactivity-Psycholoy-Experiment"
                  target="_blank"
                  >Github Repository</a
                >
              </p>
            </button>
            <button @click="toggleImage" class="flex items-center gap-2 px-2">
              <img class="w-8 h-8" src="./../assets/images/flow_button.png" />
              <p class="px-1">Flow</p>
            </button>
          </div>
        </div>
      </div>
      <div class="relative z-20">
        <iframe
          class="airtable-embed mt-12 lg:mt-24 rounded-lg"
          src="https://airtable.com/embed/shr3bkI2IdVkdKCWc?backgroundColor=cyan"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style="background: transparent; border: 1px solid #ccc"
        ></iframe>

        <img
          class="absolute -bottom-16 md:-bottom-20 -left-16 md:-left-20 w-48 -z-10 scale-0"
          src="./../assets/images/decorations/decorations_square_dots.png"
        />
      </div>
    </div>
    <FlowImage
      class="flow"
      v-show="image2Open"
      :image="image2URL"
      :isOpen="image2Open"
      @toggleImage="toggleImage"
    />
  </section>
</template>
