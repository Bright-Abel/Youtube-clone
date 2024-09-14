import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Link from 'next/link';
import { SearchResult, ChannelDataProperties } from '@/custom/action';
import { demoChannelUrl, demoProfilePicture } from '@/custom/constant';
import Image from 'next/image';

interface VideoCardProperties {
  channelDetail: SearchResult;
}
const ChannelCard: React.FC<VideoCardProperties> = ({ channelDetail }) => {
  return (
    <Link
      href={`/channel/${channelDetail?.id?.channelId}`}
      className="rounded-[20px] flex justify-center items-center flex-grow m-auto"
    >
      <div className="flex flex-col justify-center text-center text-white">
        <div className="h-[180px] w-[180px] rounded-full">
          <Image
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            className="w-full h-full object-cover rounded-full"
            width={180}
            height={180}
            objectFit="cover"
          />
        </div>
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
        </Typography>

        {/* {channelDetail.statistics.subscriberCount && (
//             <Typogrphy>
//               {parseInt(channelDetail.statistics.subscriberCount).toLocaleString() Subscribers}
//             </Typogrphy>
//           )} */}
      </div>
    </Link>
  );
};
export default ChannelCard;
// <Box
//       sx={{
//         boxShadow: 'none',
//         borderRadius: '20px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: { xs: '100%', md: '320px' },
//         height: '326px',
//         margin: 'auto',
//         backgroundColor: ''
//       }}
//     >
//       <Link href={`channel/${channelDetail?.id?.channelId}`}>
//         <CardContent
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             textAlign: 'center',
//             color: '#fff',
//           }}
//         >
//           <CardMedia
//             component="img"
//             src={
//               channelDetail?.snippet?.thumbnails?.high?.url ||
//               demoProfilePicture
//             }
//             alt={channelDetail?.snippet?.title}
//             sx={{ borderRadius: '50%', height: '180px', width: '180px' }}
//           />
//           <Typography variant="h6">
//             {channelDetail?.snippet?.title}{' '}
//             <CheckCircle sx={{ fontSize: 15, color: 'gray', ml: '5px' }} />
//           </Typography>
//           {/* {channelDetail.statistics.subscriberCount && (
//             <Typogrphy>
//               {parseInt(channelDetail.statistics.subscriberCount).toLocaleString() Subscribers}
//             </Typogrphy>
//           )} */}
//         </CardContent>
//       </Link>
//     </Box>
