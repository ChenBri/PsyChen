<script>
import service_list from "./../assets/json/service_list.json";

export default {
  data() {
    return {
      service: service_list,
    };
  },
};
</script>

<template>
  <section id="my_service" class="mt-4 bg-psy-bg-light">
    <div class="content">
      <h2 class="mb-8">Available Services</h2>
      <div class="flex flex-col xl:flex-row gap-12">
        <div class="basis-1/2">
          <p class="p-6 border-2 border-white">
            I offer everything regarding PsychoPy. I can create your experiments
            from scratch, whether online or in person. Give you guidance on how
            to use PsychoPy and understand it better for your academic purposes.
            I will gladly troubleshoot your existing experiments, fix bugs and
            develop new features for you. Feel free to ask me anything regarding
            Psychopy.
          </p>

          <ul class="mt-12">
            <li v-for="(item, index) in service">
              <div
                class="flex py-4"
                :class="index !== 3 ? 'border-b-2 border-white' : ''"
              >
                <i
                  :class="item.service_icon"
                  class="fa-solid fa-2xl before:faClass pr-4"
                ></i>
                <div>
                  <h3 class="text-white">{{ item.service_name }}</h3>
                  <p>{{ item.service_description }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="relative basis-1/2 flex items-center">
          <img
            src="./../assets/images/my_service.png"
            class="rounded-[15px] p-0 sm:p-6 md:p-12 xl:p-0 z-10"
          />
          <!-- <img
            src="./../assets/images/decorations/decorations_wide_circle.png"
            class="absolute top-24 xl:-top-12 -right-12 lg:-right-36 w-[15rem] lg:w-[20rem]"
          /> -->
        </div>
      </div>
    </div>
  </section>
</template>
