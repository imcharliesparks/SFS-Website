import { NextApiRequest, NextApiResponse } from 'next'
import { APIMethods, APIStatuses, ContactFormInput, EntityReponses, GeneralAPIResponses } from '../../shared/types'
import { connectToMongoDB } from '../../lib/db'
import { ApplicationInputForm } from '../../models/ApplicationInput'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method, body } = req

	if (method !== APIMethods.POST) {
		return res.status(404).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.INVALID_REQUEST_TYPE })
	}

	try {
		await connectToMongoDB()

		const applicationInput: ContactFormInput = body
		const applicationInputForm = new ApplicationInputForm(applicationInput)
		const newApplicationInput = await applicationInputForm.save()

		return applicationInputForm === newApplicationInput
			? res.status(201).json({
					status: APIStatuses.SUCCESS,
					type: EntityReponses.ENTITY_CREATED,
					data: { entityId: applicationInputForm._id.toString() }
			  })
			: res.status(400).json({ status: APIStatuses.ERROR, type: EntityReponses.UNABLE_TO_SAVE_ENTITY })
	} catch (e) {
		console.log('e', e)
		res.status(400).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.FAILURE, data: { error: e } })
	}

	return res.status(404).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.FAILURE })
}

export default handler
