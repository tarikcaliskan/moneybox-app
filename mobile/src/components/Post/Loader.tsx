import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ShimmerLoader } from '../../components/Loader';
import { colors, fontFamily } from '../../utils/style';

interface PostLoaderProps {
	index: number;
}

export const PostLoader: React.FC<PostLoaderProps> = ({ index }) => {
	return (
		<View style={[styles.container, { borderTopWidth: index === 0 ? 0 : 2 }]}>
			<View style={styles.headerWrapper}>
				<ShimmerLoader style={styles.userImage} />
				<View>
					<ShimmerLoader style={{ height: 14, borderRadius: 4 }} />
					<ShimmerLoader style={{ height: 10, borderRadius: 4, marginTop: 8 }} />
				</View>
			</View>
			<View style={styles.contentWrapper}>
				<ShimmerLoader style={{ height: 128, width: '100%', borderRadius: 4 }} />
				<ShimmerLoader style={{ height: 270, width: '100%', marginTop: 24, borderRadius: 4 }} />
			</View>
			<View style={styles.footerWrapper}>
				<View style={styles.likeWrapper}>
					<ShimmerLoader style={{ height: 36, width: '100%', borderRadius: 4, marginRight: 12 }} />
				</View>
				<View style={styles.prizeWrapper}>
					<ShimmerLoader style={{ height: 36, width: '100%', borderRadius: 4, marginLeft: 12 }} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		minWidth: '100%',
		borderColor: colors.gray100,
		paddingVertical: 20,
		paddingHorizontal: 24,
	},
	contentWrapper: {
		marginVertical: 16,
	},
	userImage: {
		width: 40,
		height: 40,
		marginRight: 16,
		borderRadius: 100,
	},
	postImage: {
		width: '100%',
		height: 320,
		borderRadius: 6,
		marginTop: 24,
	},
	headerWrapper: {
		flexDirection: 'row',
	},
	footerWrapper: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
	},
	likeWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRightWidth: 2,
		borderRightColor: colors.gray300,
	},
	prizeWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
});
