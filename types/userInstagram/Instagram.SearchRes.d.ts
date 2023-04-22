import { UserDetail, UserInstagram } from "./Instagram.User"

export type InstagramEnpoint = {
    users: UserInstagram[]
    search: string
}

export type UserDetailEnpoints = {
    users: UserDetail[]
}