<script>
export default {
  data() {
    return {
      imagesList: [
        {
          name: "Bar-Ilan University",
          path: "dynamic-images/inst-biu.png",
          link: "",
        },
        {
          name: "Doha Institute for Graduate Studies",
          path: "dynamic-images/inst-doha.png",
          link: "",
        },
        {
          name: "University of Nottingham",
          path: "dynamic-images/inst-uon.png",
          link: "",
        },
        {
          name: "University of Cambridge",
          path: "dynamic-images/inst-camb.png",
          link: "",
        },
        {
          name: "Reichman University",
          path: "dynamic-images/inst-ru.png",
          link: "",
        },
        {
          name: "George Mason University",
          path: "dynamic-images/inst-ma.png",
          link: "",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="bg-psy-bg-dark relative pt-6 pb-2">
    <div class="content">
      <h2 class="text-white text-2xl text-center mb-[0.75em] font-normal">
        Institutions I have been working with:
      </h2>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mx-12 mb-6 bg-[#0f1d4a] rounded-xl border-2 border-white border-opacity-70 p-2"
      >
        <div v-for="image in imagesList">
          <img
            :src="image.path"
            :alt="image.name"
            :title="image.name"
            class="p-2 w-28 h-28 mx-auto"
          />
          <div class="flex items-center justify-center">
            <div
              class="text-center text-white font-roboto w-4/5 text-sm md:text-base"
            >
              {{ image.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
