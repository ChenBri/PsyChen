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
    <img class="absolute top-24 z-20" :src="image" />
  </div>
</template>
