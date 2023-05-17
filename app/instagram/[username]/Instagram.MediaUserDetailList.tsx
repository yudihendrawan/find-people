import React from 'react'
import { MediaUserDetail } from '@/types/userInstagram/Instagram.User'
import Image from 'next/image'
import { VideoCameraIcon } from '@heroicons/react/24/solid'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link'


export default function MediaUserDetailList({ video_url, caption, is_video, id, display_url, username }: Props) {
  return (
    <div>
      <HoverCard>
        <div>
          <HoverCardTrigger asChild>
            <Image className='object-cover h-40 lg:h-52 max-w-full rounded-lg' src={display_url} alt='Media User' height={250} width={250} />
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex p-2'>
              <div className='space-y-1'>
                <div className='justify-between flex items-center'>
                  <h4 className='text-sm font-semibold'>@{username}</h4>
                  {is_video == true ? <Link href={video_url} target='_blank' ><VideoCameraIcon className="w-4 h-4" /></Link> : ""}
                </div>
                <p className='text-sm'>
                  {caption}
                </p>
              </div>
            </div>
          </HoverCardContent>
        </div>
      </HoverCard>
    </div>
  )
}

interface Props {
  id: number,
  display_url: string
  caption?: string
  username: string
  is_video: boolean
  video_url: string
}
