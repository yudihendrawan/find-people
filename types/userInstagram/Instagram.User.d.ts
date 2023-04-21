export type UserInstagram = {
    user: {
        username: string;
        full_name: string;
        profile_pic_url: string;
        is_private: boolean;
        is_verified: boolean;
    }
}

export type InstagramRes = {
    users: UserInstagram[]
}


export type UserDetail = {
    biography: string;
    id: string;
    category_name: string
    edge_follow: {
        count: number
    }
    edge_followed_by: {
        count: number
    }
    full_name: string;
    is_private: boolean
    is_verified: boolean;
    username: string;
    profile_pic_url: string
}
