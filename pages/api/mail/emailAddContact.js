const SibApiV3Sdk = require("sib-api-v3-sdk");
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

export default async function (req, res) {
	let contact = req.body;
	let apiInstance = new SibApiV3Sdk.ContactsApi();
	let createContact = new SibApiV3Sdk.CreateContact();

	createContact.email = contact.email;
	createContact.listIds = [6];
	createContact.attributes = {
		FIRSTNAME: contact.firstName,
		LASTNAME: contact.lastName,
	};

	apiInstance.createContact(createContact).then(
		function (data) {
			console.log(
				"API called successfully. Returned data: " + JSON.stringify(data)
			);
		},
		function (error) {
			console.error(error);
		}
	);
}
