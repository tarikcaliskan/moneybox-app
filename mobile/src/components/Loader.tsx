import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export const Loader = createShimmerPlaceholder(LinearGradient);

interface ShimmerLoader {
	style?: StyleProp<ViewStyle>;
}

export const ShimmerLoader: React.FC<ShimmerLoader> = ({ style }) => {
	return <Loader style={style} />;
};
