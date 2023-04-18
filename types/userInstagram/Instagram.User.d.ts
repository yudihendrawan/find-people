export type UserInstagram = {
    position: number;
    user: {
        username: string;
        full_name: string;
        profile_pic_url: string;
        is_private: boolean;
        is_verified: boolean;
    }
}