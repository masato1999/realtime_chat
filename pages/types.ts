type UserInfo = {
  name: string;
  isOnline: boolean;
  dateTime: string;
}

export type Store = {
  userInfo: UserInfo,
  messageList: string[],
}
