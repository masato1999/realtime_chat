<template>
  <Card />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/organisms/Card/main.vue'

export default defineComponent({
  layout: 'layout',
  components: {
    Card,
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
