<template>
  <div class="CardList">
    <CardItem
      v-for="(messageItem, key) in state.messageList"
      :key="key"
      :message="messageItem.message"
      :id="key === state.messageList.length - 1 ? 'scrollToBottom' : ''"
    >
      <UserInfoBox
        :name="messageItem.user.userName"
        :isOnline="messageItem.user.isLoggedIn"
        :dateTime="messageItem.dateTime"
      />
    </CardItem>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, nextTick } from "@nuxtjs/composition-api";
import { chatKey } from "@/pages/chat/store";
import { ensureDefined } from "@/utils/errors/ensureDefined";
import CardItem from "@/components/organisms/CardItem/main.vue";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";

export default defineComponent({
  components: {
    CardItem,
    UserInfoBox,
  },
  setup() {
    const { state } = ensureDefined(inject(chatKey));

    onMounted(async () => {
      console.log("CardList: onMounted");

      nextTick(() => {
        const contentContainer = document.getElementById("scrollToBottom");
        contentContainer?.scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
