<script>
import FlowImage from "./FlowImage.vue";
import { observe } from "./../scripts/observeFunction";

export default {
  data() {
    return {
      image1Open: false,
      image1URL: "/dynamic-images/exp1_flow.png",
    };
  },

  methods: {
    toggleImage() {
      this.image1Open = !this.image1Open;
    },
  },
  components: {
    FlowImage,
  },
  mounted() {
    observe(
      example_1,
      example_1_squares,
      ["translate-y-24", "-translate-x-24"],
      0.6,
    );
    observe(
      example_1,
      example_1_vid_decoration,
      ["translate-y-24", "translate-x-24"],
      0.35,
    );
  },
};
</script>

<template>
  <section id="example_1" class="bg-psy-bg-dark">
    <div class="content">
      <div class="flex flex-col-reverse lg:flex-row gap-12">
        <div class="relative basis-1/2">
          <video class="relative rounded-md z-10" autoplay muted controls loop>
            <source src="./../assets/videos/Vid1_720p.mp4" type="video/mp4" />
          </video>
          <img
            id="example_1_vid_decoration"
            class="absolute -top-[3.5rem] -left-16 w-32 duration-1000 translate-y-24 translate-x-24"
            src="./../assets/images/decorations/decorations_dots.png"
            alt="dots decoration"
          />
        </div>

        <div class="basis-1/2">
          <h2>Example #1:</h2>
          <h2 class="text-[28px]">Identical/Non-Identical Stimulus</h2>
          <p>
            In the experiment, the participant identifies two stimuli. The first
            stimulus is a four colored squares presented for a duration of 200ms
            without overlapping After a 500ms pause, the second stimulus appears
            until the participant makes a decision, which may be identical or
            have one square's colors changed. The participant must press 'P' if
            the images are identical and 'Q' if not. They can display the first
            stimulus by pressing 'space'. This phenomenon shows that familiarity
            with a task's stimulus reduces attention, making memory of the event
            uncertain. The pilot phase starts soon, and the actual run takes
            place within a few months.
          </p>
          <div
            class="flex flex-row justify-center lg:justify-start gap-4 lg:gap-8 mt-6"
          >
            <button class="flex items-center gap-2 p-2">
              <img
                class="w-8 h-8"
                src="./../assets/images/github_button.png"
                alt="Github repository icon"
              />
              <p class="px-1">
                <a
                  href="https://github.com/ChenBri/Grid-Psychology-Experiment"
                  target="_blank"
                  >Github Repository</a
                >
              </p>
            </button>
            <button @click="toggleImage" class="flex items-center gap-2 px-2">
              <img
                class="w-8 h-8"
                src="./../assets/images/flow_button.png"
                alt="Flow icon"
              />
              <p class="px-1">Flow</p>
            </button>
          </div>
        </div>
      </div>

      <div class="relative">
        <iframe
          name="Example 1 Airtable Database"
          title="Example 1 Airtable Database"
          class="relative airtable-embed mt-12 lg:mt-24 rounded-lg z-20"
          src="https://airtable.com/embed/shrd3r8uU3J7O5zFX?backgroundColor=cyan"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style="background: transparent; border: 1px solid #ccc"
        ></iframe>
        <img
          id="example_1_squares"
          class="absolute -top-4 2xl:-top-12 -right-4 2xl:-right-12 z-10 w-32 duration-1000 translate-y-24 -translate-x-24"
          src="./../assets/images/decorations/decorations_squares.png"
          alt="squares decoration"
        />
      </div>
    </div>

    <FlowImage
      class="flow"
      v-show="image1Open"
      :image="image1URL"
      :isOpen="image1Open"
      @toggleImage="toggleImage"
    />
  </section>
</template>
