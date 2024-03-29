import { Schema, model, models } from 'mongoose'
import { ServicesOffered } from '../shared/types'

export interface IApplicationInputForm {
	_id?: string
	firstName: string
	lastName: string
	serviceDesired: ServicesOffered
	companyName?: string
	website?: string
	email: string
	phone?: string
	createdAt?: Date
}

const ApplicationInputFormSchema = new Schema<IApplicationInputForm>({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	serviceDesired: {
		type: String,
		required: false
	},
	companyName: {
		type: String,
		required: false
	},
	website: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: false
	},
	createdAt: {
		type: Date,
		default: new Date()
	}
})

export const ApplicationInputForm =
	models.ApplicationInputForm || model('ApplicationInputForm', ApplicationInputFormSchema)
