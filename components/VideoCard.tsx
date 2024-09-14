'use client';
import { Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { SearchResult } from '@/custom/action';
import clsx from 'clsx';
import { demoChannelTitle, demoVideoUrl } from '@/custom/constant';
import { useState } from 'react';

interface VideoCardProperties {
  video: SearchResult;
}
const VideoCard: React.FC<VideoCardProperties> = ({ video }) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(true);
  const {
    id: { videoId },
    snippet,
  } = video;

  return (
    <Link
      href={videoId ? `/video/${videoId}` : demoVideoUrl}
      onMouseEnter={() => {
        setIsMouseEnter(false);
      }}
      onMouseLeave={() => {
        setIsMouseEnter(true);
      }}
      className={clsx(
        'flex flex-col flex-grow duration-500 hover:scale-105', // Ensures image covers the container
        isMouseEnter ? 'rounded-lg' : 'rounded-none'
      )}
    >
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src={snippet?.thumbnails?.high?.url}
          alt={snippet.title}
          className={clsx(
            'object-cover w-full h-full',
            isMouseEnter ? 'rounded-lg' : 'rounded-none'
          )}
          fill
        />
      </div>

      <div className="px-2 py-2">
        <div className="">
          <h1 className="overflow-hidden textStyle text-sm text-white">
            {snippet.title}
          </h1>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;

{
  /* <Card
      sx={{
        // width: { md: '320px', xs: '100%' },
        boxShadow: 'none',
        borderRadius: '0px',
      }}
    >
      <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          src={snippet.thumbnails.high.url} //
          alt={snippet.title}
          //   sx={{ width: '100', height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          href={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card> */
}
