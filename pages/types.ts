type UserInfo = {
  name: string;
  isOnline: boolean;
}
type MessageInfo = {
  dateTime: string;
  message: string;
}

export type Store = {
  userInfo: UserInfo,
  messageList: MessageInfo[],
}
