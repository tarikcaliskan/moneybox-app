import { gql } from '@apollo/client';
import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import {
	Scalars,
	useCreatePostLikeMutation,
	useDeletePostLikeMutation,
	useGetPostByIdQuery,
	useGetPostUserWalletQuery,
	useUpdateRewardPostMutation,
} from '../../generated/graphql';
import { useAuth } from '../../store/auth';
import { defaultImages } from '../../utils/constants';
import { colors, fontFamily } from '../../utils/style';
import { showErrorToast } from '../../utils/toast';
import { PostLoader } from './Loader';

const CoinImage = require('../../assets/images/coin.png');

gql`
	query GetPostById($id: uuid!, $userId: uuid!) {
		post: posts_by_pk(id: $id) {
			id
			imageUrl
			myLike: likes(where: { userId: { _eq: $userId } }) {
				id
			}
			text
			createdAt
			user {
				id
				email
				fullName
				imageUrl
			}
		}
	}
`;

gql`
	mutation CreatePostLike($userId: uuid!, $postId: uuid!) {
		like: insert_likes_one(object: { userId: $userId, postId: $postId }) {
			id
			postId
			userId
		}
	}
`;

gql`
	mutation DeletePostLike($id: uuid!) {
		like: delete_likes_by_pk(id: $id) {
			id
			postId
			userId
		}
	}
`;

gql`
	query GetPostUserWallet($userId: uuid!) {
		wallet(where: { userId: { _eq: $userId } }) {
			id
			balance
		}
	}
`;

gql`
	mutation UpdateRewardPost($userId: uuid!, $amount: Int!) {
		update_wallet(where: { userId: { _eq: $userId } }, _set: { balance: $amount }) {
			returning {
				id
				balance
			}
		}
	}
`;

interface PostProps {
	postId: Scalars['uuid'];
	index: number;
}

export const Post: React.FC<PostProps> = ({ postId, index }) => {
	const { user: loggedInUser } = useAuth();
	const { data, loading, refetch } = useGetPostByIdQuery({ variables: { userId: loggedInUser?.id, id: postId } });
	const post = data?.post;
	const user = data?.post?.user;
	const isMe = user?.id === loggedInUser?.id;
	const isLiked = Boolean(post?.myLike[0]?.id);

	const { data: walletData } = useGetPostUserWalletQuery({ variables: { userId: user?.id } });
	const [rewardPost] = useUpdateRewardPostMutation();
	const [createLike] = useCreatePostLikeMutation();
	const [deleteLike] = useDeletePostLikeMutation();

	const onPressLike = async () => {
		try {
			if (isLiked) {
				const { errors } = await deleteLike({ variables: { id: post?.myLike[0]?.id } });
				if (errors) {
					showErrorToast();
					return;
				}
				await refetch();
				return;
			}
			const { errors } = await createLike({ variables: { userId: loggedInUser?.id, postId } });
			if (errors) {
				showErrorToast();
				return;
			}
			await refetch();
		} catch {
			showErrorToast();
		}
	};

	const onPressReward = async () => {
		const currentBalance = walletData?.wallet[0]?.balance;
		if (typeof currentBalance !== 'number') return showErrorToast();

		try {
			const { errors } = await rewardPost({ variables: { userId: post?.user.id, amount: currentBalance + 5 } });
			if (errors) return showErrorToast();

			Toast.show({
				type: 'success',
				text1: 'Teşekkürler!',
				text2: 'Ödüllendirmeniz başarıyla gerçekleştirildi.',
			});
		} catch {
			showErrorToast();
		}
	};

	if (loading) return <PostLoader index={index} />;

	return (
		<View style={[styles.container, { borderTopWidth: index === 0 ? 0 : 2 }]}>
			<View style={styles.headerWrapper}>
				<Image style={styles.userImage} source={{ uri: user?.imageUrl ?? defaultImages.profileAvatar }} />
				<View>
					<Text style={styles.fullName}>{user?.fullName}</Text>
					<Text style={styles.date}>{dayjs(post?.createdAt).format('MMM D, YYYY · HH:mm ')}</Text>
				</View>
			</View>
			<View style={styles.contentWrapper}>
				<Text style={styles.text}>{post?.text}</Text>
				{post?.imageUrl && <Image style={styles.postImage} source={{ uri: post?.imageUrl }} />}
			</View>
			<View style={styles.footerWrapper}>
				<TouchableOpacity onPress={onPressLike} style={styles.likeWrapper}>
					<Feather name="thumbs-up" size={24} color={isLiked ? colors.green500 : colors.gray700} />
					<Text style={[styles.likeText, { color: isLiked ? colors.green500 : colors.gray700 }]}>Beğen</Text>
				</TouchableOpacity>
				{!isMe && (
					<TouchableOpacity onPress={onPressReward} style={styles.prizeWrapper}>
						<Image style={styles.coinIcon} source={CoinImage} />
						<Text style={styles.prizeText}>Ödül (5 p.)</Text>
					</TouchableOpacity>
				)}
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
	fullName: {
		fontFamily: fontFamily.medium,
		fontSize: 16,
		color: colors.gray800,
	},
	text: {
		fontFamily: fontFamily.regular,
		color: colors.gray700,
		fontSize: 15,
	},
	date: {
		fontFamily: fontFamily.regular,
		color: colors.gray400,
		fontSize: 12,
		marginTop: 4,
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
	},
	likeText: {
		fontSize: 14,
		fontFamily: fontFamily.medium,
		marginLeft: 12,
	},
	prizeWrapper: {
		borderLeftWidth: 2,
		borderLeftColor: colors.gray300,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	prizeText: {
		fontSize: 14,
		color: colors.gray700,
		fontFamily: fontFamily.medium,
	},
	coinIcon: {
		width: 28,
		height: 28,
		marginRight: 12,
	},
});
