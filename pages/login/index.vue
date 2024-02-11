<template>
  <div class="Login">
    <div class="Login__Header">
      <img class="Login__Logo" src="@/assets/img/Logo.png" />
      <span class="Login__UnderLine" />
    </div>
    <div class="Login__Container">
      <div class="Login__ContainerLayout">
        <h1 class="Login__Title">ログイン</h1>
        <div class="Login__Signin">
          <FormButton
            class="Login__GoogleLoginButton"
            :size="'large'"
            :color="'white'"
            @click="GoogleLogin"
          >
            Googleでログイン
            <img src="@/assets/img/Google.png" class="Login__GoogleLoginImg" />
          </FormButton>
        </div>
        <div class="Login__Signup">
          <p>アカウントをお持ちでない方</p>
          <FormButton
            class="Login__RegisterMember"
            :size="'large'"
            :color="'white'"
            @click="RegisterMember"
            >会員登録</FormButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useRouter } from "@nuxtjs/composition-api";
import { useSession } from "@/composable/useSession";
import FormButton from "@/components/atoms/FormButton/main.vue";

export default defineComponent({
  components: {
    FormButton,
  },
  setup() {
    const { state, signIn } = useSession();
    const router = useRouter();
    const mailLoginInfo = reactive({
      mail: "",
      password: "",
    });

    const GoogleLogin = async () => {
      console.log("pages: GoogleLogin");
      await signIn();
      router.push("/chat");
    };

    const RegisterMember = () => {
      console.log("Login: RegisterMember");
    };

    return {
      state,
      mailLoginInfo,
      GoogleLogin,
      RegisterMember,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
