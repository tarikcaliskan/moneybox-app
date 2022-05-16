import { Request, Response } from 'express';
import { GetLoggedInUserQuery } from '../generated/graphql';

export type HandlerRequest<T = any> = Request<any, any, T>;
export type HandlerResponse<T = any> = Response<T>;

export type JwtAuthPayload = Pick<GetLoggedInUserQuery['users'][0], 'id' | 'email' | 'fullName' | 'imageUrl'> & {
	expiresIn: number;
};
