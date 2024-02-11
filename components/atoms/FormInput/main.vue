<template>
  <input
    :type="type"
    :value="value"
    @input="updateValue"
    class="FormInput"
    :class="{
      'FormInput--Small': size === 'small',
      'FormInput--Large': size === 'large',
      'FormInput--Gray': color === 'gray',
      'FormInput--White': color === 'white',
    }"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent, SetupContext, PropType, computed } from "@nuxtjs/composition-api";

type Type = "text" | "number";
type Size = "small" | "large";
type Color = "gray" | "white";

export default defineComponent({
  props: {
    type: {
      default: "text",
      type: String as PropType<Type>,
    },
    value: {
      default: "",
      type: String,
    },
    size: {
      default: "small",
      type: String as PropType<Size>,
    },
    color: {
      default: "gray",
      type: String as PropType<Color>,
    },
    placeholder: {
      default: "",
      type: String,
    },
  },
  emits: ["input"],
  setup(props, context: SetupContext) {
    const value = computed(() => props.value);

    const updateValue = (event: { target: HTMLButtonElement }) => {
      console.log("FormInput: updateValue");
      context.emit("input", event.target.value);
    };

    return {
      value,
      updateValue,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
