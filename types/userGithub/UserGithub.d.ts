export type UserGithub = {
    login: string;
    avatar_url: string;
    url: string;

}

export type DetailUser = {
    id: number;
    avatar_url: string;
    name: string;
    followers: number;
    following: number;
    public_repos: number;
    html_url: string
    // created_at: string
}
