import { InjectionKey } from 'vue'

export type UserInfo = {
  name: string;
  isOnline: boolean;
  time: Date;
}

export const userInfoKey: InjectionKey<UserInfo> = Symbol('userInfo')
