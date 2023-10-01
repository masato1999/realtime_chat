<template>
  <div class="Login">
    <h1 class="Login__PageTitle">ログインページ</h1>
    <FormButton class="Login__Button" @click="login"> ログイン </FormButton>
    <!-- <div v-if="state.user" class="Login__Content">
      <img :src="state.user.photoURL" alt="User profile picture" />
      <p>state.user.displayName</p>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync, useContext } from "@nuxtjs/composition-api";
import { useSession } from "@/composable/useSession";
import FormButton from "@/components/atoms/FormButton/main.vue";

export default defineComponent({
  components: {
    FormButton,
  },
  setup() {
    const { state, isLogin, login } = useSession();
    const { req } = useContext();

    // ここって非同期にする必要ある？
    useAsync(async () => {
      isLogin(req);
    });

    return {
      state,
      login,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
