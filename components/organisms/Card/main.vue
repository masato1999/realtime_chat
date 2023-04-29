<template>
  <div class="Card">
    <div class="Card__UserInfoBox">
      <UserInfoBox />
    </div>
    <dir class="Card__Text">
      {{ messageDetail }}
    </dir>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import UserInfoBox from '@/components/molecules/UserInfoBox/main.vue'

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
    const messageDetail = computed(() => props.message)

    return {
      messageDetail,
    }
  },
})
</script>

<style lang="scss" scoped>
@import './style';
</style>
