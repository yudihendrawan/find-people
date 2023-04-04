
import { UserGithub, UserInstagram } from "./User"

export type SearchRes = {
    users: UserGithub[];
    search: string
}

export type InstaRes = {
    users: UserIg[];
    search: string
}