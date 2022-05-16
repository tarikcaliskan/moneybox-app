import { gql } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Toast from 'react-native-toast-message';
import {
	Scalars,
	useGetUserRelationshipByIdQuery,
	User_Relationship_Type_Enum as UserRelationshipTypeEnum,
	useUpdateUserRelationshipStatusMutation,
} from '../../generated/graphql';
import { defaultImages } from '../../utils/constants';
import { fontFamily, colors } from '../../utils/style';
import { showErrorToast } from '../../utils/toast';
import { RelationshipItemLoader } from './Loader';

gql`
	query GetUserRelationshipById($id: uuid!) {
		userRelationships: user_relationship_by_pk(id: $id) {
			id
			verified
			rejected
			relationshipType
			connectedUser {
				id
				imageUrl
				fullName
			}
		}
	}
`;

gql`
	mutation UpdateUserRelationshipStatus($id: uuid!, $verified: Boolean!, $rejected: Boolean!) {
		userRelationship: update_user_relationship_by_pk(
			pk_columns: { id: $id }
			_set: { verified: $verified, rejected: $rejected }
		) {
			id
			verified
		}
	}
`;

interface RelationshipItemProps {
	relationshipId: Scalars['uuid'];
	index: number;
	refetch: () => Promise<void>;
}

const getRelationshipTypeText = (relationshipType?: UserRelationshipTypeEnum) => {
	switch (relationshipType) {
		case UserRelationshipTypeEnum.Father:
			return 'Baba';
		case UserRelationshipTypeEnum.Mother:
			return 'Anne';
	}
};

export const RelationshipItem: React.FC<RelationshipItemProps> = ({ relationshipId, index, refetch }) => {
	const { data, loading } = useGetUserRelationshipByIdQuery({ variables: { id: relationshipId } });
	const relationship = data?.userRelationships;
	const [updateRelationshipMutation] = useUpdateUserRelationshipStatusMutation();
	if (loading) return <RelationshipItemLoader index={index} />;

	const onPress = async (verified: boolean) => {
		if (typeof relationship?.verified !== 'boolean' || typeof relationship?.rejected !== 'boolean')
			return showErrorToast();

		const status = verified
			? { verified: true, rejected: relationship?.rejected }
			: { rejected: true, verified: relationship?.verified };

		try {
			const { data, errors } = await updateRelationshipMutation({
				variables: {
					id: relationshipId,
					...status,
				},
			});
			if (errors) return showErrorToast();

			if (data?.userRelationship?.id) {
				await refetch();
				Toast.show({
					type: 'success',
					text1: 'Bağlantı isteği başarıyla güncellendi.',
				});
			}
		} catch {
			showErrorToast();
		}
	};

	return (
		<View style={[styles.listItemWrapper, { borderTopWidth: index === 0 ? 0 : 2 }]}>
			<View style={styles.listItemInnerWrapper}>
				<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<Image
						style={styles.userImage}
						source={{ uri: relationship?.connectedUser?.imageUrl ?? defaultImages.profileAvatar }}
					/>
					<View>
						<Text style={styles.fullName}>{relationship?.connectedUser?.fullName}</Text>
						<Text style={styles.relationshipType}>
							Bağlantı türü: {getRelationshipTypeText(relationship?.relationshipType)}
						</Text>
					</View>
				</View>
				<View style={styles.rightWrapper}>
					<Ionicons
						onPress={() => onPress(false)}
						style={{ marginRight: 10 }}
						name="close-circle"
						color={colors.red500}
						size={32}
					/>
					<Ionicons onPress={() => onPress(true)} name="checkmark-circle" color={colors.green500} size={32} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	fullName: {
		fontSize: 15,
		fontFamily: fontFamily.regular,
		color: colors.gray700,
	},
	relationshipType: {
		fontFamily: fontFamily.regular,
		color: colors.gray500,
		fontSize: 13,
		marginTop: 4,
	},
	userImage: {
		width: 48,
		height: 48,
		marginRight: 16,
		borderRadius: 100,
	},
	listItemWrapper: {
		minWidth: '100%',
		borderColor: colors.gray100,
	},
	listItemInnerWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 24,
	},
	rightWrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
});
