import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { client } from './src/clients/hasura';
import {
	useFonts,
	Poppins_300Light,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_600SemiBold,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { ApolloProvider } from '@apollo/client';
import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_300Light,
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	React.useEffect(() => {
		const prepare = async () => await SplashScreen.preventAutoHideAsync();
		prepare();
	}, []);

	if (!fontsLoaded) {
		return null;
	}
	LogBox.ignoreAllLogs(); //Ignore all log notifications

	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<Routes />
				<Toast />
				<StatusBar style="auto" />
			</NavigationContainer>
		</ApolloProvider>
	);
}
