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
// export default defineComponent({
//   name: 'sample',
//   layout: 'ore',
//   data() {
//     return {
//       header: {
//         title: 'ページタイトル',
//       },
//     }
//   },
// })
</script>
