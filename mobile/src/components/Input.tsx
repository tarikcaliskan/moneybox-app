import React from 'react';
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '../utils/style';
import { Control, Controller } from 'react-hook-form';
type InputProps = TextInputProps & {
	styleOverrides?: {
		container?: StyleProp<TextStyle>;
		input?: StyleProp<TextStyle>;
		label?: StyleProp<ViewStyle>;
	};
	control: Control<any, object>;
	name: string;
	label?: string;
	error?: string;
};

export const Input: React.FC<InputProps> = ({ styleOverrides, label, name, control, error, ...props }) => {
	const inputStyle = React.useMemo(() => [styles.input, styleOverrides?.input], [styleOverrides]);
	const labelStyle = React.useMemo(() => [styles.label, styleOverrides?.label], [styleOverrides]);

	return (
		<View style={styleOverrides?.container}>
			{label && <Text style={labelStyle}>{label}</Text>}
			<Controller
				control={control}
				rules={{ required: true }}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						style={inputStyle}
						{...props}
						placeholderTextColor={colors.gray400}
					/>
				)}
				name={name}
			/>
			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		fontFamily: fontFamily.semibold,
		borderColor: colors.gray200,
		backgroundColor: colors.gray50,
		color: colors.gray600,
		fontSize: 16,
		borderWidth: 1.5,
		borderRadius: 16,
		paddingRight: 16,
		paddingBottom: 16,
		paddingTop: 16,
		paddingLeft: 16,
	},
	label: {
		fontFamily: fontFamily.semibold,
		color: colors.gray500,
		fontSize: 16,
		marginBottom: 8,
	},
	error: {
		color: colors.primary,
		fontSize: 13,
		marginTop: 4,
	},
});
