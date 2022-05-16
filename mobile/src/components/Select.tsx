import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors, fontFamily } from '../utils/style';
import RNPickerSelect, { Item } from 'react-native-picker-select';

interface SelectProps {
	items: Item[];
	onValueChange: (value: any, index: number) => void;
	placeholder?: string;
	label?: string;
}

export const Select: React.FC<SelectProps> = ({ items, placeholder, onValueChange, label }) => {
	const selectPlaceholder = React.useMemo(
		() => ({ label: placeholder, value: null, color: colors.gray600 }),
		[placeholder]
	);

	const selectStyles = React.useMemo(
		() => ({
			viewContainer: styles.container,
			placeholder: styles.placeholder,
			inputIOS: styles.input,
			inputAndroid: styles.input,
		}),
		[styles]
	);

	return (
		<>
			{label && <Text style={styles.label}>{label}</Text>}
			<RNPickerSelect
				style={selectStyles}
				placeholder={selectPlaceholder}
				onValueChange={onValueChange}
				items={items}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		paddingVertical: 14,
		paddingHorizontal: 16,
		minWidth: '80%',
		borderColor: colors.gray300,
		borderRadius: 16,
		backgroundColor: colors.gray50,
	},
	placeholder: {
		color: colors.gray500,
		fontFamily: fontFamily.medium,
	},
	input: {
		color: colors.gray500,
		fontFamily: fontFamily.medium,
		fontSize: 16,
	},
	label: {
		fontFamily: fontFamily.medium,
		marginBottom: 12,
		fontSize: 16,
		color: colors.gray600,
	},
});
