import { MediaUserDetail, UserDetail } from '@/types/userInstagram/Instagram.User'
import MediaUserDetailList from './Instagram.MediaUserDetailList'
import React from 'react'

export default function MediaList({ media }: Props) {
    return (
        <div className='border border-zinc-200 mx-2 lg:w-11/12 shadow-sm rounded-lg justify-center mt-3 mb-10'>
            <div className='grid gap-2 p-3 lg:gap-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 items-center'>
                {media ? media.map(m => (
                    <MediaUserDetailList
                        key={m.node.id}
                        id={m.node.id}
                        display_url={m.node.display_url}
                        caption={m.node.edge_media_to_caption.edges[0]?.node?.text}
                        username={m.node.owner.username}
                        is_video={m.node.is_video}
                        video_url={m.node.video_url}
                    />
                )) : ""}
            </div>
        </div>
    )
}

interface Props {
    media: MediaUserDetail[]
}