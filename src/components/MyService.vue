<script>
import service_list from "./../assets/json/service_list.json";
import { observe, observeAnimation } from "./../scripts/observeFunction";
export default {
  data() {
    return {
      service: service_list,
    };
  },
  methods: {},
  mounted() {
    observe(my_service, my_service_circle, "scale-0", 0.75);

    // let services = [service_1, service_2, service_3, service_4];
    // for (let i = 0; i < services.length; i++) {
    //   observeAnimation(
    //     my_service,
    //     services[i],
    //     "text-psy-blue",
    //     0.49 + (i + 2) / 10,
    //   );
    // }
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

          <ul class="relative mt-12">
            <li v-for="(item, index) in service">
              <div
                class="flex py-4"
                :class="index !== 3 ? 'border-b-2 border-white' : ''"
                :id="item.service_id"
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
            <!-- <i
              class="fa-solid fa-circle fa-xs text-psy-blue absolute -top-2 -left-2"
            ></i>
            <i
              class="fa-solid fa-circle fa-xs text-psy-blue absolute top-[10rem] -left-6"
            ></i>
            <i
              class="fa-solid fa-circle fa-xs text-psy-blue absolute top-[25rem] left-6"
            ></i> -->
          </ul>
        </div>
        <div class="relative basis-1/2 flex items-center">
          <img
            src="./../assets/images/my_service.png"
            alt="PsychoPy experiment showing my service"
            class="relative rounded-[15px] p-0 sm:p-6 md:p-12 xl:p-0 z-10 disable-blur"
          />

          <img
            src="./../assets/images/decorations/decorations_wide_circle.png"
            alt="wide circle decoration"
            class="absolute top-[-25%] sm:top-[-5%] lg:top-[-10%] xl:top-[0%] -right-12 lg:-right-36 w-[10rem] md:w-[15rem] lg:w-[20rem] duration-1000 scale-0"
            id="my_service_circle"
          />
        </div>
      </div>
    </div>
  </section>
</template>
