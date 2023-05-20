<template>
  <div class="ChatField">
    <div class="ChatField__Header">
      <UserInfoBox :name="userInfo.name" :isOnline="userInfo.isOnline" />
    </div>
    <span class="ChatField__UnderLine" />
    <CardList />
    <TextareaWithButton class="ChatField__Textarea" @updateValue="state.message = $event" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from "@nuxtjs/composition-api";
import { userInfoKey } from "@/pages/store";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";
import CardList from "@/components/organisms/CardList/main.vue";
import TextareaWithButton from "@/components/molecules/TextareaWithButton/main.vue";

export default defineComponent({
  components: {
    CardList,
    UserInfoBox,
    TextareaWithButton,
  },
  setup() {
    const userInfo = inject(userInfoKey);

    const state = reactive<any>({
      message: "",
    });

    return {
      userInfo,
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
