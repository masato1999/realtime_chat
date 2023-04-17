<template>
  <div class="Card">
    <UserInfoBox />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import UserInfoBox from '@/components/molecules/UserInfoBox/main.vue'

export default defineComponent({
  components: {
    UserInfoBox,
  },
})
</script>

<style lang="scss" scoped>
@import './style';
</style>
