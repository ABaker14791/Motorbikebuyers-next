var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function confirmation(req, res) {
	const user = req.body;
	var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

	sendSmtpEmail = {
		to: [
			{
				email: user.email,
				name: user.firstName,
			},
		],
		templateId: 8,
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
