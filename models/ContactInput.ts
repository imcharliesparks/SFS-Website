import { Schema, model, models } from 'mongoose'

export interface IContactInputForm {
	_id?: string
	name: string
	companyName?: string
	email: string
	phone?: string
	createdAt?: Date
}

const ContactInputFormSchema = new Schema<IContactInputForm>({
	name: {
		type: String,
		required: true
	},
	companyName: {
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

export const ContactInputForm = models.ContactInputForm || model('ContactInputForm', ContactInputFormSchema)
