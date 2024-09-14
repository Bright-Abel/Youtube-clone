'use client';
import { Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { SearchResult } from '@/custom/action';
import clsx from 'clsx';
import {
  demoChannelTitle,
  demoVideoUrl,
  timeDifference,
} from '@/custom/constant';

interface RelatedVideoProperties {
  videos: SearchResult[];
}

const RelatedVideo: React.FC<RelatedVideoProperties> = ({ videos }) => {
  return (
    <div className="w-full flex flex-col min-h-[95vh]">
      {videos.length &&
        videos.map((items) => {
          const {
            id: { videoId },
            snippet: { thumbnails, title, channelTitle, publishedAt },
          } = items;

          return (
            <Link
              key={videoId}
              href={videoId ? `/video/${videoId}` : demoVideoUrl}
              className={clsx(`flex gap-2 rounded-lg items-start hover:scale-[1.02] duration-500
                `)}
            >
              <div className="relative w-[50%] h-[200px] overflow-hidden">
                <Image
                  src={thumbnails?.high?.url || ''}
                  alt={title}
                  className={clsx(`object-cover rounded-lg`)}
                  height={200}
                  width={200}
                />
              </div>

              <div className="px-2 py-2 flex-1 mt-3">
                <div className="flex flex-col gap-1">
                  <h1 className="overflow-hidden textStyle text-sm text-white">
                    {title}
                  </h1>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="gray"
                  >
                    {channelTitle || demoChannelTitle}
                    <CheckCircle
                      sx={{ fontSize: '15px', color: 'gray', ml: '5px' }}
                    />
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    color="gray"
                  >
                    {timeDifference(publishedAt)}
                  </Typography>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default RelatedVideo;
