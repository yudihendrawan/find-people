'use client'
import DetailUser from './Instagram.DetailUser'
import { Caption, MediaUser, MediaUserDetail, UserDetail } from '@/types/userInstagram/Instagram.User'
import { useState, useEffect } from 'react'
import MediaList from './Instagram.MediaList'
import { CameraIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import SkeletonAnimation from '@/components/SkeletonAnimation'



export default function Detail({ params }: { params: { username: string } }) {
    const [resDataUser, setResDataUser] = useState<UserDetail | null>(null)
    const [resDataMedia, setResDataMedia] = useState<MediaUser | null>(null)

    useEffect(() => {
        async function getData() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e76efd42f7msh1e6ad3422f4fd08p145587jsne1d97f5997b3',
                    'X-RapidAPI-Host': 'instagram-looter2.p.rapidapi.com'
                }
            };
            const res = await fetch(`https://instagram-looter2.p.rapidapi.com/profile?username=${params.username}`, options)
            const data = await res.json()
            const media = data.edge_owner_to_timeline_media
            const endPointsUserDetail: UserDetail = {
                biography: data.biography,
                id: data.id,
                category_name: data.category_name,
                edge_followed_by: data.edge_followed_by.count,
                edge_follow: data.edge_follow.count,
                profile_pic_url: data.profile_pic_url,
                full_name: data.full_name,
                username: data.username,
                is_private: data.is_private,
                is_verified: data.is_verified,
                media_count: data.edge_owner_to_timeline_media.count
            }
            const resMedia: MediaUserDetail[] = data.edge_owner_to_timeline_media.edges
            const endPointsUserMedia: MediaUser = {
                count: media.count,
                edges: resMedia
            }
            setResDataUser(endPointsUserDetail);
            setResDataMedia(endPointsUserMedia);
        }
        getData()
    }, [params.username])

    return (
        <div className='mt-10 lg:mx-auto lg:w-3/4 overflow-x-hidden'>
            {resDataUser ? <DetailUser
                biography={resDataUser.biography}
                id={resDataUser.id}
                category_name={resDataUser.category_name}
                edge_followed_by={resDataUser.edge_followed_by}
                edge_follow={resDataUser.edge_follow}
                profile_pic_url={resDataUser.profile_pic_url}
                full_name={resDataUser.full_name}
                username={resDataUser.username}
                is_private={resDataUser.is_private}
                is_verified={resDataUser.is_verified}
                media_count={resDataUser.media_count}
            /> : <SkeletonAnimation />}

            <div className='mt-14 ml-2 flex flex-row items-center space-x-3'>
                <CameraIcon className='w-5 h-5 lg:w-7 lg:h-7' /><p className='font-bold text-2xl'> Media</p>
            </div>

            {resDataUser?.is_private ? <div className='flex flex-col justify-center items-center mt-40'><LockClosedIcon className='w-10 h-10' /><p className='text-xl font-semibold'>Yaah.. akunnya terkunci😞</p></div> : resDataMedia ? <MediaList media={resDataMedia.edges} /> : <SkeletonAnimation />}
        </div>
    )
}