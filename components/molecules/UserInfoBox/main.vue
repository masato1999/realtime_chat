<template>
  <div class="UserInfoBox">
    <img src="@/assets/img/carrot.png" class="UserInfoBox__Icon" />
    <div class="UserInfoBox__Info">
      <div class="UserInfoBox__Name">{{ userInfoBoxName }}</div>
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
    <div
      class="UserInfoBox__Time"
      :class="{ 'UserInfoBox__Time--hidden': isDate }"
    >
      {{ shapingTime }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import moment from "moment";

export default defineComponent({
  props: {
    name: {
      default: false,
      type: String,
    },
    isOnline: {
      default: false,
      type: Boolean,
    },
    time: {
      default: false,
      type: Date,
    },
    isDate: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    const userInfoBoxName = computed(() => props.name);
    const userStatus = computed(() =>
      props.isOnline ? "オンライン" : "オフライン",
    );
    const shapingTime = computed(() =>
      moment(props.time).format("MM/DD h:mm:ss"),
    );

    return {
      userInfoBoxName,
      userStatus,
      shapingTime,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
