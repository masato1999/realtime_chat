<template>
  <div class="CardItem">
    <div class="CardItem__UserInfoBox">
      <UserInfoBox
        :name="userInfo.name"
        :isOnline="userInfo.isOnline"
        :time="userInfo.time"
      />
    </div>
    <dir class="CardItem__Text">
      {{ messageDetail }}
    </dir>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from "vue";
import { userInfoKey } from "@/pages/store";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";

export default defineComponent({
  components: {
    UserInfoBox,
  },
  props: {
    message: {
      default: false,
      type: String,
    },
  },
  setup(props) {
    const messageDetail = computed(() => props.message);

    const userInfo = inject(userInfoKey);

    return {
      messageDetail,
      userInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
