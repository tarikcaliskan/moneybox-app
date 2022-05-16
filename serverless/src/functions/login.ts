import { gql } from 'graphql-request';
import jwt from 'jsonwebtoken';
import { request } from '../client/hasura';
import { GetLoggedInUserQuery, GetLoggedInUserQueryVariables } from '../generated/graphql';
import { HandlerRequest, HandlerResponse, JwtAuthPayload } from '../utils/types';
import { verify } from 'argon2';
import { JWT_MAX_AGE, JWT_SECRET } from '../utils/constants';

type LoginInputArgs = {
	input: {
		args: {
			email: string;
			password: string;
		};
	};
};

type LoginResponseBody = {
	token?: string;
	error?: string;
};

export const LoggedInUser = gql`
	query GetLoggedInUser($email: String!) {
		users: user(where: { email: { _eq: $email } }) {
			id
			email
			fullName
			password
			imageUrl
		}
	}
`;

export const login = async (req: HandlerRequest<LoginInputArgs>, res: HandlerResponse<LoginResponseBody>) => {
	console.log('[login] Processing...');
	const { email, password } = req.body.input.args;

	if (!email || !password) {
		console.log('[login] Email and password are required.', { email });
		res.send({ error: 'Email and password are required.' });
	}

	const { users } = await request<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>(LoggedInUser, {
		email,
	});

	const loggedInUser = users[0];
	if (!loggedInUser) {
		console.log('[login] Email or password is incorrect.', { email });
		res.send({ error: 'Email or password is incorrect.' });
		return;
	}

	const isPasswordCorrect = await verify(loggedInUser.password, password);
	if (!isPasswordCorrect) {
		console.log('[login] Email or password is incorrect.', { email });
		res.send({ error: 'Email or password is incorrect.' });
		return;
	}

	const jwtPayload: JwtAuthPayload = {
		id: loggedInUser.id,
		email: loggedInUser.email,
		fullName: loggedInUser.fullName,
		imageUrl: loggedInUser.imageUrl,
		expiresIn: JWT_MAX_AGE,
	};
	const token = jwt.sign(jwtPayload, JWT_SECRET, { expiresIn: JWT_MAX_AGE });
	console.log('[login] Successfully logged in.', { jwtPayload, loggedInUser });

	res.send({ token, error: null });
};
