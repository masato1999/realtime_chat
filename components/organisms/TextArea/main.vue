<template>
  <div class="TextArea">
    <textarea class="TextArea__InputArea" :value="value" @input="updateValue">
    </textarea>
    <FormButton class="TextArea__Button" @click="onSendMessage"
      >送信</FormButton
    >
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  reactive,
  computed,
} from "@nuxtjs/composition-api";
import FormButton from "@/components/atoms/FormButton/main.vue";

export default defineComponent({
  components: {
    FormButton,
  },
  props: {
    value: {
      default: "",
      type: String,
    },
  },
  emits: ["input"],
  setup(props, context: SetupContext) {
    const value = computed(() => props.value);
    const state = reactive({
      searchKeyword: "",
    });

    const updateValue = (event: any) => {
      console.log("FormInput: updateValue");
      context.emit("input", event.target.value);
    };

    const onSendMessage = () => {
      console.log("TextArea: onSendMessage");
    };

    return {
      state,
      value,
      updateValue,
      onSendMessage,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
