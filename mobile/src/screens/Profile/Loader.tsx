import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ShimmerLoader } from '../../components/Loader';
import { PostLoader } from '../../components/Post/Loader';
import { colors } from '../../utils/style';

interface ProfileLoaderProps {
	withPost?: boolean;
}

export const ProfileLoader: React.FC<ProfileLoaderProps> = ({ withPost }) => {
	return (
		<View style={styles.listItemWrapper}>
			<ShimmerLoader style={styles.bgImage} />
			<ShimmerLoader style={styles.profileImage} />
			<View style={{ marginTop: 72, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
				<View>
					<ShimmerLoader style={{ borderRadius: 4, height: 12, width: '50%', alignSelf: 'center' }} />
					<ShimmerLoader style={{ marginTop: 12, borderRadius: 4, height: 12, width: '75%', alignSelf: 'center' }} />
				</View>
			</View>
			{withPost ? (
				<>
					<ShimmerLoader style={{ marginTop: 32, borderRadius: 12, height: 40, width: '60%', alignSelf: 'center' }} />
					<ShimmerLoader style={{ marginTop: 24, borderRadius: 4, height: 18, width: '35%', alignSelf: 'center' }} />
					<View style={{ borderWidth: 1, borderColor: colors.gray200, marginTop: 24 }} />
					<PostLoader index={0} />
				</>
			) : (
				<>
					<View style={{ borderWidth: 1, borderColor: colors.gray200, marginTop: 24 }} />
					<ShimmerLoader style={{ marginTop: 32, borderRadius: 4, height: 12, width: '50%', alignSelf: 'center' }} />
					<View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
						<ShimmerLoader style={{ borderRadius: 250, height: 32, width: 32, alignSelf: 'center' }} />
						<ShimmerLoader style={{ borderRadius: 4, marginLeft: 12, height: 32, width: 64, alignSelf: 'center' }} />
					</View>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	bgImage: {
		height: 200,
		width: '100%',
		marginRight: 16,
	},
	profileImage: {
		height: 96,
		width: 96,
		top: 155,
		left: '35%',
		position: 'absolute',
		borderRadius: 100,
		marginRight: 16,
	},
	listItemWrapper: {
		flex: 1,
		position: 'relative',
	},
});
