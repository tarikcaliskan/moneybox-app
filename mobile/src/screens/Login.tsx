import React from 'react';
import { Input } from '../components/Input';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { Button } from '../components/Button';
import { colors, fontFamily } from '../utils/style';
import { AuthPattern, Logo } from '../assets/svg';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { gql } from '@apollo/client';
import Nope from 'nope-validator';
import { useForm } from '../hooks/useForm';
import { JwtTokenType, useAuth } from '../store/auth';
import { useLoginUserMutation } from '../generated/graphql';
import jwtDecode from 'jwt-decode';
import { showErrorToast } from '../utils/toast';
import Toast from 'react-native-toast-message';

type LoginFormInputs = {
	email: string;
	password: string;
};

gql`
	mutation LoginUser($user: LoginInput!) {
		login(args: $user) {
			error
			token
		}
	}
`;

const schema = Nope.object().shape({
	email: Nope.string().email('Lütfen geçerli bir email giriniz.').required('Email alanı boş bırakılamaz.'),
	password: Nope.string().required('Şifre alanı boş bırakılamaz.'),
});

export const Login: React.FC = () => {
	const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
	const { setToken, setTokenExpiresIn, setUser } = useAuth();
	const { control, errors, handleSubmit } = useForm<LoginFormInputs>({ schema });
	const [login, { loading }] = useLoginUserMutation();

	const onLoginClick = async (form: LoginFormInputs) => {
		try {
			const { data, errors } = await login({ variables: { user: form } });
			const token = data?.login?.token;
			if (errors || !token) return showErrorToast();

			const decodedToken = jwtDecode<JwtTokenType>(token);
			setToken(token);
			setTokenExpiresIn(decodedToken.expiresIn);
			setUser({
				id: decodedToken.id,
				fullName: decodedToken.fullName,
				email: decodedToken.email,
			});
			Toast.show({
				type: 'success',
				text1: 'Giriş başarılı',
				text2: 'Hoşgeldiniz, yönlendiriliyorsunuz...',
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
						<Text style={styles.title}>Hoş geldiniz,</Text>
						<Text style={styles.subtitle}>Kumbaranıza erişmek için lütfen giriş yapınız.</Text>
					</View>
					<Input
						name="email"
						control={control}
						error={errors.email?.message}
						label="Email"
						placeholder="Email adresinizi giriniz"
					/>
					<Input
						name="password"
						control={control}
						error={errors.password?.message}
						label="Şifre"
						secureTextEntry
						styleOverrides={{ container: { marginTop: 24 } }}
						placeholder="Şifrenizi giriniz"
					/>
					<Button
						disabled={loading}
						styleOverrides={{ container: { marginTop: 32 } }}
						title="Giriş"
						onPress={handleSubmit(onLoginClick)}
					/>
					<Button
						styleOverrides={{
							container: { marginTop: 12, backgroundColor: 'transparent' },
							title: { color: colors.primary },
						}}
						title="veya kayıt olun"
						onPress={() => navigation.replace('Register')}
					/>
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
	},
	title: {
		fontFamily: fontFamily.bold,
		fontSize: 36,
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
		fontSize: 16,
		marginTop: 4,
		color: colors.gray400,
	},
	pattern: {
		flex: 1,
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: -550,
	},
});
