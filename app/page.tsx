'use client';

import Sidebar from '@/components/Sidebar';
import Video from '@/components/Video';
import { Box, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { getDataFromAPI } from '@/custom/action';
import { SearchResult } from '@/custom/action';

const Page = () => {
  const [hoverCategory, setHoverCategory] = useState<string>('New');
  const [videos, setVideos] = useState<SearchResult[]>([]);
  const date = new Date().getFullYear();

  useEffect(() => {
    getDataFromAPI(`search?part=snippet&q=${hoverCategory}`).then((data) =>
      setVideos(data.items || [])
    );
  }, [hoverCategory]);
  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' } }}
      className="mt-16 flex"
    >
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
        className="w-full lg:w-[20%]"
      >
        <Sidebar
          hoverCategory={hoverCategory}
          setHoverCategory={setHoverCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright {date} abelBright
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: '1' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: '#fff' }}
        >
          {hoverCategory} <span className="text-[#F31503]">videos</span>
        </Typography>
        <Video videos={videos} />
      </Box>
    </Stack>
  );
};
export default Page;
