<template>
  <div class="FormButton">
    <button class="FormButton__Container" @click="onClick">
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@nuxtjs/composition-api";

export default defineComponent({
  setup(_, context: SetupContext) {
    const onClick = () => {
      console.log("FormButton: onClick");
      context.emit("click");
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
