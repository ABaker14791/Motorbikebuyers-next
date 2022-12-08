const { bindKey } = require("cypress/types/lodash");
var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(bike); // SendSmtpEmail | Values to send a transactional email

sendSmtpEmail = {
	to: [
		// need to add a dynamic recipitent
		{
			email: "testmail@example.com",
			name: "John Doe",
		},
	],
	templateId: 6,
	params: {
		// set up all bike details params
		registration: bike.registration,
		name: "John",
		surname: "Doe",
	},
	// headers: {
	// 	"X-Mailin-custom":
	// 		"custom_header_1:custom_value_1|custom_header_2:custom_value_2",
	// },
};

apiInstance.sendTransacEmail(sendSmtpEmail).then(
	function (data) {
		console.log("API called successfully. Returned data: " + data);
	},
	function (error) {
		console.error(error);
	}
);
