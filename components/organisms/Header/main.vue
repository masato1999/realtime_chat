<template>
  <div class="Header">
    <FormButton>検索</FormButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import FormButton from "@/components/atoms/FormButton/main.vue";

export default defineComponent({
  components: {
    FormButton,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
