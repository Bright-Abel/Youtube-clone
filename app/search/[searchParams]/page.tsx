'use client';
import { Box, Typography } from '@mui/material';
import Video from '@/components/Video';
import { useState, useEffect } from 'react';
import { SearchResult, getDataFromAPI } from '@/custom/action';
const Page = ({ params }: { params: { searchParams: string } }) => {
  const { searchParams } = params;
  const [videos, setVideos] = useState<SearchResult[]>([]);

  useEffect(() => {
    getDataFromAPI(`search?part=snippet&q=${searchParams}`).then((data) =>
      setVideos(data.items || [])
    );
  }, [searchParams]);

  const decodeSearchParams = decodeURIComponent(searchParams);
  return (
    <Box
      p={2}
      sx={{ overflowY: 'auto', height: '90vh', flex: 1 }}
      className="mt-16"
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
        Search results for:{' '}
        <span className="text-[#F31503]">{decodeSearchParams}</span> videos
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};
export default Page;
