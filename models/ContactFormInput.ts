import { Schema, model, models } from 'mongoose'
import { ServicesOffered } from '../shared/types'

export interface IContactInputForm {
	_id?: string
	firstName: string
	lastName: string
	serviceDesired: ServicesOffered
	companyName?: string
	website?: string
	createdAt?: Date
}

const contactInputFormSchema = new Schema<IContactInputForm>({
	firstName: String,
	lastName: String,
	serviceDesired: String,
	companyName: {
		type: String,
		required: false
	},
	website: {
		type: String,
		required: false
	},
	createdAt: {
		type: Date,
		required: true,
		default: new Date()
	}
})

export const ContactInputForm = models.ContactInputForm || model('ContactInputForm', contactInputFormSchema)
