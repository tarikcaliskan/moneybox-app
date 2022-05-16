import React from 'react';
import {
	Button as ButtonComponent,
	ButtonProps as ButtonComponentProps,
	Pressable,
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { colors, convertHexToRGBA, fontFamily } from '../utils/style';

type ButtonProps = {
	title: string;
	onPress?: () => void;
	disabled?: boolean;
	styleOverrides?: {
		container?: StyleProp<ViewStyle>;
		title?: StyleProp<TextStyle>;
	};
};

export const Button: React.FC<ButtonProps> = ({ title, onPress, styleOverrides, disabled }) => {
	return (
		<TouchableOpacity
			disabled={disabled}
			activeOpacity={0.4}
			style={[styles.button, styleOverrides?.container, disabled ? styles.disabled : []]}
			onPress={onPress}
		>
			<Text style={[styles.title, styleOverrides?.title]}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 16,
		paddingVertical: 17,
		paddingHorizontal: 16,
		justifyContent: 'center',
		flexDirection: 'row',
		display: 'flex',
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 16,
		color: colors.white,
	},

	disabled: {
		backgroundColor: convertHexToRGBA(colors.primary, 0.3),
	},
});
