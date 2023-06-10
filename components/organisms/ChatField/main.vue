<template>
  <div class="ChatField">
    <div class="ChatField__Header">
      <div class="ChatField__UserInfoBox">
        <UserInfoBox :name="state.userInfo.name" :isOnline="state.userInfo.isOnline" />
      </div>
      <span class="ChatField__UnderLine" />
    </div>
    <CardList class="ChatField__CardList" />
    <TextareaWithButton class="ChatField__TextareaWithButton" @updateValue="post($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@nuxtjs/composition-api";
import { chatKey } from "@/pages/store";
import CardList from "@/components/organisms/CardList/main.vue";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";
import TextareaWithButton from "@/components/molecules/TextareaWithButton/main.vue";
import { getDatabase, ref, push } from "@firebase/database";
import { firebase } from "@/plugins/firebase";

export default defineComponent({
  components: {
    CardList,
    UserInfoBox,
    TextareaWithButton,
  },
  setup() {
    const store = inject(chatKey);

    if (!store) {
      throw new Error("test");
    }

    const { state, fetchChatList } = store;

    fetchChatList();

    console.log("ChatField: state", state);

    const post = ($event: string) => {
      console.log("ChatField: post");

      const db = getDatabase(firebase);
      push(ref(db, "chat/MessageList"), $event);
    };

    return {
      state,
      post,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
