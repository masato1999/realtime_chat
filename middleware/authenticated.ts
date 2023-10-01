import { Middleware } from '@nuxt/types';
import { auth } from '@/plugins/firebase';
import Cookies from 'js-cookie';

const authenticated: Middleware = ({ redirect }) => {
  const cookieValue = Cookies.get('access_token');
  console.log("cookieValue", cookieValue);

  // if (!cookieValue) {
  //   console.log("cookieValue", cookieValue);
  //   return redirect('/login');
  // }

  if (!auth.currentUser && !cookieValue) {
    return redirect('/login');
  }
};

export default authenticated;
