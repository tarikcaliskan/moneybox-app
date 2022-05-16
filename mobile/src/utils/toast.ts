import Toast from 'react-native-toast-message';

export const showErrorToast = () =>
	Toast.show({
		type: 'error',
		text1: 'Bir hata oluştu',
		text2: 'Lütfen daha sonra tekrar deneyiniz. 😢',
	});
