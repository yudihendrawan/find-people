import { UserGithub } from "./UserGithub"

export type SearchRes = {
    users: UserGithub[];
    search: string
}