import React from 'react';
import { Input } from '../components/Input';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { Button } from '../components/Button';
import { colors, fontFamily } from '../utils/style';
import { AuthPattern, Logo } from '../assets/svg';

import { ParamListBase, useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { gql, useApolloClient } from '@apollo/client';
import { useCreateWalletMutation, useRegisterUserMutation } from '../generated/graphql';
import jwtDecode from 'jwt-decode';
import { UserType, useAuth, JwtTokenType } from '../store/auth';
import { useForm } from '../hooks/useForm';
import Nope from 'nope-validator';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showErrorToast } from '../utils/toast';
import Toast from 'react-native-toast-message';

type RegisterFormInputs = {
	email: string;
	fullName: string;
	password: string;
};

gql`
	mutation RegisterUser($user: RegisterInput!) {
		register(args: $user) {
			error
			token
		}
	}
`;

gql`
	mutation CreateWallet($userId: uuid!) {
		insert_wallet_one(object: { userId: $userId }) {
			id
			userId
			balance
		}
	}
`;

const schema = Nope.object().shape({
	email: Nope.string().email('Lütfen geçerli bir email giriniz.').required('Email alanı boş bırakılamaz.'),
	password: Nope.string().required('Şifre alanı boş bırakılamaz.'),
	fullName: Nope.string().required('İsim soyisim boş bırakılamaz.'),
});

export const Register: React.FC = () => {
	const { setToken, setTokenExpiresIn, setUser } = useAuth();
	const { control, errors, handleSubmit } = useForm<RegisterFormInputs>({ schema });
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

	const [register, { loading }] = useRegisterUserMutation();
	const [createWallet, { loading: walletLoading }] = useCreateWalletMutation();
	const onRegisterClick = async (form: RegisterFormInputs) => {
		try {
			const { data, errors } = await register({ variables: { user: form } });
			const token = data?.register?.token;
			if (errors || !token) return showErrorToast();

			const decodedToken = jwtDecode<JwtTokenType>(token);
			setToken(token);
			const { errors: walletError } = await createWallet({ variables: { userId: decodedToken.id } });
			if (walletError) return showErrorToast();

			setTokenExpiresIn(decodedToken.expiresIn);
			setUser({
				id: decodedToken.id,
				fullName: decodedToken.fullName,
				email: decodedToken.email,
			});

			Toast.show({
				type: 'success',
				text1: 'Kayıt başarılı',
				text2: 'Hesabınız oluşturuldu.',
			});
		} catch {
			showErrorToast();
		}
	};

	return (
		<>
			<ScreenContainer styleOverrides={{ page: { marginBottom: 96, justifyContent: 'space-between' } }}>
				<View style={styles.logoContainer}>
					<Logo width={42} />
					<View>
						<Text style={styles.logoText}>Dijital</Text>
						<Text style={styles.logoText}>Kumbaram</Text>
					</View>
				</View>
				<View>
					<View style={styles.headingWrapper}>
						<Text style={styles.title}>Merhaba,</Text>
						<Text style={styles.subtitle}>
							Kumbaranız cebinizde! Lütfen kayıt olmak için aşağıdaki formu doldurunuz.
						</Text>
					</View>
					<KeyboardAwareScrollView>
						<Input
							name="fullName"
							control={control}
							error={errors.fullName?.message}
							label="İsim Soyisim"
							placeholder="İsim soyisim giriniz"
						/>
						<Input
							name="email"
							control={control}
							error={errors.email?.message}
							styleOverrides={{ container: { marginTop: 24 } }}
							label="Email"
							placeholder="Email adresinizi giriniz"
						/>
						<Input
							control={control}
							error={errors.password?.message}
							name="password"
							secureTextEntry
							label="Şifre"
							styleOverrides={{ container: { marginTop: 24 } }}
							placeholder="Şifrenizi giriniz"
						/>
						<Button
							disabled={loading || walletLoading}
							styleOverrides={{ container: { marginTop: 32 } }}
							title="Kayıt ol"
							onPress={handleSubmit(onRegisterClick)}
						/>
						<Button
							styleOverrides={{
								container: { marginTop: 12, backgroundColor: 'transparent' },
								title: { color: colors.primary },
							}}
							title="veya giriş yapın"
							onPress={() => navigation.replace('Login')}
						/>
					</KeyboardAwareScrollView>
				</View>

				<View />
			</ScreenContainer>
			<AuthPattern style={styles.pattern} width={'100%'} />
		</>
	);
};

const styles = StyleSheet.create({
	headingWrapper: {
		marginBottom: 24,
		marginTop: 24,
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 24,
		color: colors.gray600,
	},
	logoContainer: {
		marginTop: 16,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoText: {
		fontFamily: fontFamily.bold,
		fontSize: 21,
		lineHeight: 28,
		marginLeft: 8,
		color: colors.gray700,
	},
	subtitle: {
		fontFamily: fontFamily.medium,
		fontSize: 14,
		marginTop: 4,
		color: colors.gray400,
	},
	pattern: {
		flex: 1,
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: -590,
	},
});
