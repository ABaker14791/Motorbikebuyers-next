const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();

export default async function emailAddContact(req, res) {
	let contact = req.body;
	let createContact = new SibApiV3Sdk.CreateContact();

	createContact = {
		email: contact.email,
		listIds: [6],
		// attributes: {
		// FIRSTNAME: contact.firstName,
		// LASTNAME: contact.lastName,
		// EMAIL: contact.email,
		// },
	};

	if (req.method === "POST") {
		try {
			apiInstance.createContact(createContact).then(
				function (data) {
					return res.status(200).json({
						success: true,
						message: "Contact added successfully",
					});
				},
				function (error) {
					console.error(error);
				}
			);
		} catch (err) {
			return res
				.status(500)
				.json({ error2: "Failed to add contact.", errorMessage: err });
		}
	} else {
		return res.status(500).json({ error3: "Failed to add contact." });
	}
}
