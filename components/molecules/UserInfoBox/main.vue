<template>
  <div class="UserInfoBox">
    <img class="UserInfoBox__Icon" />
    <div class="UserInfoBox__Info">
      <div class="UserInfoBox__Name">{{ UserInfoBoxName }}</div>
      <div class="UserInfoBox__Status">
        <span
          class="UserInfoBox__StatusIcon"
          :class="{ 'UserInfoBox__StatusIcon--Green': isOnline }"
        >
          ●
        </span>
        <p>{{ userStatus }}</p>
      </div>
    </div>
    <div class="UserInfoBox__Time">{{ shapingTime }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import moment from 'moment'

export default defineComponent({
  props: {
    isOnline: {
      default: false,
      type: Boolean,
    },
    time: {
      default: false,
      type: Date,
    },
  },
  setup(props) {
    const userStatus = computed(() =>
      props.isOnline ? 'オンライン' : 'オフライン'
    )
    const shapingTime = computed(() =>
      moment(props.time).format('MM/DD h:mm:ss')
    )

    return {
      userStatus,
      shapingTime,
    }
  },
})
</script>

<style lang="scss" scoped>
@import './style';
</style>