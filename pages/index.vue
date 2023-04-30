<template>
  <ChatField />
</template>

<script lang="ts">
import { provide } from "vue";
import { UserInfo, userInfoKey } from "./store";
import { defineComponent } from "@vue/composition-api";
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

    provide(userInfoKey, userInfo);
  },
});
</script>

<style lang="scss">
.body {
  height: 100vh;
  margin: 0;
}
</style>