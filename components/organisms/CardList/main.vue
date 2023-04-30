<template>
  <div class="CardList">
    <CardItem
      v-for="(massage, key) in messageList"
      :key="key"
      :message="massage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CardItem from "@/components/organisms/CardItem/main.vue";

export default defineComponent({
  components: {
    CardItem,
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
