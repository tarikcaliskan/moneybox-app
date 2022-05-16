import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ShimmerLoader } from '../../components/Loader';
import { colors } from '../../utils/style';

interface RelationshipItemLoaderProps {
	index: number;
}

export const RelationshipItemLoader: React.FC<RelationshipItemLoaderProps> = ({ index }) => {
	return (
		<View style={[styles.listItemWrapper, { borderTopWidth: index === 0 ? 0 : 2 }]}>
			<ShimmerLoader style={styles.profileImage} />
			<View>
				<ShimmerLoader style={{ borderRadius: 4, height: 12, width: '85%' }} />
				<ShimmerLoader style={{ marginTop: 12, borderRadius: 4, height: 12, width: '65%' }} />
			</View>
			<ShimmerLoader style={{ borderRadius: 250, height: 32, width: 32, marginRight: 10 }} />
			<ShimmerLoader style={{ borderRadius: 250, height: 32, width: 32 }} />
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
		justifyContent: 'space-between',
		alignItems: 'center',
		borderColor: colors.gray100,
		minWidth: '100%',
		paddingVertical: 20,
		paddingHorizontal: 24,
	},
});
