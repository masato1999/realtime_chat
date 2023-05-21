<template>
  <ChatField />
</template>

<script lang="ts">
import { defineComponent, provide } from "@nuxtjs/composition-api";
import { UserInfo } from "./types";
import { userInfoKey, messageListKey } from "./store";
import ChatField from "@/components/organisms/ChatField/main.vue";

export default defineComponent({
  layout: "layout",
  components: {
    ChatField,
  },
  setup() {
    const userInfo: UserInfo = {
      name: "テスト太郎",
      isOnline: true,
      dateTime: new Date(),
    };
    const messageList: string[] = [
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
      "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。",
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
