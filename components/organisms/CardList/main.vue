<template>
  <div class="CardList">
    <CardItem
      v-for="(message, key) in state.messageList"
      :key="key"
      :message="message.message"
      :dateTime="message.dateTime"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@nuxtjs/composition-api";
import { chatKey } from "@/pages/store";
import CardItem from "@/components/organisms/CardItem/main.vue";

export default defineComponent({
  components: {
    CardItem,
  },
  setup() {
    const store = inject(chatKey);

    if (!store) {
      throw new Error("CardList_store is undefined");
    }

    const { state, fetchChatList } = store;

    fetchChatList();

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
