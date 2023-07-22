<template>
  <div class="ChatField">
    <div class="ChatField__Header">
      <div class="ChatField__UserInfoBox">
        <UserInfoBox :name="state.userInfo.name" :isOnline="state.userInfo.isOnline" />
      </div>
      <span class="ChatField__UnderLine" />
    </div>
    <CardList class="ChatField__CardList" />
    <TextareaWithButton class="ChatField__TextareaWithButton" @updateValue="handleClick($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, nextTick } from "@nuxtjs/composition-api";
import { chatKey } from "@/pages/store";
import CardList from "@/components/organisms/CardList/main.vue";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";
import TextareaWithButton from "@/components/molecules/TextareaWithButton/main.vue";

export default defineComponent({
  components: {
    CardList,
    UserInfoBox,
    TextareaWithButton,
  },
  setup() {
    onMounted(async () => {
      console.log("ChatField: onMounted");

      fetchChatList();
    });

    const store = inject(chatKey);

    if (!store) {
      throw new Error("test");
    }

    const { state, fetchChatList, updateChatList } = store;

    const handleClick = async ($event: string) => {
      console.log("ChatField: handleClick");
      updateChatList($event);

      await nextTick();

      const contentContainer = document.getElementById("scrollToBottom");
      contentContainer?.scrollIntoView({
        behavior: "smooth",
      });
    };

    return {
      state,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
