import { Middleware } from "@nuxt/types";
import { auth } from "@/plugins/firebase";

const authenticated: Middleware = ({ req, redirect }) => {
  console.log("authenticated: authenticated");

  // MEMO: SSR時のみ実行する
  if (process.server) {
    console.log("process.server", process.server);
    const cookieString = req.headers.cookie || "";
    const matches = cookieString.match(/access_token=([^;]+)/);
    const accessToken = matches ? decodeURIComponent(matches[1]) : null;

    if (accessToken === null) {
      return redirect("/login");
    }
  }
  else {
    if (!auth.currentUser) {
      return redirect("/login");
    }
  }
};

export default authenticated;