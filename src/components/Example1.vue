<template>
  <section id="example_1">
    <div class="content">
      <div class="flex flex-col-reverse lg:flex-row gap-12">
        <video
          class="basis-1/2 lg:max-w-[50%] rounded-md"
          autoplay
          muted
          controls
          loop
        >
          <source src="./../assets/videos/Vid1_720p.mp4" type="video/mp4" />
        </video>
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
              <img class="w-8 h-8" src="./../assets/images/github_button.png" />
              <p class="px-1">Github Repository</p>
            </button>
            <button class="flex items-center gap-2 px-2">
              <img class="w-8 h-8" src="./../assets/images/flow_button.png" />
              <p class="px-1">Flow</p>
            </button>
          </div>
        </div>
      </div>
      <iframe
        class="airtable-embed mt-12 lg:mt-24 rounded-lg"
        src="https://airtable.com/embed/shrd3r8uU3J7O5zFX?backgroundColor=cyan"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="533"
        style="background: transparent; border: 1px solid #ccc"
      ></iframe>
    </div>
  </section>
</template>
