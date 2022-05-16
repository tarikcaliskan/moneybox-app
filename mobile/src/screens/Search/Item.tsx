import { gql } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Scalars, SearchUserIdsByNameQuery, useSearchUserByIdQuery } from '../../generated/graphql';
import { defaultImages } from '../../utils/constants';
import { fontFamily, colors } from '../../utils/style';
import { SearchItemLoader } from './Loader';

gql`
	query SearchUserById($id: uuid!) {
		user: user_by_pk(id: $id) {
			id
			email
			fullName
			imageUrl
		}
	}
`;

interface SearchItemProps {
	userId: Scalars['uuid'];
	index: number;
}

export const SearchItem: React.FC<SearchItemProps> = ({ userId, index }) => {
	const { data, loading } = useSearchUserByIdQuery({ variables: { id: userId } });
	const user = data?.user;
	const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
	if (loading) return <SearchItemLoader index={index} />;

	const onSearchItemPress = () => {
		navigate('VisitProfile', { userId: user?.id });
	};

	return (
		<TouchableOpacity
			onPress={onSearchItemPress}
			style={[styles.listItemWrapper, { borderTopWidth: index === 0 ? 0 : 2 }]}
		>
			<Image style={styles.userImage} source={{ uri: user?.imageUrl ?? defaultImages.profileAvatar }} />
			<View>
				<Text style={styles.fullName}>{user?.fullName}</Text>
				<Text style={styles.email}>{user?.email}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	fullName: {
		fontFamily: fontFamily.regular,
		color: colors.gray700,
	},
	email: {
		fontFamily: fontFamily.regular,
		color: colors.gray400,
		fontSize: 12,
		marginTop: 4,
	},
	userImage: {
		width: 48,
		height: 48,
		marginRight: 16,
		borderRadius: 100,
	},
	listItemWrapper: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: colors.gray100,
		minWidth: '100%',
		paddingVertical: 20,
		paddingHorizontal: 24,
	},
});
