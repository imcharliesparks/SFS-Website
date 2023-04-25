// TODO: Add linting to organize by type of export
import { NextApiRequest, NextApiResponse } from 'next'
import { Send } from 'express-serve-static-core'

// API Types
export enum APIMethods {
	POST = 'POST',
	GET = 'GET',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH'
}

export enum GeneralAPIResponses {
	FAILURE = 'FAILURE',
	INVALID_REQUEST_TYPE = 'INVALID_REQUEST_TYPE'
}

export enum AuthResponses {
	USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
	UNABLE_TO_SAVE_USER = 'UNABLE_TO_SAVE_USER',
	INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
	USER_CREATED = 'USER_CREATED',
	USER_NOT_FOUND = 'USER_NOT_FOUND',
	USER_DELETED = 'USER_DELETED',
	WRONG_PASSWORD = 'WRONG_PASSWORD',
	UNABLE_TO_DELETE_USER = 'UNABLE_TO_DELETE_USER',
	UNABLE_TO_FIND_USER = 'UNABLE_TO_FIND_USER',
	UNAUTHORIZED = 'UNAUTHORIZED'
}

export enum EntityReponses {
	ENTITY_NOT_FOUND = 'ENTITY_NOT_FOUND',
	UNABLE_TO_SAVE_ENTITY = 'UNABLE_TO_SAVE_ENTITY',
	ENTITY_CREATED = 'ENTITY_CREATED',
	ENTITY_UPDATED = 'ENTITY_UPDATED',
	ENTITY_DELETED = 'ENTITY_DELETED',
	ENTITY_FOUND = 'ENTITY_FOUND',
	UNABLE_TO_UPDATE_ENTITY = 'UNABLE_TO_UPDATE_ENTITY',
	UNABLE_TO_DELETE_ENTITY = 'UNABLE_TO_DELETE_ENTITY'
}

export enum NextAuthStatues {
	AUTHENTICATED = 'authenticated',
	UNAUTHENTICATED = 'unauthenticated',
	LOADING = 'loading'
}

export enum APIStatuses {
	SUCCESS = 'SUCCESS',
	ERROR = 'ERROR'
}

export enum UserRoles {
	DEVELOPER = 'DEVELOPER',
	ADMIN = 'ADMIN',
	USER = 'USER'
}

export enum FormErrors {
	INVALID_EMAIL = 'INVALID_EMAIL'
}

export type CredentialSignin = {
	username: string
	password: string
}

export type CredentialedSignUp = {
	email: string
	password: string
	firstName: string
	lastName: string
}

export type CredentialedSignIn = {
	email: string
	password: string
}

export type CardButton = {
	text: string
	action: () => void
}

export enum ServicesOffered {
	WEB = 'WEB',
	NATIVE = 'NATIVE',
	NOT_SURE = 'NOT_SURE'
}

export type ContactFormInput = {
	name: string
	email: string
	companyName?: string
	phone?: string
	message?: string
}

export type ApplicationFormInput = {
	firstName: string
	lastName: string
	serviceDesired: ServicesOffered
	companyName?: string
	website?: string
	email: string
	phone?: string
}

export interface TypedRequest<T> extends NextApiRequest {
	body: T
}

export interface TypedResponse<T> extends NextApiResponse {
	json: Send<T, this>
}

export enum CollectionNames {
	CONTACT = 'contact'
}

export enum DocumentResponses {
	DATA_FOUND = 'DATA_FOUND',
	DATA_NOT_FOUND = 'DATA_NOT_FOUND',
	DATA_DELETED = 'DATA_DELETED',
	DATA_UPDATED = 'DATA_UPDATED',
	DATA_CREATED = 'DATA_CREATED',
	DATA_NOT_CREATED = 'DATA_NOT_CREATED'
}
