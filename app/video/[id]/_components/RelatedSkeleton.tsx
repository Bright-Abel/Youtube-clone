import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const RelatedSkeleton = () => {
  return (
    <div className="w-[35%]">
      <div className="w-full hidden md:flex flex-col min-h-[95vh]">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="flex gap-2 rounded-lg items-start p-2">
            <div className="relative w-[50%] h-[150px] overflow-hidden rounded-lg">
              <Skeleton height={150} width="100%" />
            </div>

            <div className="px-2 py-2 flex-1 mt-3">
              <div className="flex flex-col gap-1">
                <Skeleton count={2} height={20} width="80%" />

                <Skeleton width="60%" />

                <Skeleton width="40%" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedSkeleton;
