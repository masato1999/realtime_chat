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
import { useSession } from "@/composable/useSession";
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
    const { signOut, updateUserInfo, updateIsLoggedIn } = useSession();
    const router = useRouter();

    const logout = async () => {
      await signOut();
      router.push("/login");

      updateUserInfo(null);
      updateIsLoggedIn(false);
    };

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
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
