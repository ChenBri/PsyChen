<template>
  <section id="contact_me">
    <div class="bg-psy-bg-light mx-4 md:mx-12 xl:mx-24 rounded-2xl">
      <div class="flex flex-col xl:flex-row">
        <div
          class="basis-2/6 bg-[#1E1E1e] flex items-center xl:rounded-l-2xl rounded-t-2xl xl:rounded-r-none"
        >
          <img
            src="./../assets/images/contant_image.png"
            class="object-contain rounded-t-2xl xl:rounded-t-none max-w-[80%] md:max-w-auto"
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
          <form
            action="https://formsubmit.co/chenbrilling@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="http://127.0.0.1:5173/thankyou"
            />

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

              <input
                type="text"
                name="text"
                placeholder="Message"
                required
                class="col-span-4 row-span-3 rounded-md bg-psy-icon-dark-blue/[0.1] p-2 font-quicksand text-[16px] text-white"
              />

              <button
                type="submit"
                class="bg-psy-blue mr-4 sm:mr-12 col-span-2 2xl:col-span-1"
              >
                Submit
              </button>
              <div
                class="flex col-span-3 sm:col-span-2 justify-around col-start-3 mr-4 sm:mr-0 ml-[-16px] sm:ml-0"
              >
                <a href="mailto: chenbrilling@gmail.com" target="_blank">
                  <img
                    src="./../assets/images/gmail_icon.png"
                    class="rounded-border-blue-small-block"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/chen-brilling-043522230/"
                  target="_blank"
                >
                  <img
                    src="./../assets/images/linkedin_icon.png"
                    class="rounded-border-blue-small-block"
                  />
                </a>
                <a
                  href="https://discourse.psychopy.org/u/chen/"
                  target="_blank"
                >
                  <img
                    src="./../assets/images/psychopy_icon.png"
                    class="rounded-border-blue-small-block"
                  />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
