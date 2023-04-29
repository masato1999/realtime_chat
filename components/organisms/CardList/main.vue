<template>
  <Card class="CardList" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/organisms/Card/main.vue'

export default defineComponent({
  components: {
    Card,
  },
})
</script>

<style lang="scss" scoped>
@import './style';
</style>
