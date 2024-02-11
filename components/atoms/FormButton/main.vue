<template>
  <button
    class="FormButton"
    :class="{
      'FormButton--Small': size === 'small',
      'FormButton--Medium': size === 'medium',
      'FormButton--Large': size === 'large',
      'FormButton--DarkBlue': color === 'darkBlue',
      'FormButton--White': color === 'white',
    }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, SetupContext } from "@nuxtjs/composition-api";

type Size = "small" | "medium" | "large";
type Color = "darkBlue" | "white";

export default defineComponent({
  props: {
    size: {
      default: "small",
      type: String as PropType<Size>,
    },
    color: {
      default: "darkBlue",
      type: String as PropType<Color>,
    },
  },
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
