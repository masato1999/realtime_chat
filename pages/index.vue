<template>
  <Chat />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Chat from '@/components/organisms/Chat/main.vue'

export default defineComponent({
  layout: 'layout',
  components: {
    Chat,
  },
  setup() {
    console.log('index.vue')
  },
})
</script>

<style lang="scss">
.body {
  height: 100vh;
  margin: 0;
}
</style>