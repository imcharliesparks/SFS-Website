import { NextApiRequest, NextApiResponse } from 'next'
import { APIMethods, APIStatuses, ContactFormInput, EntityReponses, GeneralAPIResponses } from '../../shared/types'
import { connectToMongoDB } from '../../lib/db'
import { ContactInputForm } from '../../models/ContactInput'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, body } = req

	if (method !== APIMethods.POST) {
		return res.status(404).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.INVALID_REQUEST_TYPE })
	}

	try {
		await connectToMongoDB()

		const contactInput: ContactFormInput = body.contactFormInput
		const contactInputForm = new ContactInputForm(contactInput)
		const newContactInput = await contactInputForm.save()

		return contactInputForm === newContactInput
			? res.status(201).json({
					status: APIStatuses.SUCCESS,
					type: EntityReponses.ENTITY_CREATED,
					data: { entityId: contactInputForm._id.toString() }
			  })
			: res.status(400).json({ status: APIStatuses.ERROR, type: EntityReponses.UNABLE_TO_SAVE_ENTITY })
	} catch (e) {
		console.log('e', e)
		res.status(400).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.FAILURE, data: { error: e } })
	}

	return res.status(404).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.FAILURE })
}

export default handler
