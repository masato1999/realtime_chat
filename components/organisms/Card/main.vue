<template>
  <div class="Card">
    <div class="Card__UserInfoBox">
      <UserInfoBox
        :name="userInfo.name"
        :isOnline="userInfo.isOnline"
        :time="userInfo.time"
      />
    </div>
    <dir class="Card__Text">
      {{ messageDetail }}
    </dir>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
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

    const userInfo = {
      name: "テスト太郎",
      isOnline: true,
      time: new Date(),
    };

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
