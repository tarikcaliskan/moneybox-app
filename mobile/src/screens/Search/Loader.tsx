import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ShimmerLoader } from '../../components/Loader';
import { colors } from '../../utils/style';

interface SearchItemLoaderProps {
	index: number;
}

export const SearchItemLoader: React.FC<SearchItemLoaderProps> = ({ index }) => {
	return (
		<View style={[styles.listItemWrapper, { borderTopWidth: index === 0 ? 0 : 2 }]}>
			<ShimmerLoader style={styles.profileImage} />
			<View>
				<ShimmerLoader style={{ borderRadius: 4, height: 12 }} />
				<ShimmerLoader style={{ marginTop: 12, borderRadius: 4, height: 12 }} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	profileImage: {
		height: 48,
		width: 48,
		borderRadius: 100,
		marginRight: 16,
	},
	listItemWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: colors.gray100,
		minWidth: '100%',
		paddingVertical: 20,
		paddingHorizontal: 24,
	},
});
