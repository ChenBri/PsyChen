<script>
import { scrollToId } from "../scripts/scrollFunction";

export default {
  methods: {
    scrollToId,
  },
};
</script>

<template>
  <footer class="bg-psy-blue">
    <div class="flex justify-between px-4 md:px-12 py-2 items-center">
      <p class="text-[12px] md:text-[14px]">
        © 2023 Chen Brilling. All Rights Reserved.
      </p>
      <a @click="scrollToId(`navbar`)"
        ><img src="./../assets/images/logo_horizontal.png" class="w-32"
      /></a>
    </div>
  </footer>
</template>
