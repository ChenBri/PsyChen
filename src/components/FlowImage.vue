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
  <div @click="$emit('toggleImage')">
    <img class="center-absolute" :src="image" alt="Flow image" />
  </div>
</template>

<style scoped>
.center-absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
  /* width: 90%;
  max-width: 1000px; */
}
</style>
