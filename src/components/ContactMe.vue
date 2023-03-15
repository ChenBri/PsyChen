<script>
import { observe } from "./../scripts/observeFunction";

export default {
  mounted() {
    observe(contact_me, contant_me_dots, "-translate-x-24", 0.5);
  },
};
</script>

<template>
  <section id="contact_me" class="bg-psy-bg-dark relative">
    <img
      id="contant_me_dots"
      alt="dots decoration"
      class="absolute right-[-1.25rem] md:right-[0.5rem] xl:right-[3.5rem] top-[60%] xl:top-[40%] duration-[1500ms] -translate-x-24"
      src="./../assets/images/decorations/decorations_dots.png"
    />
    <div
      class="relative bg-psy-bg-light mx-4 md:mx-12 xl:mx-24 rounded-2xl z-10"
    >
      <div class="relative flex flex-col xl:flex-row">
        <div
          class="basis-2/6 bg-[#1E1E1e] flex items-center xl:rounded-l-2xl rounded-t-2xl xl:rounded-r-none"
        >
          <img
            src="./../assets/images/contant_image.png"
            alt="form written in HTML"
            class="object-contain rounded-t-2xl xl:rounded-t-none max-w-[80%] md:max-w-[100%]"
          />
        </div>

        <div
          class="basis-4/6 py-6 border-t-4 xl:border-t-0 border-l-0 xl:border-l-4 border-white px-6 md:px-12 lg:px-24"
        >
          <h2 class="mb-4">Get In Touch</h2>
          <p class="text-[22px] font-roboto">
            Feel free to message me about any inquiry you might have. I'll be
            happy to help.
          </p>
          <p>
            You can do so through the form below or your email:
            <span class="!bg-transparent underline"
              >chenbrilling@gmail.com</span
            >
          </p>

          <form action="POST" netlify>
            <!-- <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_next" value="https://psychen.dev/" /> -->

            <div class="grid grid-cols-4 grid-rows-4 gap-4 sm:gap-6 mt-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                class="col-span-4 xl:col-span-2 rounded-md bg-psy-icon-dark-blue/[0.1] p-2 py-4 font-quicksand text-[16px] text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                class="col-span-4 xl:col-span-2 rounded-md bg-psy-icon-dark-blue/[0.1] p-2 py-4 font-quicksand text-[16px] text-white"
              />

              <textarea
                type="text"
                name="text"
                placeholder="Message"
                required
                class="col-span-4 row-span-3 rounded-md bg-psy-icon-dark-blue/[0.1] p-2 font-quicksand text-[16px] text-white flex justify-center"
              ></textarea>

              <div class="col-span-4 row-span-1 flex justify-around gap-4">
                <button
                  type="submit"
                  class="bg-psy-blue basis-2/5 text-base md:text-lg"
                >
                  Submit
                </button>
                <div class="flex basis-3/5 justify-around flex-wrap">
                  <a href="mailto: chenbrilling@gmail.com" target="_blank">
                    <img
                      src="./../assets/images/gmail_icon.png"
                      alt="Gmail icon"
                      class="rounded-border-blue-small-block"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chen-brilling-043522230/"
                    target="_blank"
                  >
                    <img
                      src="./../assets/images/linkedin_icon.png"
                      alt="Linkedin icon"
                      class="rounded-border-blue-small-block"
                    />
                  </a>
                  <a
                    href="https://discourse.psychopy.org/u/chen/"
                    target="_blank"
                  >
                    <img
                      src="./../assets/images/psychopy_icon.png"
                      alt="PsychoPy icon"
                      class="rounded-border-blue-small-block"
                    />
                  </a>
                  <a href="https://github.com/ChenBri" target="_blank">
                    <img
                      src="./../assets/images/github_icon.png"
                      alt="Github icon"
                      class="rounded-border-blue-small-block"
                    />
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
input::placeholder {
  line-height: 1;
}
</style>
