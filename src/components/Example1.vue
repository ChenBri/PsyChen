<template>
  <section id="example_1">
    <div class="content">
      <div class="flex">
        <video src="./../assets/" class="basis-1/2"></video>
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
          <div class="flex flex-row gap-4 lg:gap-12 mt-6">
            <button class="flex items-center gap-4 p-2">
              <img
                class="w-12 h-12"
                src="./../assets/images/github_button.png"
              />
              <p class="">Github Repository</p>
            </button>
            <button class="flex items-center gap-4 p-2">
              <img class="w-12 h-12" src="./../assets/images/flow_button.png" />
              <p class="">Flow</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
