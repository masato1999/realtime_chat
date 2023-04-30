import { InjectionKey } from 'vue'
import { UserInfo } from './types'

export const userInfoKey: InjectionKey<UserInfo> = Symbol('userInfo');
export const messageListKey: InjectionKey<string[]> = Symbol('messageList')
