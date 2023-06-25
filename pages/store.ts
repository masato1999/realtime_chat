import { InjectionKey } from 'vue'
import { Store } from './types'
import { reactive } from "@nuxtjs/composition-api";
import { firebase } from "@/plugins/firebase";
import { onValue } from "@firebase/database";
import { getDatabase, ref, push } from "@firebase/database";
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
    const db = ref(getDatabase(firebase), "chat");
    onValue(db, async (snapshot) => {
      const response = await snapshot.val();

      const messageListArray = Object.keys(response.UserInfo.MessageList).map((data) => {
        return response.UserInfo.MessageList[data]
      })

      if (response) {
        state.messageList = messageListArray;
        state.userInfo.isOnline = response.UserInfo.isOnline;
        state.userInfo.name = response.UserInfo.name;
      }

    })
  }

  const updateChatList = (messsage: string) => {
    const values = {
      message: messsage,
      dateTime: moment(new Date().toString()).format("MM/DD HH:mm:ss"),
    };

    const db = getDatabase(firebase);
    push(ref(db, "chat/UserInfo/MessageList"), values);
  }

  return {
    state,
    fetchChatList,
    updateChatList
  }
})();

type ChatInfo = typeof chat;
export const chatKey: InjectionKey<ChatInfo> = Symbol('chatInfo');
