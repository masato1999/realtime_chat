import { useRouter, reactive } from '@nuxtjs/composition-api';
import { auth } from "@/plugins/firebase";
import { getUserFromCookie } from '@/plugins/cookies';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

export const useSession = () => {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const state = reactive<any>({
    user: null,
  });


  const isLogin = async (req: any) => {
    console.log("useSession: isLogin");

    if (process.server) {
      console.log("isLoginData: login", "process.server");
      const user = getUserFromCookie(req);
      if (user) {
        state.user = user;
      }
    } else {
      console.log("isLoginData: login", "process.client");
      const user = auth.currentUser;
      if (user) {
        state.user = user;
        router.push("/chat");
      }
    };
  };

  const googleLogin = async () => {
    try {
      console.log("Google authentication login");
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Google authentication failed:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return { state, isLogin, googleLogin, logout };
}
