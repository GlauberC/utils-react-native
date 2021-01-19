import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// import { Container } from './styles';

const SkeletonContainer: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        marginHorizontal={10}
        marginVertical={5}
        padding={10}
        height={60}
      >
        <SkeletonPlaceholder.Item
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SkeletonPlaceholder.Item width={80} height={14} />
          <SkeletonPlaceholder.Item width={70} height={14} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item paddingTop={4}>
          <SkeletonPlaceholder.Item width={240} height={14} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonContainer;
