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
      dateTime: "",
      isOnline: false,
    },
    messageList: [],
  });

  const fetchChatList = () => {
    const db = ref(getDatabase(firebase), "chat");;
    onValue(db, async (snapshot) => {
      const response = await snapshot.val();

      const MessageListArray = Object.keys(response.MessageList).map((data) => {
        return response.MessageList[data]
      })

      if (response) {
        state.messageList = MessageListArray;
        state.userInfo = { ...response.UserInfo };
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
