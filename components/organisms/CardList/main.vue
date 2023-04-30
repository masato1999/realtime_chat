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
import { defineComponent, inject } from "@nuxtjs/composition-api";
import { messageListKey } from "@/pages/store";
import CardItem from "@/components/organisms/CardItem/main.vue";

export default defineComponent({
  components: {
    CardItem,
  },
  setup() {
    const messageList = inject(messageListKey);

    return {
      messageList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
