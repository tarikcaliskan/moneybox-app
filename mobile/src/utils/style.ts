export const colors = {
	// GRAY
	gray50: '#f9fafb',
	gray100: '#f3f4f6',
	gray200: '#e5e7eb',
	gray300: '#d1d5db',
	gray400: '#9ca3af',
	gray500: '#6b7280',
	gray600: '#4b5563',
	gray700: '#374151',
	gray800: '#1f2937',
	gray900: '#111827',

	// CORE
	white: '#ffffff',
	black: '#000000',
	primary: '#fd0054',

	// GREEN
	green500: '#22c55e',

	// RED
	red500: '#ef4444',
} as const;

export const fontFamily = {
	light: 'Poppins_300Light',
	regular: 'Poppins_400Regular',
	medium: 'Poppins_500Medium',
	semibold: 'Poppins_600SemiBold',
	bold: 'Poppins_700Bold',
} as const;

export function convertHexToRGBA(hex: string, alpha: number) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	return `rgb(${r}, ${g}, ${b})`;
}
