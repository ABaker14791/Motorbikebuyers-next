const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

export default async function emailAddContact(req, res) {
	let contact = req.body;
	let apiInstance = new SibApiV3Sdk.ContactsApi();
	let createContact = new SibApiV3Sdk.CreateContact();

	createContact.email = contact.email;
	createContact.listIds = [6];
	createContact.attributes = {
		FIRSTNAME: contact.firstName,
		LASTNAME: contact.lastName,
	};

	if (req.method === "POST") {
		apiInstance.createContact(createContact).then(
			function (data) {
				return res
					.status(200)
					.json({ success: true, message: "Contact added successfully" });
			},
			function (error) {
				console.error(error);
				return res.status(500).json({ error: "Failed to add contact." });
			}
		);
	} else {
		return res.status(500).json({ error: "Failed to add contact." });
	}
}
