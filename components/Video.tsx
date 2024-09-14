'use client';

import { SearchResult } from '@/custom/action';
import { Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import clsx from 'clsx';
import SkeletonLoader from './SkeletonLoader';

export interface VideoProperties {
  videos: SearchResult[];
  className?: string;
}

const Video: React.FC<VideoProperties> = ({ videos, className }) => {
  const filteredVideos = videos.filter(
    (item) => item.id.videoId || item.id.channelId
  );
  return (
    <div
      className={clsx(
        className
          ? className
          : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'
      )}
    >
      {filteredVideos.length > 0
        ? filteredVideos.map((item, index) => {
            return (
              <Box key={index} className="flex flex-col h-full">
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
              </Box>
            );
          })
        : Array.from({ length: 50 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
    </div>
  );
};
export default Video;
