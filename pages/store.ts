import { Store } from './types'
import { reactive, InjectionKey } from "@nuxtjs/composition-api";
import { firebase } from "@/plugins/firebase";
import { getDatabase, ref, push, onValue } from "@firebase/database";
import moment from "moment";

export const chat = (() => {
  const state = reactive<Store>({
    userInfo: {
      name: "",
      isOnline: false,
    },
    messageList: [],
  });

  const fetchChatList = () => {
    const db = ref(getDatabase(firebase), "realtimeChat");
    onValue(db, async (snapshot) => {
      const response = await snapshot.val();

      if (response) {
        state.messageList = Object.keys(response.UserInfo.MessageList).map((data) => {
          return response.UserInfo.MessageList[data]
        });
        state.userInfo.isOnline = response.UserInfo.isOnline;
        state.userInfo.name = response.UserInfo.name;
      }
    })
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
