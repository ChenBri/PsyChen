<template>
  <section id="contact_me">
    <div class="bg-psy-bg-light rounded-xl mx-24">
      <div class="flex">
        <div class="basis-2/6 rounded-l-2xl bg-[#1E1E1e] flex items-center">
          <img
            src="./../assets/images/contant_image.png"
            class="object-contain"
          />
        </div>

        <div class="basis-4/6 p-6 border-l-4 border-white px-24">
          <h2 class="mb-4">Get In Touch</h2>
          <p class="text-[22px] font-roboto w-[50%]">
            Feel free to message me about any inquiry you might have. I'll be
            happy to help.
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

            <div class="grid grid-cols-4 grid-rows-4 gap-6 mt-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                class="col-span-2 rounded-md bg-psy-icon-dark-blue/[0.1] p-2 py-4 font-quicksand text-[16px] text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                class="col-span-2 rounded-md bg-psy-icon-dark-blue/[0.1] p-2 py-4 font-quicksand text-[16px] text-white"
              />

              <input
                type="text"
                name="text"
                placeholder="Message"
                required
                class="col-span-4 row-span-3 rounded-md bg-psy-icon-dark-blue/[0.1] p-2 font-quicksand text-[16px] text-white"
              />

              <button type="submit" class="bg-psy-blue mr-12">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
