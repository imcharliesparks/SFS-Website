import {
	APIMethods,
	APIStatuses,
	CollectionNames,
	ContactFormInput,
	DocumentResponses,
	GeneralAPIResponses,
	TypedRequest
} from '../../shared/types'
import { NextApiResponse } from 'next'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import firebase_app from '../../lib/firebase'

// TODO: Add shape validation here?
const handler = async (req: TypedRequest<ContactFormInput>, res: NextApiResponse) => {
	const { method, body } = req
	const db = getFirestore(firebase_app)
	const collectionRef = collection(db, CollectionNames.CONTACT)
	const mailRef = collection(db, 'mail')

	if (method !== APIMethods.POST) {
		return res.status(404).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.INVALID_REQUEST_TYPE })
	}

	try {
		const documentRef = await addDoc(collectionRef, body)
		await addDoc(mailRef, {
			to: 'charlie@sparksfullstack.io',
			message: {
				subject: 'New Contact Form Submission',
				text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`
			}
		})

		if (documentRef.id) {
			res.status(201).json({
				status: APIStatuses.SUCCESS,
				type: DocumentResponses.DATA_CREATED,
				data: { user: { id: documentRef.id, ...body } }
			})
		} else {
			console.error('e', DocumentResponses.DATA_NOT_CREATED)
			res.status(400).json({
				status: APIStatuses.ERROR,
				type: DocumentResponses.DATA_NOT_CREATED,
				data: { error: 'Could not create contact' }
			})
		}
	} catch (e) {
		console.error('e', e)
		res.status(400).json({ status: APIStatuses.ERROR, type: GeneralAPIResponses.FAILURE, data: { error: e } })
	}
}

export default handler
