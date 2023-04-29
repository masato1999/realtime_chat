<template>
  <CardList />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CardList from '@/components/organisms/CardList/main.vue'

export default defineComponent({
  layout: 'layout',
  components: {
    CardList,
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
