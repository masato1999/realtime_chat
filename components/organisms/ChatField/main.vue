<template>
  <div class="ChatField">
    <div class="ChatField__Header">
      <UserInfoBox :name="userInfo.name" :isOnline="userInfo.isOnline" />
    </div>
    <span class="ChatField__UnderLine" />
    <CardList />
    <TextArea class="ChatField__TextArea" />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@nuxtjs/composition-api";
import { userInfoKey } from "@/pages/store";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";
import CardList from "@/components/organisms/CardList/main.vue";
import TextArea from "@/components/organisms/TextArea/main.vue";

export default defineComponent({
  components: {
    CardList,
    UserInfoBox,
    TextArea,
  },
  setup() {
    const userInfo = inject(userInfoKey);

    return {
      userInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
