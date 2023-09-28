import { Middleware } from '@nuxt/types';
import { auth } from '@/plugins/firebase';

const authenticated: Middleware = ({ redirect }) => {
  if (!auth.currentUser) {
    console.log("auth.currentUser", auth.currentUser)
    return redirect('/login');
  }
};

export default authenticated;
