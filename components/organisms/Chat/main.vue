<template>
  <div class="Chat">
    <div class="Chat__Header">
      <UserInfoBox
        :name="userInfo.name"
        :isOnline="userInfo.isOnline"
        :time="userInfo.time"
        :offChat="true"
      />
    </div>
    <p class="Chat__UnderLine"></p>
    <CardList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import UserInfoBox from '@/components/molecules/UserInfoBox/main.vue'
import CardList from '@/components/organisms/CardList/main.vue'

export default defineComponent({
  components: {
    CardList,
    UserInfoBox,
  },
  setup() {
    const userInfo = {
      name: 'テスト太郎',
      isOnline: true,
      time: new Date(),
    }

    return {
      userInfo,
    }
  },
})
</script>

<style lang="scss" scoped>
@import './style';
</style>
