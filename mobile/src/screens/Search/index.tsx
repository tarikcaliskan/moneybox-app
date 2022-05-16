import React from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { ScreenContainer } from '../../components/ScreenContainer';
import { useAuth } from '../../store/auth';
import { colors, fontFamily } from '../../utils/style';
import { StyleSheet } from 'react-native';
import { Input } from '../../components/Input';
import { useForm } from '../../hooks/useForm';
import Nope from 'nope-validator';
import { Ionicons } from '@expo/vector-icons';
import { gql } from '@apollo/client';
import { SearchUserIdsByNameQuery, useSearchUserIdsByNameQuery } from '../../generated/graphql';
import { SearchItem } from './Item';
import { SearchItemLoader } from './Loader';
import { createShimmerArray } from '../../utils/array';

gql`
	query SearchUserIdsByName($query: String!, $userId: uuid!) {
		user(where: { fullName: { _ilike: $query }, id: { _neq: $userId } }) {
			id
		}
	}
`;

const schema = Nope.object().shape({ query: Nope.string() });

export const Search: React.FC = () => {
	const { control, watch } = useForm({ schema });
	const { user } = useAuth();

	const query = watch('query');
	const { data, loading } = useSearchUserIdsByNameQuery({
		variables: { userId: user?.id, query: `%${(query?.length ? query : 'a').toLowerCase().trim()}%` },
		skip: !user?.id,
	});

	const renderItem: ListRenderItem<SearchUserIdsByNameQuery['user'][0]> = ({ item, index }) => {
		return <SearchItem userId={item?.id} index={index} />;
	};

	const loadingView = (
		<FlatList
			style={styles.userList}
			data={createShimmerArray(8)}
			renderItem={({ index }) => <SearchItemLoader index={index} />}
		/>
	);

	const notFoundView = (
		<View style={styles.notFoundWrapper}>
			<Ionicons name="planet-outline" size={96} color={colors.gray700} />
			<Text style={styles.notFoundText}>Maalesef aradığınız kelimelere göre bir sonuç bulunamadı.</Text>
		</View>
	);

	return (
		<ScreenContainer styleOverrides={{ page: styles.profileWrapper }}>
			<View style={styles.profileInnerWrapper}>
				<Input
					name="query"
					styleOverrides={{
						container: { width: '90%', marginTop: 16 },
						input: { paddingVertical: 12, position: 'relative' },
					}}
					control={control}
					placeholder="Arama"
				/>
				<Ionicons size={24} style={styles.searchIcon} color={colors.gray400} name="search" />
				{data?.user.length ? (
					<FlatList style={styles.userList} data={data?.user} renderItem={renderItem} />
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
	profileWrapper: {
		justifyContent: 'flex-start',
		marginVertical: 0,
		marginHorizontal: 0,
	},
	profileInnerWrapper: {
		alignItems: 'center',
		flex: 1,
	},
	userList: {
		marginVertical: 24,
	},
	searchIcon: {
		backgroundColor: colors.gray50,
		position: 'absolute',
		top: 32,
		right: 36,
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
