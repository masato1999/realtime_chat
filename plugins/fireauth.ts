import { auth } from './firebase';
import Cookies from 'js-cookie';

export default (): Promise<void> => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user && auth.currentUser !== null) {
        auth.currentUser.getIdToken(true)
          .then((token: string) => {
            Cookies.set('access_token', token);
          })
          .catch((error: any) => {
            console.error("Error getting token:", error);
            reject(error);
          });
      } else {
        Cookies.remove('access_token');
      }
      return resolve();
    });
  });
}
