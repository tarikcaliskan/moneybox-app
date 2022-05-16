import React from 'react';
import { Profile } from '../screens/Profile';
import { Search } from '../screens/Search';
import { Home } from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTabOptions } from './useTabOptions';
import { Relationships } from '../screens/Relationships';

const Tab = createBottomTabNavigator();

export const TabNavigation: React.FC = () => {
	const { getOptions } = useTabOptions();
	return (
		<Tab.Navigator initialRouteName="Home">
			<Tab.Screen name="Home" options={getOptions(Home)} component={Home} />
			<Tab.Screen name="Search" options={getOptions(Search)} component={Search} />
			<Tab.Screen name="Relationships" options={getOptions(Relationships)} component={Relationships} />
			<Tab.Screen name="Profile" options={getOptions(Profile)} component={Profile} />
		</Tab.Navigator>
	);
};
