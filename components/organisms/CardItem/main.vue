<template>
  <div class="CardItem">
    <div class="CardItem__UserInfoBox">
      <UserInfoBox
        :name="userInfo.name"
        :isOnline="userInfo.isOnline"
        :dateTime="userInfo.dateTime"
      />
    </div>
    <dir class="CardItem__Text">
      {{ props.message }}
    </dir>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@nuxtjs/composition-api";
import { userInfoKey } from "@/pages/store";
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
  setup(props) {
    const userInfo = inject(userInfoKey);

    return {
      props,
      userInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
