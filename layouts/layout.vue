<template>
  <div class="Layout">
    <Header class="Layout__Header" />
    <Sidebar class="Layout__Sidebar" />
    <nuxt class="Layout__Main" />
  </div>
</template>

<style lang="scss" scoped>
@import './style';
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Header from '@/components/organisms/Header/main.vue'
import Sidebar from '@/components/organisms/Sidebar/main.vue'

export default defineComponent({
  components: {
    Header,
    Sidebar,
  },
})
</script>