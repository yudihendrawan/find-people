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


export type MediaUser = {
    count: number
    edges: MediaUserDetail[]
}


export type UserDetail = {
    biography: string;
    id: string;
    category_name: string
    edge_follow: number
    edge_followed_by: number
    full_name: string;
    is_private: boolean
    is_verified: boolean;
    username: string;
    profile_pic_url: string
    media_count: number
}


export type Caption = {
    node: {
        text: string
    }

}

export type MediaUserDetail = {
    node: {
        id: number;
        display_url: string;
        is_video: boolean;
        edge_media_to_caption: {
            edges: Caption[]
        }
        edge_liked_by: {
            count: number
        }
        video_url: string
        owner: {
            username: string
        }
    }
}

