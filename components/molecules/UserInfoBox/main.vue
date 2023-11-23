<template>
  <div class="UserInfoBox">
    <img src="@/assets/img/user.png" class="UserInfoBox__Icon" />
    <div class="UserInfoBox__Info">
      <div class="UserInfoBox__Name">{{ name }}</div>
      <div class="UserInfoBox__Status">
        <span
          class="UserInfoBox__StatusIcon"
          :class="{ 'UserInfoBox__StatusIcon--Green': isOnline }"
        >
          ●
        </span>
        <p class="UserInfoBox__StatusMessage">{{ userStatus }}</p>
      </div>
    </div>
    <div v-if="dateTime !== ''" class="UserInfoBox__Time">
      {{ dateTime }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    name: {
      default: "",
      type: String,
    },
    isOnline: {
      default: false,
      type: Boolean,
    },
    dateTime: {
      default: "",
      type: [Date, String],
    },
  },
  setup(props) {
    const userStatus = computed(() => (props.isOnline ? "オンライン" : "オフライン"));

    return {
      userStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
