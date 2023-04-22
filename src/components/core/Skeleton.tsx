import React from 'react';
import Skeleton, { SkeletonStyleProps } from 'react-loading-skeleton';
interface SkeletonProps {
  height?: number | string;
  width?: number | string;
  count?: number;
}

const Skeletal: React.FC<SkeletonProps> = ({ height, width, count }) => {
  return (
    <Skeleton
      height={height}
      width={width}
      count={count}
      duration={8}
      enableAnimation={true}
      direction={'ltr'}
      borderRadius={'4px'}
      baseColor={'#1A1B1F'}
      highlightColor={'#1f2124'}
    />
  );
};

export default Skeletal;
