<template>
  <ChatField />
</template>

<script lang="ts">
import { defineComponent, provide } from "@nuxtjs/composition-api";
import { UserInfo, userInfoKey, messageListKey } from "./store";
import ChatField from "@/components/organisms/ChatField/main.vue";

export default defineComponent({
  layout: "layout",
  components: {
    ChatField,
  },
  setup() {
    console.log("index.vue");

    const userInfo: UserInfo = {
      name: "テスト太郎",
      isOnline: true,
      time: new Date(),
    };
    const messageList: string[] = [
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
    ];

    provide(userInfoKey, userInfo);
    provide(messageListKey, messageList);
  },
});
</script>

<style lang="scss">
.body {
  height: 100vh;
  margin: 0;
}
</style>
