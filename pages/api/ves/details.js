import fetch from "node-fetch";

export default async function details(req, res) {
	const registrationNumber = req.body;

	try {
		const response = await fetch(
			"https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
			{
				method: "POST",
				headers: {
					"x-api-key": process.env.DVLA_ENQUIRY_KEY,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ registrationNumber: registrationNumber }),
			}
		);
		const data = await response.json();

		return res.status(200).json(data);
	} catch (err) {
		return res.status(500).json({ error: "failed to load data" });
	}
}
