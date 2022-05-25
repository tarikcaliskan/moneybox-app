import { gql } from 'graphql-request';
import jwt from 'jsonwebtoken';
import { request } from '../client/hasura';
import {
	GetLoggedInUserQuery,
	GetLoggedInUserQueryVariables,
	RegisterUserMutation,
	RegisterUserMutationVariables,
} from '../generated/graphql';
import { HandlerRequest, HandlerResponse, JwtAuthPayload } from '../utils/types';
import { hash } from 'argon2';
import { JWT_MAX_AGE, JWT_SECRET } from '../utils/constants';
import { v4 } from 'uuid';
import { LoggedInUser } from './login';

type RegisterInputArgs = {
	input: {
		args: {
			fullName: string;
			email: string;
			password: string;
		};
	};
};

type RegisterResponseBody = {
	token?: string;
	error?: string;
};

const RegisterUser = gql`
	mutation RegisterUser($user: user_insert_input!) {
		user: insert_user_one(object: $user) {
			id
			email
			fullName
			imageUrl
		}
	}
`;

export const register = async (req: HandlerRequest<RegisterInputArgs>, res: HandlerResponse<RegisterResponseBody>) => {
	console.log('[register] Processing...');
	const { email, password, fullName } = req.body.input.args;

	if (!email || !password || !fullName) {
		console.log('[register] Email, password and full name are required.', { email, fullName });
		res.send({ error: 'Email, password and full name are required.' });
	}

	const { users } = await request<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>(LoggedInUser, {
		email,
	});

	const loggedInUser = users[0];

	if (loggedInUser) {
		console.log('[register] This user does exists.', { loggedInUser });
		res.send({ error: 'This user does exists. Please log in instead.' });
		return;
	}

	const hashedPassword = await hash(password);
	const { user } = await request<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUser, {
		user: {
			id: v4(),
			email,
			password: hashedPassword,
			fullName,
		},
	});

	if (!user) {
		console.log('[register] Could not create a user.', { user });
		res.send({ error: 'An error occured, please try again later.' });
		return;
	}

	const jwtPayload: JwtAuthPayload = {
		id: user.id,
		email: user.email,
		fullName: user.fullName,
		imageUrl: user.imageUrl,
		expiresIn: JWT_MAX_AGE,
	};
	const token = jwt.sign(jwtPayload, JWT_SECRET, { expiresIn: JWT_MAX_AGE });
	console.log('[register] User registered successfully.', { jwtPayload, user });

	res.send({ token });
};
