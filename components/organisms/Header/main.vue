<template>
  <div class="Header">
    <FormButton class="Header__LogoutButton" size="medium" @click="logout">ログアウト</FormButton>
    <div class="Header__FormMass">
      <FormInput
        class="Header__FormInput"
        :value="state.searchKeyword"
        @input="state.searchKeyword = $event"
      />
      <FormButton @click="onSearch">{{ buttonName }}</FormButton>
      <img class="Header__Icon" src="@/assets/img/whiteUser.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useRouter } from "@nuxtjs/composition-api";
import { signOut } from "firebase/auth";
import { auth } from "@/plugins/firebase";
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
    const router = useRouter();

    const state = reactive({
      searchKeyword: "",
    });

    const onSearch = () => {
      console.log("Header: onSearch");
      state.searchKeyword = "";
    };

    const logout = async () => {
      try {
        await signOut(auth);
        router.push("/login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    return {
      state,
      onSearch,
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
