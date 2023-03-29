export default async function emailAddContact(req, res) {
	let contact = req.body;
	const url = "https://api.sendinblue.com/v3/contacts";
	const email = contact.email;
	const listIds = [6];

	const headers = {
		"Content-Type": "application/json",
		"api-key": process.env.SENDINBLUE_API_KEY,
	};

	fetch(`${url}/${email}`, {
		method: "GET",
		headers,
	})
		.then((response) => {
			if (response.ok) {
				// Handle existing contact
				console.log("Email already exists.");
				res.status(200).json({ message: "Email already exists." });
			} else if (response.status === 404) {
				// Handle new contact
				const payload = {
					email,
					listIds,
					attributes: {
						FIRSTNAME: contact.firstName,
						LASTNAME: contact.lastName,
					},
				};
				fetch(url, {
					method: "POST",
					headers,
					body: JSON.stringify(payload),
				})
					.then((response) => {
						if (response.ok) {
							console.log("Contact created successfully.");
							return res
								.status(200)
								.json({ message: "Contact created successfully." });
						} else {
							response.json().then((data) => {
								const errorMessage = data.message;
								console.log(`Error creating contact: ${errorMessage}`);
								return res
									.status(500)
									.json({ message: `Error creating contact: ${errorMessage}` });
							});
						}
					})
					.catch((error) => {
						console.log(`Error creating contact: ${error.message}`);
						return res
							.status(500)
							.json({ message: `Error creating contact: ${errorMessage}` });
					});
			} else {
				response.json().then((data) => {
					const errorMessage = data.message;
					console.log(`Error retrieving contact: ${errorMessage}`);
					return res
						.status(500)
						.json({ message: `Error creating contact: ${errorMessage}` });
				});
			}
		})
		.catch((error) => {
			console.log(`Error retrieving contact: ${error.message}`);
			return res
				.status(500)
				.json({ message: `Error creating contact: ${errorMessage}` });
		});
}
