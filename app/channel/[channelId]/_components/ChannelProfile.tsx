import { ChannelDataProperties } from '@/custom/action';
import { demoProfilePicture } from '@/custom/constant';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface ChannelProfileProperties {
  channelDetail: ChannelDataProperties | undefined;
}
const ChannelProfile: React.FC<ChannelProfileProperties> = ({
  channelDetail,
}) => {
  return (
    <div className="rounded-[20px] mt-[-100px] flex justify-center items-center flex-grow m-auto">
      <div className="flex flex-col justify-center text-center text-white">
        <div className="h-[180px] w-[180px] rounded-full">
          <Image
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title || 'channel_image'}
            className="w-full h-full object-cover rounded-full"
            width={180}
            height={180}
            objectFit="cover"
          />
        </div>
        <Typography variant="h6">
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{ fontSize: '15px', color: 'gray', ml: '5px' }} />
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{' '}
            Subscribers
          </Typography>
        )}
      </div>
    </div>
  );
};
export default ChannelProfile;
