type UserInfo = {
  id: number;
  imagePath: string;
  isLoggedIn: boolean;
  loginId: string;
  userName: string;
}

export type MessageListItem = {
  id: number;
  dateTime: string;
  message: string;
  userId: string;
  user: UserInfo;
}

export type Store = {
  messageList: MessageListItem[],
  user: UserInfo
}
