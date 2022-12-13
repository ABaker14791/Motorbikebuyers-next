var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function (req, res) {
	const bike = req.body;
	var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

	sendSmtpEmail = {
		to: [
			{
				email: "sales@themotorbikebuyers.co.uk",
				name: "Charlie Hopkins",
			},
		],
		templateId: 6,
		params: {
			// bike details params for dynamic content
			registration: bike.registration,
			Manufacturer: bike.manufacturer,
			model: bike.model,
			year: bike.year,
			mileage: bike.mileage,
			serviceHistory: bike.serviceHistory,
			keeper: bike.keeper,
			finance: bike.finance,
			stolen: bike.stolen,
			condition: bike.condition,
			name: bike.name,
			email: bike.email,
			phone: bike.phone,
		},
	};
	try {
		apiInstance.sendTransacEmail(sendSmtpEmail).then(
			function (data) {
				console.log("API called successfully. Returned data: " + data);
			},
			function (error) {
				console.error(error);
			}
		);
	} catch (err) {
		res.status(500).json({ error: "failed to send email" });
	}
}
