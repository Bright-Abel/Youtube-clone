'use client';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Video from '@/components/Video';

import { getDataFromAPI } from '@/custom/action';
import { SearchResult, ChannelDataProperties } from '@/custom/action';
import ChannelProfile from './_components/ChannelProfile';
import ChannelSkeleton from './_components/ChannelSkeleton';
const page = ({ params }: { params: { channelId: string } }) => {
  const { channelId } = params;
  const [videos, setVideos] = useState<SearchResult[]>([]);
  const [channelDetail, setChannelDetail] = useState<
    ChannelDataProperties | undefined
  >(undefined);
  useEffect(() => {
    getDataFromAPI(`channels?part=snippet&id=${channelId}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    getDataFromAPI(
      `search?channelId=${channelId}&part=snippet&order=date`
    ).then((data) => {
      console.log(data.items);

      setVideos(data?.items);
    });
  }, [channelId]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          className=""
          style={{
            background:
              'linear-gradient(104deg, rgba(20,15,98,1) 5%, rgba(195,14,82,0.896796218487395) 52%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
            height: '300px',
          }}
        />
        {channelDetail ? (
          <ChannelProfile channelDetail={channelDetail} />
        ) : (
          <ChannelSkeleton />
        )}
      </Box>

      <Box display="flex" p="2" sx={{ width: '100%' }} className="w-full mt-20">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Video videos={videos} />
        <Box sx={{ ml: { sm: '100px' } }} />
      </Box>
    </Box>
  );
};
export default page;
//
