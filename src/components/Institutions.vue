<script>
export default {
  data() {
    return {
      imagesList: [
        {
          name: "Bar-Ilan University",
          path: "dynamic-images/inst-biu.png",
        },
        {
          name: "Doha Institute for Graduate Studies",
          path: "dynamic-images/inst-doha.png",
        },
        {
          name: "University of Nottingham",
          path: "dynamic-images/inst-uon.png",
        },
        {
          name: "University of Cambridge",
          path: "dynamic-images/inst-camb.png",
        },
        {
          name: "Reichman University",
          path: "dynamic-images/inst-ru.png",
        },
        {
          name: "George Mason University",
          path: "dynamic-images/inst-ma.png",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="bg-psy-bg-dark relative pt-6 pb-4">
    <div class="content">
      <h2 class="text-white text-2xl">Institutions I have been working with</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mx-12">
        <div v-for="image in imagesList">
          <img :src="image.path" :alt="image.name" class="px-8 pt-8 pb-4" />
          <div class="text-center text-white font-roboto">{{ image.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
