<template>
  <div class="CardList">
    <CardItem
      v-for="(message, key) in state.messageList"
      :key="key"
      :message="message.message"
      :dateTime="message.dateTime"
      :id="key === state.messageList.length - 1 ? 'scrollToBottom' : ''"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, nextTick } from "@nuxtjs/composition-api";
import { chatKey } from "@/pages/store";
import CardItem from "@/components/organisms/CardItem/main.vue";

export default defineComponent({
  components: {
    CardItem,
  },
  setup() {
    onMounted(async () => {
      console.log("CardList: onMounted");
      await nextTick();

      nextTick(() => {
        console.log("CardList: onMounted nextTick");
        const contentContainer = document.getElementById("scrollToBottom");
        contentContainer?.scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    const store = inject(chatKey);

    if (!store) {
      throw new Error("CardList_store is undefined");
    }

    const { state } = store;

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
