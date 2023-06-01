<template>
  <div class="ChatField">
    <div class="ChatField__Header">
      <div class="ChatField__UserInfoBox">
        <UserInfoBox :name="userInfo.name" :isOnline="userInfo.isOnline" />
      </div>
      <span class="ChatField__UnderLine" />
    </div>
    <CardList class="ChatField__CardList" />
    <TextareaWithButton class="ChatField__TextareaWithButton" @updateValue="post($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from "@nuxtjs/composition-api";
import { userInfoKey } from "@/pages/store";
import { State } from "./types";
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
    const userInfo = inject(userInfoKey);

    const state = reactive<State>({
      message: "",
    });

    const post = ($event: string) => {
      console.log("ChatField: post");
      state.message = $event;
    };

    return {
      userInfo,
      state,
      post,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
