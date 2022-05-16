import create from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../generated/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserType = Pick<User, 'id' | 'email' | 'fullName' | 'imageUrl'>;
export type JwtTokenType = User & {
	expiresIn: number;
	iat: number;
	exp: number;
};

type AuthState = {
	user?: UserType;
	tokenExpiresIn?: number;
	token?: string;
	setUser: (user?: UserType) => void;
	setToken: (token?: string) => void;
	setTokenExpiresIn: (expiresIn?: number) => void;
};

export const useAuth = create<AuthState>(
	persist(
		(set) => ({
			setUser: (user) => set((state) => ({ ...state, user })),
			setToken: (token) => set((state) => ({ ...state, token })),
			setTokenExpiresIn: (tokenExpiresIn) => set((state) => ({ ...state, tokenExpiresIn })),
		}),
		{
			name: 'auth-store',
			getStorage: () => AsyncStorage,
		}
	)
);
