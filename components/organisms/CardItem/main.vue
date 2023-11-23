<template>
  <div class="CardItem">
    <div class="CardItem__UserInfoBox">
      <slot />
    </div>
    <p class="CardItem__Text">
      {{ message }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@nuxtjs/composition-api";
import { chatKey } from "@/pages/chat/store";
import { ensureDefined } from "@/utils/errors/ensureDefined";
import UserInfoBox from "@/components/molecules/UserInfoBox/main.vue";

export default defineComponent({
  components: {
    UserInfoBox,
  },
  props: {
    message: {
      default: "",
      type: String,
    },
  },
  setup() {
    const { state } = ensureDefined(inject(chatKey));

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
