import React from 'react';
import {
	Image,
	Keyboard,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	ActivityIndicator,
} from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAuth } from '../store/auth';
import { colors } from '../utils/style';
import { StyleSheet } from 'react-native';
import { gql } from '@apollo/client';
import { useCreatePostMutation, useHomePostsQuery } from '../generated/graphql';
import { Input } from '../components/Input';
import { useForm } from '../hooks/useForm';
import Nope from 'nope-validator';
import { Button } from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { showErrorToast } from '../utils/toast';
import { uploadBase64ToCloudinary } from '../clients/cloudinary';
import Toast from 'react-native-toast-message';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

gql`
	mutation CreatePost($userId: uuid!, $text: String!, $imageUrl: String) {
		post: insert_posts_one(object: { text: $text, userId: $userId, imageUrl: $imageUrl }) {
			id
			text
			userId
			imageUrl
		}
	}
`;

const schema = Nope.object().shape({
	text: Nope.string().required('Lütfen bir metin giriniz.'),
});

type CreatePostFormInputs = {
	text: string;
};

export const CreatePost: React.FC = () => {
	const [image, setImage] = React.useState<string | null>(null);
	const [imageUrl, setImageUrl] = React.useState<string | null>(null);
	const { control, handleSubmit } = useForm<CreatePostFormInputs>({ schema });
	const { user: loggedInUser } = useAuth();
	const [isImageLoading, setIsImageLoading] = React.useState(false);
	const [createPost] = useCreatePostMutation();
	const { refetch } = useHomePostsQuery({ variables: { userId: loggedInUser?.id } });
	const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	const onPressSubmit = async (form: CreatePostFormInputs) => {
		try {
			const { errors } = await createPost({ variables: { text: form.text, userId: loggedInUser?.id, imageUrl } });
			if (errors) return showErrorToast();
			await refetch();
			Toast.show({
				type: 'success',
				text2: 'Gönderiniz başarıyla oluşturuldu.',
			});
			navigate('Home');
		} catch {
			showErrorToast();
		}
	};
	const onImageUploadPress = async () => {
		setIsImageLoading(true);
		try {
			const response = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				base64: true,
				quality: 1,
			});

			if (!response.cancelled && response.base64) {
				const publicUrl = await uploadBase64ToCloudinary(response.base64);
				setImage(response.base64);
				setImageUrl(publicUrl);
				setIsImageLoading(false);
				return;
			}
		} catch {
			showErrorToast();
			setIsImageLoading(false);
		}
	};

	return (
		<ScreenContainer styleOverrides={{ page: styles.profileWrapper }}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.profileInnerWrapper}>
				<View style={styles.profileInnerWrapper}>
					<Input
						styleOverrides={{ container: { width: '100%' }, input: { height: 200 } }}
						label="Gönderi metni"
						control={control}
						placeholder="Metin giriniz"
						name="text"
						multiline
						numberOfLines={10}
					/>
					{imageUrl ? (
						<TouchableOpacity onPress={onImageUploadPress} style={styles.imageWrapper}>
							<Image style={styles.image} source={{ uri: imageUrl }} />
						</TouchableOpacity>
					) : isImageLoading ? (
						<View style={styles.loadingWrapper}>
							<ActivityIndicator />
						</View>
					) : (
						<TouchableOpacity onPress={onImageUploadPress} style={styles.uploadButton}>
							<Ionicons name="image" color={colors.gray500} size={32} />
							<Text style={styles.uploadText}>Fotoğraf yüklemek tıklayınız</Text>
						</TouchableOpacity>
					)}
					<Button
						styleOverrides={{ container: styles.buttonContainer }}
						title="Paylaş"
						onPress={handleSubmit(onPressSubmit)}
					/>
				</View>
			</TouchableWithoutFeedback>
		</ScreenContainer>
	);
};

const styles = StyleSheet.create({
	profileWrapper: {
		justifyContent: 'flex-start',
		marginVertical: 0,
		marginHorizontal: 0,
	},
	profileInnerWrapper: {
		paddingHorizontal: 24,
		paddingVertical: 24,
		alignItems: 'center',
		position: 'relative',
	},
	imageWrapper: {
		marginTop: 16,
		height: 140,
		borderRadius: 12,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		height: '100%',
		width: '100%',
		borderRadius: 12,
	},
	uploadText: {
		marginTop: 12,
		color: colors.gray500,
		fontWeight: '500',
	},
	uploadButton: {
		marginTop: 16,
		borderRadius: 12,
		height: 140,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.gray100,
		borderColor: colors.gray200,
		borderWidth: 2,
	},
	loadingWrapper: {
		height: 140,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		marginTop: 24,
		width: '100%',
	},
});
