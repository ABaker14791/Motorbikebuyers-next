export default async function handler(req, res) {
  const registrationNumber = req.body.registration;

  try {
    const response = await fetch(
      "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.DVLA_ENQUIRY_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registrationNumber }),
      }
    );
    data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
