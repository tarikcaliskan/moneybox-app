import React from 'react';
import {
	Animated,
	FlatList,
	Image,
	ImageBackground,
	ListRenderItem,
	NativeScrollEvent,
	Text,
	View,
} from 'react-native';
import { ScreenContainer } from '../../components/ScreenContainer';
import { useAuth } from '../../store/auth';
import { colors, fontFamily } from '../../utils/style';
import { StyleSheet } from 'react-native';
import { defaultImages } from '../../utils/constants';
import { useRoute } from '@react-navigation/native';

import { gql } from '@apollo/client';
import { useGetProfileDetailQuery, useGetProfileRelationshipQuery } from '../../generated/graphql';
import { Post } from '../../components/Post';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '../../components/Button';
import { RelationshipModal } from './Modal';
import { ProfileLoader } from '../Profile/Loader';

gql`
	query GetProfileDetail($userId: uuid!) {
		user: user_by_pk(id: $userId) {
			id
			email
			fullName
			imageUrl
			posts {
				id
				imageUrl
				myLike: likes(where: { userId: { _eq: $userId } }) {
					id
				}
				text
				createdAt
			}
		}
	}
`;

gql`
	query GetProfileRelationship($userId: uuid!, $loggedInUserId: uuid!) {
		userRelationship: user_relationship(
			where: { connectedUserId: { _eq: $loggedInUserId }, userId: { _eq: $userId } }
		) {
			id
			relationshipType
			verified
		}
	}
`;

const H_MAX_HEIGHT = 96;
const H_MIN_HEIGHT = 0;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

export const VisitProfile: React.FC = () => {
	const [isModalVisible, setIsModalVisible] = React.useState(false);
	const scrollOffsetY = React.useRef(new Animated.Value(0)).current;

	const headerScrollHeight = scrollOffsetY.interpolate({
		inputRange: [0, H_SCROLL_DISTANCE],
		outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
		extrapolate: 'clamp',
	});

	const { params } = useRoute<any>();
	const { user: loggedInUser } = useAuth();
	const {
		data: userRelationshipData,
		loading,
		refetch,
	} = useGetProfileRelationshipQuery({
		variables: { loggedInUserId: loggedInUser?.id, userId: params.userId },
	});
	const { data } = useGetProfileDetailQuery({ variables: { userId: params.userId ?? loggedInUser?.id } });
	const userRelationship = userRelationshipData?.userRelationship?.[0];
	const user = data?.user;

	if (!data || loading) return <ProfileLoader withPost />;

	const onLinkPress = async () => {
		setIsModalVisible(true);
	};

	const notFoundView = (
		<View style={styles.notFoundWrapper}>
			<Ionicons name="planet-outline" size={96} color={colors.gray700} />
			<Text style={styles.notFoundText}>
				Burası çok ıssız. {user?.fullName} yeni şeyler üzerinde çalışıyor olabilir.
			</Text>
		</View>
	);

	if (!user) return null;

	const relationshipButtonTitle = userRelationship?.id
		? userRelationship.verified
			? 'Bağlantı kuruldu'
			: 'Onay bekleniyor'
		: 'Bağlantı kur';

	const refetchRelationship = async () => {
		await refetch({ loggedInUserId: loggedInUser?.id, userId: params.userId ?? loggedInUser?.id });
	};

	const renderPostItem: ListRenderItem<typeof user.posts[0]> = ({ item, index }) => (
		<Post index={index} postId={item.id} />
	);

	const onScroll = Animated.event<NativeScrollEvent>([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], {
		useNativeDriver: false,
	});

	return (
		<ScreenContainer styleOverrides={{ page: styles.profileWrapper }}>
			<View style={styles.profileInnerWrapper}>
				<Animated.View
					style={{ marginTop: 12, height: headerScrollHeight, width: headerScrollHeight, alignItems: 'center' }}
				>
					<Image
						borderRadius={100}
						style={styles.profileImage}
						source={{ uri: user?.imageUrl ?? defaultImages.profileAvatar }}
					/>
				</Animated.View>
				<View style={styles.userInfoWrapper}>
					<Text style={styles.fullName}>{user?.fullName}</Text>
					<Text style={styles.email}>{user?.email}</Text>
					{!loading && (
						<Button
							disabled={!!userRelationship?.id}
							title={relationshipButtonTitle}
							styleOverrides={{ container: styles.buttonContainer }}
							onPress={onLinkPress}
						/>
					)}
					<Text style={styles.postsTitle}>Gönderiler</Text>
					<View style={styles.line} />
				</View>
			</View>
			{user.posts.length ? (
				<Animated.FlatList onScroll={onScroll} data={user.posts} renderItem={renderPostItem} />
			) : (
				notFoundView
			)}
			<RelationshipModal
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
				user={user}
				refetch={refetchRelationship}
				userRelationship={userRelationship}
			/>
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
	},
	line: {
		marginTop: 24,
		borderBottomColor: colors.gray200,
		borderBottomWidth: 1,
		minWidth: '100%',
	},
	buttonContainer: {
		marginTop: 24,
		marginBottom: 4,
		marginHorizontal: 84,
		paddingVertical: 12,
		paddingHorizontal: 8,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	fullName: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 18,
		color: colors.gray800,
	},
	postsTitle: {
		textAlign: 'center',
		fontFamily: fontFamily.bold,
		fontSize: 18,
		color: colors.gray600,
		marginTop: 16,
	},
	email: {
		textAlign: 'center',
		fontFamily: fontFamily.medium,
		fontSize: 14,
		color: colors.gray500,
		marginTop: 6,
	},
	profileImage: {
		width: '100%',
		height: '100%',
		borderWidth: 4,
		borderColor: colors.white,
	},
	userInfoWrapper: {
		marginTop: 12,
	},
	notFoundWrapper: {
		alignItems: 'center',
		padding: 36,
	},
	notFoundText: {
		fontFamily: fontFamily.medium,
		color: colors.gray700,
		fontSize: 15,
		textAlign: 'center',
		marginTop: 16,
	},
});
