<template>
  <div class="UserInfoBox">
    <img src="@/assets/img/carrot.png" class="UserInfoBox__Icon" />
    <div class="UserInfoBox__Info">
      <div class="UserInfoBox__Name">{{ props.name }}</div>
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
    <div v-if="shapingTime !== ''" class="UserInfoBox__Time">
      {{ shapingTime }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@nuxtjs/composition-api";
import moment from "moment";

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
    const userStatus = computed(() =>
      props.isOnline ? "オンライン" : "オフライン",
    );

    const shapingTime: string = props.dateTime
      ? moment(props.dateTime).format("MM/DD h:mm:ss")
      : "";

    return {
      props,
      userStatus,
      shapingTime,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
