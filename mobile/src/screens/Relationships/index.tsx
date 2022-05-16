import React from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { ScreenContainer } from '../../components/ScreenContainer';
import { useAuth } from '../../store/auth';
import { colors, fontFamily } from '../../utils/style';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gql } from '@apollo/client';
import { GetUserRelationshipsQuery, useGetUserRelationshipsQuery } from '../../generated/graphql';
import { RelationshipItem } from './Item';
import { RelationshipItemLoader } from './Loader';
import { createShimmerArray } from '../../utils/array';
import Toast from 'react-native-toast-message';

gql`
	query GetUserRelationships($userId: uuid!) {
		userRelationships: user_relationship(
			where: { userId: { _eq: $userId }, verified: { _eq: false }, rejected: { _eq: false } }
		) {
			id
		}
	}
`;

export const Relationships: React.FC = () => {
	const { user } = useAuth();
	const { data, loading, refetch } = useGetUserRelationshipsQuery({ variables: { userId: user?.id } });

	const refetchRelationships = async () => {
		await refetch({ userId: user?.id });
	};

	const renderItem: ListRenderItem<GetUserRelationshipsQuery['userRelationships'][0]> = ({ item, index }) => {
		return <RelationshipItem refetch={refetchRelationships} relationshipId={item?.id} index={index} />;
	};

	const loadingView = (
		<FlatList
			style={styles.userList}
			data={createShimmerArray(8)}
			renderItem={({ index }) => <RelationshipItemLoader index={index} />}
		/>
	);

	const notFoundView = (
		<View style={styles.notFoundWrapper}>
			<Ionicons name="people-outline" size={96} color={colors.gray700} />
			<Text style={styles.notFoundText}>Şu an için bir bağlantı isteğiniz yok.</Text>
		</View>
	);

	return (
		<ScreenContainer styleOverrides={{ page: styles.screenContainer }}>
			<View style={styles.innerWrapper}>
				{data?.userRelationships.length ? (
					<FlatList style={styles.userList} data={data?.userRelationships} renderItem={renderItem} />
				) : loading ? (
					loadingView
				) : (
					notFoundView
				)}
			</View>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	screenContainer: {
		justifyContent: 'flex-start',
		marginVertical: 0,
		marginHorizontal: 0,
	},
	innerWrapper: {
		alignItems: 'center',
		flex: 1,
	},
	userList: {
		marginTop: 12,
		marginBottom: 24,
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
});
