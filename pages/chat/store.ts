import { Store } from './types'
import { reactive, InjectionKey } from "@nuxtjs/composition-api";
import { firebase } from "@/plugins/firebase";
import { getDatabase, ref, push, onValue, set } from "@firebase/database";
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
    }]
  });

  const db = getDatabase(firebase);

  const fetchChatList = async () => {
    console.log("store: fetchChatList");
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

  const updateChatList = (userId: string, message: string) => {
    console.log("store: updateChatList");
    // メッセージリストのリファレンスを取得
    const messageListRef = ref(db, 'message_list');
    // 新しいメッセージのリファレンスを作成
    const newMessageRef = push(messageListRef);

    // データをセット
    set(newMessageRef, {
      id: newMessageRef.key,
      userId: userId,
      message: message,
      dateTime: moment(new Date()).format("MM/DD HH:mm:ss"),
    })
      .then(() => {
        console.log('Message data set.');
        fetchChatList();
      })
      .catch((error) => {
        console.error('Failed to set message data:', error);
      });
  }

  return {
    state,
    fetchChatList,
    updateChatList
  }
})();

type ChatInfo = typeof chat;
export const chatKey: InjectionKey<ChatInfo> = Symbol('chatInfo');
