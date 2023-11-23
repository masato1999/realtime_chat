import { reactive } from '@nuxtjs/composition-api';
import { auth } from "@/plugins/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";

type State = {
  userInfo: any;
  isLoggedIn: boolean;
};

export const useSession = () => {
  const provider = new GoogleAuthProvider();
  const state = reactive<State>({
    userInfo: null,
    isLoggedIn: false
  });

  const updateUserInfo = (userInfo: any) => {
    console.log("useSession: updateUserInfo");
    state.userInfo = userInfo;
  }

  const updateIsLoggedIn = (isLoggedIn: boolean) => {
    console.log("useSession: updateIsLoggedIn");
    state.isLoggedIn = isLoggedIn;
  }

  const signIn = async () => {
    try {
      console.log("useSession: signIn");
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google authentication failed:", error);
    }
  };

  const signOut = async () => {
    try {
      console.log("useSession: signOut");
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("signOut failed:", error);
    }
  };

  return { state, updateUserInfo, updateIsLoggedIn, signIn, signOut };
}
