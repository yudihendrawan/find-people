export type DetailUser = {
    login: string
    id: number
    avatar_url: string
    html_url: string
    followers_url: string
    following_url: string
    repos_url: string
    name: string
    company: string | null
    blog: string
    location: string | null
    email: string | null
    twitter_username: string | null
    public_repos: number
    followers: number
    following: number
    created_at: string
    updated_at: string
}