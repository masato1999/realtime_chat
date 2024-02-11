type UserInfo = {
  id: string;
  imagePath: string;
  isLoggedIn: boolean;
  loginId: string;
  userName: string;
}

type MessageListItem = {
  id: string;
  dateTime: string;
  message: string;
  userId: string;
  user: UserInfo;
}

export type Store = {
  messageList: MessageListItem[],
}
