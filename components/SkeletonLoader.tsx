import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Typography } from '@mui/material';

const SkeletonLoader = () => {
  return (
    <div className="flex flex-col flex-grow duration-500">
      <div className="relative w-full h-[150px] rounded-lg overflow-hidden">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>

      <div className="py-2">
        <div className="">
          <h1 className="textStyle text-sm text-white">
            <Skeleton width="100%" count={2} height={20} />
          </h1>

          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            <Skeleton width={50} height={20} />
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
