'use client';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {
  getDataFromAPI,
  ChannelDataProperties,
  SearchResult,
} from '@/custom/action';
import { CheckCircle } from '@mui/icons-material';
import RelatedVideo from './_components/RelatedVideo';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import RelatedSkeleton from './_components/RelatedSkeleton';
import VideoSkeletonLoader from './_components/VideoSkeletonLoader';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
interface PageProperties {
  params: { id: string };
}

const Page: React.FC<PageProperties> = ({ params }) => {
  const { id } = params;
  const [videoDetail, setVideoDetail] = useState<
    ChannelDataProperties | undefined
  >(undefined);

  const [videos, setVideos] = useState<SearchResult[]>([]);
  // const [videoId, setVideoId] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRelatedVideoLoading, setIsRelatedVideoLoading] =
    useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await getDataFromAPI(
          `videos?part=snippet,statistics&id=${id}`
        );

        setVideoDetail(data?.items[0]);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        return;
      }
    };
    const fetchRelatedVideo = async () => {
      setIsRelatedVideoLoading(true);
      try {
        const data = await getDataFromAPI(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );

        setVideos(data?.items);
        setIsRelatedVideoLoading(false);
      } catch {
        setIsRelatedVideoLoading(false);
        return;
      }
    };
    fetchRelatedVideo();
    fetchData();
  }, [id]);

  if (!videoDetail?.snippet || isLoading || isRelatedVideoLoading || !videos) {
    return (
      <Box minHeight="95vh" className="max-w-[80rem] mx-auto mt-16 ">
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <VideoSkeletonLoader />;
          <RelatedSkeleton />
        </Stack>
      </Box>
    );
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="100vh" className="max-w-[80rem] mx-auto mt-16">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1} className="w-full md:w-[65%] ">
          <Box sx={{ width: '100%', top: '86px', position: 'sticky' }}>
            <Box
              sx={{
                width: '100%',

                borderRadius: '20px',
                overflow: 'hidden', // Ensures the rounded corners are applied
              }}
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                className="md:!h-[77vh] !w-full !h-[44vh]"
                playing={true}
              />
            </Box>
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              py={2}
              px={2}
            >
              <Link href={`/channel/${channelId}`}>
                <Typography
                  sx={{
                    color: '#fff',
                    fontSize: { xs: 'subtitle1.fontSize', md: 'h6.fontSize' },
                  }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount!).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount!).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
          {/* <Comment videoId={videoId} /> */}
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          className="w-[35%] hidden md:block min-h-[95vh] "
        >
          <RelatedVideo videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};
export default Page;
