<template>
  <div class="CardList">
    <Card v-for="(massage, key) in messageList" :key="key" :message="massage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Card from "@/components/organisms/Card/main.vue";

export default defineComponent({
  components: {
    Card,
  },
  setup() {
    const messageList = [
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
    ];

    return {
      messageList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
