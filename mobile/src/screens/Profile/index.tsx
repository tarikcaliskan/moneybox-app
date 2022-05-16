import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { ScreenContainer } from '../../components/ScreenContainer';
import { useAuth } from '../../store/auth';
import { colors, fontFamily } from '../../utils/style';
import { StyleSheet } from 'react-native';
import { defaultImages } from '../../utils/constants';
import { gql } from '@apollo/client';
import { useGetMyProfileDetailQuery } from '../../generated/graphql';
import { ProfileLoader } from './Loader';

const CoinImage = require('../../assets/images/coin.png');

gql`
	query GetMyProfileDetail($userId: uuid!) {
		user: user_by_pk(id: $userId) {
			id
			email
			fullName
			imageUrl
			wallet {
				id
				balance
			}
		}
	}
`;
export const Profile: React.FC = () => {
	const { user: loggedInUser } = useAuth();
	const { data, loading } = useGetMyProfileDetailQuery({ variables: { userId: loggedInUser?.id } });
	const user = data?.user;
	if (!data || loading) return <ProfileLoader />;

	return (
		<ScreenContainer styleOverrides={{ page: styles.profileWrapper }}>
			<View style={styles.profileInnerWrapper}>
				<ImageBackground style={styles.image} source={{ uri: defaultImages.randomBackground }} />
				<Image
					borderRadius={100}
					style={styles.profileImage}
					source={{ uri: user?.imageUrl ?? defaultImages.profileAvatar }}
				/>
				<View style={styles.userInfoWrapper}>
					<Text style={styles.fullName}>{user?.fullName}</Text>
					<Text style={styles.email}>{user?.email}</Text>
					<View style={styles.line} />
					<Text style={styles.moneyboxTitle}>Kumbaradaki Puan</Text>
					<View style={styles.balanceWrapper}>
						<Image style={styles.coinIcon} source={CoinImage} />
						<Text style={styles.moneyboxAmount}>{user?.wallet?.balance}</Text>
					</View>
				</View>
			</View>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	profileWrapper: {
		justifyContent: 'flex-start',
		marginVertical: 0,
		marginHorizontal: 0,
	},
	profileInnerWrapper: {
		alignItems: 'center',
		position: 'relative',
	},
	line: {
		marginTop: 24,
		borderBottomColor: colors.gray200,
		borderBottomWidth: 1,
		minWidth: '100%',
	},
	image: {
		width: '100%',
		height: 200,
	},
	fullName: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 18,
		color: colors.gray800,
	},
	moneyboxTitle: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 18,
		color: colors.gray600,
		marginTop: 32,
	},
	moneyboxAmount: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 40,
		color: colors.gray600,
	},
	email: {
		textAlign: 'center',
		fontFamily: fontFamily.medium,
		fontSize: 14,
		color: colors.gray500,
		marginTop: 6,
	},
	profileImage: {
		width: 96,
		height: 96,
		position: 'absolute',
		top: 150,
		left: '38%',
		zIndex: 1,
		borderWidth: 4,
		borderColor: colors.white,
	},
	userInfoWrapper: {
		marginTop: 56,
	},
	balanceWrapper: {
		alignSelf: 'center',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 12,
	},
	coinIcon: {
		width: 36,
		height: 36,
		marginRight: 12,
	},
});
