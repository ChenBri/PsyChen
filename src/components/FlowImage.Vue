<script>
export default {
  props: {
    image: String,
    isOpen: Boolean,
  },
  emits: ["toggleImage"],
};
</script>

<template>
  <!-- <div
    class="fixed top-0 left-0 px-8 md:px-24 translate-x-[calc(50vw_-_50%)] translate-y-[calc(50vh_-_50%)]"
  >
    <div
      @click="$emit('toggleImage')"
      class="absolute top-4 right-6 text-red-500 text-2xl"
    >
      <i class="fa-solid fa-x"></i>
    </div>
    <img :src="image" />
  </div> -->
  <div class="absolute w-32 h-32 text-white bg-white">Modal..</div>
</template>
