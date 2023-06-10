<template>
  <div class="CardItem">
    <div class="CardItem__UserInfoBox">
      <UserInfoBox
        :name="state.userInfo.name"
        :isOnline="state.userInfo.isOnline"
        :dateTime="state.userInfo.dateTime"
      />
    </div>
    <p class="CardItem__Text">
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@nuxtjs/composition-api";
import { chatKey } from "@/pages/store";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";

export default defineComponent({
  components: {
    UserInfoBox,
  },
  props: {
    message: {
      default: "",
      type: String,
    },
  },
  setup() {
    const store = inject(chatKey);

    if (!store) {
      throw new Error("CardItem_store is undefined");
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
