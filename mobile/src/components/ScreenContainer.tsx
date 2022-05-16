import React from 'react';
import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type ScreenContainerProps = {
	styleOverrides?: {
		safeArea?: StyleProp<ViewStyle>;
		page?: StyleProp<ViewStyle>;
	};
};

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, styleOverrides }) => {
	return (
		<SafeAreaView style={[styles.safeArea, styleOverrides?.safeArea]}>
			<View style={[styles.page, styleOverrides?.page]}>{children}</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		backgroundColor: '#fff',
		flex: 1,
	},
	page: {
		marginHorizontal: 32,
		marginVertical: 24,
		justifyContent: 'center',
		flex: 1,
	},
});
