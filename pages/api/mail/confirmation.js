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
	if (req.method === "POST") {
		try {
			apiInstance.sendTransacEmail(sendSmtpEmail).then(
				function (data) {
					return res.status(200).json({
						success: true,
						message: "Confirmation Email sent successfully.",
					});
				},
				function (error) {
					console.error(error);
				}
			);
		} catch (err) {
			return res.status(500).json({ error: "Failed to send email." });
		}
	} else {
		return res.status(500).json({ error: "Failed to send email." });
	}
}
