import { Ionicons } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Relationships } from '../screens/Relationships';
import { Search } from '../screens/Search';
import { useAuth } from '../store/auth';
import { colors } from '../utils/style';
import { commonOptions } from './utils';

type UseTabOptionsReturnType = {
	getOptions: (component: React.FC) => BottomTabNavigationOptions;
};

export function useTabOptions(): UseTabOptionsReturnType {
	const { setToken, setTokenExpiresIn, setUser } = useAuth();
	const onPressLogout = React.useCallback(() => {
		setToken(undefined);
		setTokenExpiresIn(undefined);
		setUser(undefined);
		Toast.show({
			type: 'success',
			text1: 'Çıkış başarılı',
		});
	}, [setToken, setTokenExpiresIn, setUser]);

	const getOptions = React.useCallback(
		(component: React.FC): BottomTabNavigationOptions => {
			switch (component) {
				case Home:
					return {
						...commonOptions,
						headerTitle: 'Ana sayfa',
						tabBarLabel: 'Ana sayfa',
						tabBarIcon: ({ color }) => <Ionicons name="md-home-outline" size={24} color={color} />,
					};
				case Search:
					return {
						...commonOptions,
						headerTitle: 'Arama',
						tabBarLabel: 'Arama',
						tabBarIcon: ({ color }) => <Ionicons name="search-outline" size={24} color={color} />,
					};
				case Relationships:
					return {
						...commonOptions,
						headerTitle: 'Bağlantılar',
						tabBarLabel: 'Bağlantılar',
						tabBarIcon: ({ color }) => <Ionicons name="people-outline" size={24} color={color} />,
					};
				case Profile:
					return {
						...commonOptions,
						tabBarLabel: 'Kumbaram',
						headerTitle: 'Kumbaram',
						headerRight: () => (
							<Ionicons
								color={colors.white}
								style={styles.logout}
								name="log-out-outline"
								onPress={onPressLogout}
								size={24}
							/>
						),
						tabBarIcon: ({ color }) => <Ionicons name="wallet-outline" size={24} color={color} />,
					};
				default:
					return commonOptions;
			}
		},
		[commonOptions, onPressLogout]
	);

	return { getOptions };
}

const styles = StyleSheet.create({
	logout: {
		marginRight: 16,
	},
});
