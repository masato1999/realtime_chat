<template>
  <input :type="type" :value="value" @input="updateValue" class="FormInput" />
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  PropType,
  computed,
} from "@nuxtjs/composition-api";
import { Type } from "./types";

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
  },
  emits: ["input"],
  setup(props, context: SetupContext) {
    const value = computed(() => props.value);

    const updateValue = (event: any) => {
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
