import { gql } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, View, StyleSheet, Text, ListRenderItem, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';
import { PostLoader } from '../components/Post/Loader';
import { ScreenContainer } from '../components/ScreenContainer';
import { HomePostsQuery, useHomePostsQuery } from '../generated/graphql';
import { useAuth } from '../store/auth';
import { createShimmerArray } from '../utils/array';
import { colors, fontFamily } from '../utils/style';

gql`
	query HomePosts($userId: uuid!) {
		posts(
			order_by: { createdAt: desc }
			where: { _or: [{ userId: { _eq: $userId } }, { user: { relationships: { connectedUserId: { _eq: $userId } } } }] }
		) {
			id
			text
		}
	}
`;

export const Home: React.FC = ({}) => {
	const { user } = useAuth();
	const { data, loading } = useHomePostsQuery({ variables: { userId: user?.id } });
	const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();
	const loadingView = (
		<FlatList data={createShimmerArray(8)} renderItem={({ index }) => <PostLoader index={index} />} />
	);

	const notFoundView = (
		<View style={styles.notFoundWrapper}>
			<Ionicons name="planet-outline" size={96} color={colors.gray700} />
			<Text style={styles.notFoundText}>Burası çok ıssız. Yeni bağlantılar kurarak gönderiler görebilirsin.</Text>
		</View>
	);

	const renderItem: ListRenderItem<HomePostsQuery['posts'][0]> = ({ item, index }) => {
		return <Post postId={item?.id} index={index} />;
	};

	return (
		<ScreenContainer styleOverrides={{ page: styles.pageWrapper }}>
			<View style={styles.pageInnerWrapper}>
				{data?.posts.length ? (
					<FlatList data={data?.posts} renderItem={renderItem} />
				) : loading ? (
					loadingView
				) : (
					notFoundView
				)}
			</View>
			<TouchableOpacity onPress={() => navigate('CreatePost')} style={styles.createPostButton}>
				<Ionicons name="create-outline" color={colors.white} size={28} />
			</TouchableOpacity>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	pageWrapper: {
		justifyContent: 'flex-start',
		marginVertical: 0,
		marginHorizontal: 0,
	},
	pageInnerWrapper: {
		alignItems: 'center',
		flex: 1,
	},

	notFoundWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 24,
	},
	notFoundText: {
		fontFamily: fontFamily.medium,
		color: colors.gray700,
		fontSize: 15,
		textAlign: 'center',
		marginTop: 16,
	},
	createPostButton: {
		position: 'absolute',
		bottom: 20,
		right: 32,
		height: 64,
		width: 64,
		flex: 1,
		paddingBottom: 2,
		paddingLeft: 2,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
		borderRadius: 250,
	},
});
