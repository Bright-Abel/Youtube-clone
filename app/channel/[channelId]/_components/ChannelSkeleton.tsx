import Skeleton from 'react-loading-skeleton';
const ChannelSkeleton = () => {
  return (
    <div className="rounded-[20px] mt-[-100px] flex justify-center items-center flex-grow m-auto">
      <div className="flex flex-col justify-center text-center text-white">
        {/* Skeleton for Profile Image */}
        <Skeleton circle width={180} height={180} className="mx-auto" />

        {/* Skeleton for Channel Title */}
        <Skeleton height={30} className="mt-4 mx-auto w-full" />

        {/* Skeleton for Subscribers Count */}
        <Skeleton height={20} className="mt-2 mx-auto w-[50%]" />
      </div>
    </div>
  );
};
export default ChannelSkeleton;
