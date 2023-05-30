<template>
  <div class="Header">
    <FormInput
      class="Header__FormInput"
      :value="state.searchKeyword"
      @input="state.searchKeyword = $event"
    />
    <FormButton @click="onSearch">{{ buttonName }}</FormButton>
    <img class="Header__Icon" src="@/assets/img/whiteUser.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import FormButton from "@/components/atoms/FormButton/main.vue";
import FormInput from "@/components/atoms/FormInput/main.vue";

export default defineComponent({
  components: {
    FormButton,
    FormInput,
  },
  props: {
    buttonName: {
      default: "検索",
      type: String,
    },
  },
  setup() {
    const state = reactive({
      searchKeyword: "",
    });

    const onSearch = () => {
      console.log("Header: onSearch");
      state.searchKeyword = "";
    };

    return {
      state,
      onSearch,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
