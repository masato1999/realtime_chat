<template>
  <div class="TextareaWithButton">
    <textarea class="TextareaWithButton__InputArea" v-model="state.value" />
    <div class="TextareaWithButton__ButtonArea">
      <FormButton @click="updateValue">
        {{ buttonName }}
      </FormButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive } from "@nuxtjs/composition-api";
import FormButton from "@/components/atoms/FormButton/main.vue";

type State = {
  value: string;
};

export default defineComponent({
  components: {
    FormButton,
  },
  props: {
    buttonName: {
      default: "送信",
      type: String,
    },
  },
  emits: ["updateValue"],
  setup(_, context: SetupContext) {
    const state = reactive<State>({
      value: "",
    });

    const updateValue = () => {
      console.log("TextareaWithButton: updateValue");
      context.emit("updateValue", state.value);
      state.value = "";
    };

    return {
      state,
      updateValue,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
