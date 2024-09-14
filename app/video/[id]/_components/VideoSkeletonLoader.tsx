import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Box, Stack, Typography } from '@mui/material';

const VideoSkeletonLoader = () => {
  return (
    <Box flex={1} className="w-full md:w-[65%]">
      <Box sx={{ width: '100%', top: '86px', position: 'sticky' }}>
        <Box
          sx={{
            width: '100%',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <Skeleton className='md:h-[77vh] h-[44vh]' width="100%" />
        </Box>

        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
          <Skeleton width="80%" height={30} />
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ color: '#fff' }}
          py={2}
          px={2}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: 'subtitle1.fontSize', md: 'h6.fontSize' },
            }}
          >
            <Skeleton width={150} height={20} />
          </Typography>

          <Stack direction="row" gap="20px" alignItems="center">
            <Skeleton width={100} height={20} />
            <Skeleton width={100} height={20} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoSkeletonLoader;
