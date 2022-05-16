import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

import { Register } from '../screens/Register';
import { Login } from '../screens/Login';

import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../store/auth';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, fontFamily } from '../utils/style';
import { VisitProfile } from '../screens/VisitProfile';
import { commonOptions } from './utils';
import { TabNavigation } from './TabNavigation';
import { CreatePost } from '../screens/CreatePost';

const Stack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const authOptions = { headerShown: false };

export const Routes: React.FC = () => {
	const { token, setToken, setTokenExpiresIn, setUser } = useAuth();
	const isLoggedIn = token;
	const { goBack } = useNavigation();
	React.useEffect(() => {
		// TODO: check if token is expired and refresh it, otherwise redirect to login
		const hide = async () => await SplashScreen.hideAsync();
		const timeout = setTimeout(hide, 2000);
		return () => clearTimeout(timeout);
	}, []);

	const options = React.useCallback(
		(headerTitle: string) => ({
			...commonOptions,
			headerTitle,
			headerLeft: () => <Ionicons color={colors.white} name="chevron-back" size={24} onPress={() => goBack()} />,
		}),
		[goBack]
	);

	return (
		<>
			{isLoggedIn ? (
				<AppStack.Navigator>
					<Stack.Screen name="TabView" options={{ headerShown: false }} component={TabNavigation} />
					<Stack.Screen name="VisitProfile" options={options('Profil')} component={VisitProfile} />
					<Stack.Screen name="CreatePost" options={options('Gönderi oluştur')} component={CreatePost} />
				</AppStack.Navigator>
			) : (
				<Stack.Navigator initialRouteName="Register">
					<Stack.Screen options={authOptions} name="Login" component={Login} />
					<Stack.Screen options={authOptions} name="Register" component={Register} />
				</Stack.Navigator>
			)}
		</>
	);
};
