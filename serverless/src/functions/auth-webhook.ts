import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/constants';
import { HandlerRequest, HandlerResponse, JwtAuthPayload } from '../utils/types';

export const webhook = (req: HandlerRequest, res: HandlerResponse) => {
	console.log('[auth-webhook] Processing...');
	const hasuraToken = req.get('Authorization');
	if (!hasuraToken) {
		console.log('[auth-webhook] Could not find a hasura token.', { hasuraToken });
		return res.send({ 'X-Hasura-Role': 'public' });
	}

	const user = jwt.verify(hasuraToken || '', JWT_SECRET) as JwtAuthPayload;
	const hasuraResponse = { 'X-Hasura-Role': user?.id ? 'user' : 'public', 'X-Hasura-User-Id': user.id };
	console.log('[auth-webhook] Successfully authenticated user.', { hasuraResponse });

	return res.send(hasuraResponse);
};
