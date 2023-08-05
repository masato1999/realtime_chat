import { Store } from './types'
import { reactive, InjectionKey } from "@nuxtjs/composition-api";
import { firebase } from "@/plugins/firebase";
import { getDatabase, ref, push, onValue } from "@firebase/database";
import moment from "moment";

export const chat = (() => {
  const state = reactive<Store>({
    messageList: [{
      id: 1,
      dateTime: "",
      message: "",
      userId: "",
      user: {
        id: 1,
        imagePath: "",
        isLoggedIn: false,
        loginId: "",
        userName: "",
      },
    }],
    user: {
      id: 1,
      imagePath: "",
      isLoggedIn: false,
      loginId: "",
      userName: "",
    }
  });

  const fetchChatList = async () => {
    console.log("store: fetchChatList");
    const db = getDatabase(firebase);

    const getMessagesWithUser = async () => {
      return new Promise((resolve, reject) => {
        // MEMO: メッセージのPromise配列を作成
        const messagesPromises: any = [];

        // MEMO: メッセージを取得
        onValue(ref(db, 'message_list'), (snapshot) => {
          const messages = snapshot.val();

          // MEMO: メッセージごとにユーザー情報を取得
          for (let key in messages) {
            const message = messages[key];
            const userPromise = new Promise((resolve) => {
              onValue(ref(db, 'users/' + message.userId), (snapshot) => {
                const user = snapshot.val();
                // MEMO: ユーザー情報をメッセージに追加
                message.user = user;
                resolve(message);
              });
            });

            messagesPromises.push(userPromise);
          }

          // MEMO: Promise配列を待つ
          Promise.all(messagesPromises).then(resolve).catch(reject);
        });
      });
    }

    getMessagesWithUser()
      .then((response: any) => {
        state.messageList = response;
      });
  }

  const updateChatList = (message: string) => {
    const params = {
      message: message,
      dateTime: moment(new Date().toString()).format("MM/DD HH:mm:ss"),
    };

    const db = getDatabase(firebase);
    push(ref(db, "realtimeChat/chat/messageList"), params);
  }

  return {
    state,
    fetchChatList,
    updateChatList
  }
})();

type ChatInfo = typeof chat;
export const chatKey: InjectionKey<ChatInfo> = Symbol('chatInfo');
