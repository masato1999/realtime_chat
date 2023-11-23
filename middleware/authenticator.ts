import { Middleware } from "@nuxt/types";
import { useSession } from "@/composable/useSession";
import { getUserFromCookie } from '@/plugins/cookies';

const authenticator: Middleware = ({ req, redirect }) => {
  console.log("authenticator");
  const { updateUserInfo, updateIsLoggedIn } = useSession();

  // MEMO: SSR時のみ実行する
  if (process.server) {
    const cookieString = req.headers.cookie || "";
    const matches = cookieString.match(/access_token=([^;]+)/);
    const accessToken = matches ? decodeURIComponent(matches[1]) : null;
    const userInfo = getUserFromCookie(req);

    updateUserInfo(userInfo);
    updateIsLoggedIn(!!accessToken);

    if (!accessToken) {
      return redirect("/login");
    }
  }
};

export default authenticator;
