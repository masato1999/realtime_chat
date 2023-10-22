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
import { defineComponent, useRouter } from "@nuxtjs/composition-api";
import { useSession } from "@/composable/useSession";
import FormButton from "@/components/atoms/FormButton/main.vue";

export default defineComponent({
  components: {
    FormButton,
  },
  setup() {
    const { state, signIn } = useSession();
    const router = useRouter();

    const login = async () => {
      await signIn();
      console.log("signIn終わり");
      router.push("/chat");
    };

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
