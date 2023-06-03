<template>
  <ChatField />
</template>

<script lang="ts">
import { defineComponent, provide } from "@nuxtjs/composition-api";
import { UserInfo } from "./types";
import { userInfoKey, messageListKey } from "./store";
import { database } from "@/plugins/firebase";
import { push, onValue } from "@firebase/database";
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

    push(database, "データを送ります")
      .then((response) => {
        console.log("Index: postChat OK", response);
      })
      .catch((error) => {
        console.error("Index: postChat NG", error);
      });

    provide(userInfoKey, userInfo);
    provide(messageListKey, messageList);
  },
});
</script>
