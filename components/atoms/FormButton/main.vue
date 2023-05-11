<template>
  <button
    class="FormButton"
    :class="{
      'FormButton--Small': size === 'small',
      'FormButton--Medium': size === 'medium',
      'FormButton--Large': size === 'large',
    }"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  SetupContext,
} from "@nuxtjs/composition-api";
import { FormButton } from "./types";

export default defineComponent({
  props: {
    size: {
      default: "small",
      type: String as PropType<FormButton>,
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
