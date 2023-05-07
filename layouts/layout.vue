<template>
  <div class="Layout">
    <Header class="Layout__Header" />
    <div class="Layout__Container">
      <Sidebar class="Layout__Sidebar" />
      <nuxt class="Layout__Main" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Header from "@/components/organisms/Header/main.vue";
import Sidebar from "@/components/organisms/Sidebar/main.vue";

export default defineComponent({
  components: {
    Header,
    Sidebar,
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
