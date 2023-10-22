<template>
  <ChatField />
</template>

<script lang="ts">
import { defineComponent, provide } from "@nuxtjs/composition-api";
import { chatKey, chat } from "./store";
import ChatField from "@/components/organisms/ChatField/main.vue";

export default defineComponent({
  layout: "layout",
  components: {
    ChatField,
  },
  setup() {
    provide(chatKey, chat);
  },
});
</script>
