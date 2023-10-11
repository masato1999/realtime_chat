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
            @click="googleLogin"
          >
            Googleでログイン
            <img src="@/assets/img/Google.png" class="Login__GoogleLoginImg" />
          </FormButton>
          <p>または</p>
          <FormInput
            class="Login__FormInput"
            :value="state.mail"
            :size="'large'"
            :color="'white'"
            :placeholder="'メール'"
            @input="state.mail = $event"
          />
          <FormInput
            class="Login__FormInput"
            :value="state.password"
            :size="'large'"
            :color="'white'"
            :placeholder="'パスワード'"
            @input="state.password = $event"
          />
          <FormButton class="Login__MailLogin" :size="'large'" @click="MailLogin"
            >ログイン</FormButton
          >
          <span class="Login__UnderLine" />
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
import { defineComponent, useAsync, useContext, reactive } from "@nuxtjs/composition-api";
import { useSession } from "@/composable/useSession";
import FormButton from "@/components/atoms/FormButton/main.vue";
import FormInput from "@/components/atoms/FormInput/main.vue";

export default defineComponent({
  components: {
    FormButton,
    FormInput,
  },
  setup() {
    const { isLogin, googleLogin } = useSession();
    const { req } = useContext();
    const state = reactive({
      mail: "",
      password: "",
    });

    // ここって非同期にする必要ある？
    useAsync(async () => {
      isLogin(req);
    });

    const MailLogin = () => {
      console.log("Login: MailLogin");
    };

    const RegisterMember = () => {
      console.log("Login: RegisterMember");
    };

    return {
      state,
      googleLogin,
      MailLogin,
      RegisterMember,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./style";
</style>
