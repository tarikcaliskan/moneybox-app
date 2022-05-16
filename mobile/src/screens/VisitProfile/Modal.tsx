import { gql } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import { Button } from '../../components/Button';
import { Select } from '../../components/Select';
import {
	GetProfileDetailQuery,
	GetProfileRelationshipQuery,
	useProfileCreateUserRelationshipMutation,
	User_Relationship_Type_Enum as UserRelationshipTypeEnum,
} from '../../generated/graphql';
import { useAuth } from '../../store/auth';
import { colors } from '../../utils/style';
import { showErrorToast } from '../../utils/toast';

gql`
	mutation ProfileCreateUserRelationship($loggedInUserId: uuid!, $userId: uuid!, $type: user_relationship_type_enum!) {
		relationship: insert_user_relationship_one(
			object: { userId: $userId, connectedUserId: $loggedInUserId, relationshipType: $type }
		) {
			id
			connectedUserId
			userId
			relationshipType
			verified
		}
	}
`;

interface ModalProps {
	isModalVisible: boolean;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
	user: GetProfileDetailQuery['user'];
	userRelationship?: GetProfileRelationshipQuery['userRelationship'][0];
	refetch: () => Promise<void>;
}

const relationshipTypes = Object.keys(UserRelationshipTypeEnum).map((i) => ({
	label: i === 'Mother' ? 'Anne' : 'Baba',
	value: i.toLowerCase(),
}));

export const RelationshipModal: React.FC<ModalProps> = ({
	isModalVisible,
	setIsModalVisible,
	userRelationship,
	user,
	refetch,
}) => {
	const { user: loggedInUser } = useAuth();
	const [relationshipType, setRelationshipType] = React.useState<UserRelationshipTypeEnum>();
	const [createUserRelationship, { loading }] = useProfileCreateUserRelationshipMutation();

	const { params } = useRoute<any>();

	const onSubmitPress = async () => {
		if (userRelationship?.id || !loggedInUser?.id || !params.userId || !relationshipType) return;

		const { data, errors } = await createUserRelationship({
			variables: { loggedInUserId: loggedInUser.id, userId: user?.id, type: relationshipType },
		});
		if (errors) {
			showErrorToast();
			return;
		}
		if (data?.relationship) {
			await refetch();
			Toast.show({
				type: 'success',
				text1: 'Bağlantı isteği başarıyla gönderildi.',
			});
			setIsModalVisible(false);
		}
	};

	return (
		<View style={styles.modalWrapper}>
			<Modal isVisible={isModalVisible}>
				<View style={styles.modalContent}>
					<Ionicons style={styles.closeIcon} name="close-outline" size={32} onPress={() => setIsModalVisible(false)} />
					<Select
						label="Bağlantı türü:"
						placeholder="Bağlantı türünü seçiniz"
						items={relationshipTypes}
						onValueChange={(value) => setRelationshipType(value)}
					/>
					<Button
						disabled={loading}
						title="Onayla"
						styleOverrides={{ container: styles.submitButtonContainer }}
						onPress={onSubmitPress}
					/>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	modalContent: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.white,
		paddingVertical: 72,
		paddingHorizontal: 32,
		position: 'relative',
		borderRadius: 24,
	},
	modalWrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	closeIcon: {
		position: 'absolute',
		top: 12,
		right: 12,
	},
	submitButtonContainer: {
		marginTop: 16,
		width: '100%',
	},
});
