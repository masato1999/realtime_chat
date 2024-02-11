import { Store } from "./types";
import { reactive, InjectionKey } from "@nuxtjs/composition-api";
import { firebase } from "@/plugins/firebase";
import { getDatabase, ref, push, onValue, set } from "@firebase/database";
import moment from "moment";

export const chat = (() => {
  const state = reactive<Store>({
    messageList: [
      {
        id: "",
        dateTime: "",
        message: "",
        userId: "",
        user: {
          id: "",
          imagePath: "",
          isLoggedIn: false,
          loginId: "",
          userName: "",
        },
      },
    ],
  });

  const db = getDatabase(firebase);

  const createDatabase = () => {
    const userRef = ref(db, "user");
    const newUser = push(userRef);
    set(newUser, {
      id: newUser.key,
      loginId: "login1",
      userName: "User One",
      imagePath: "path/to/image.jpg",
      isLoggedIn: true,
    })
      .then(() => {
        console.log("User data set.");
      })
      .catch((error) => {
        console.error("Failed to set user data:", error);
      });

    const messageListRef = ref(db, "messageList");
    const newMessage = push(messageListRef);
    set(newMessage, {
      id: newMessage.key,
      userId: newUser.key,
      message: "初期データを入れました！",
      dateTime: moment(new Date()).format("MM/DD HH:mm:ss"),
    })
      .then(() => {
        console.log("Message data set.");
      })
      .catch((error) => {
        console.error("Failed to set message data:", error);
      });
  };

  const fetchChatList = () => {
    console.log("store: fetchChatList");
    onValue(ref(db, "messageList"), (snapshot) => {
      const messages = snapshot.val();
      const updatedMessages: any = [];

      for (let key in messages) {
        const message = messages[key];
        onValue(ref(db, "user/" + message.userId), (userSnapshot) => {
          const user = userSnapshot.val();
          // ユーザー情報をメッセージに追加
          message.user = user;
          updatedMessages.push(message);
        });
      }

      state.messageList = updatedMessages;
    });
  };

  const updateChatList = (userId: string, message: string) => {
    console.log("store: updateChatList", userId);
    // メッセージリストのリファレンスを取得
    const messageListRef = ref(db, "messageList");
    // 新しいメッセージのリファレンスを作成
    const newMessageRef = push(messageListRef);

    // データをセット
    set(newMessageRef, {
      id: newMessageRef.key,
      userId,
      message,
      dateTime: moment(new Date()).format("MM/DD HH:mm:ss"),
    })
      .then(() => {
        console.log("Message data set.");
        fetchChatList();
      })
      .catch((error) => {
        console.error("Failed to set message data:", error);
      });
  };

  // TODO: データ削除のテストとして配置しているため、不要になったら削除する
  const deleteChatList = async () => {
    console.log("store: deleteChatList");
    const messageListRef = ref(db, "messageList");

    set(messageListRef, null)
      .then(() => {
        console.log("All messages deleted.");
      })
      .catch((error) => {
        console.error("Failed to delete messages:", error);
      });
  };

  return {
    state,
    createDatabase,
    fetchChatList,
    updateChatList,
    deleteChatList,
  };
})();

type ChatInfo = typeof chat;
export const chatKey: InjectionKey<ChatInfo> = Symbol("chatInfo");
