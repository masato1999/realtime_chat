<template>
  <div>テストページです</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  layout: 'ore',
  setup() {
    console.log('test: index.vue')
  },
})
</script>
