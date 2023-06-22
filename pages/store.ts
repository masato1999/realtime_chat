import { InjectionKey } from 'vue'
import { Store } from './types'
import { reactive } from "@nuxtjs/composition-api";
import { firebase } from "@/plugins/firebase";
import { onValue } from "@firebase/database";
import { getDatabase, ref } from "@firebase/database";

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

  return {
    state,
    fetchChatList
  }
})();

type ChatInfo = typeof chat;
export const chatKey: InjectionKey<ChatInfo> = Symbol('chatInfo');
