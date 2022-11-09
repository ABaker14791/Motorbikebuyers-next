import fetch from "node-fetch";

export default async function (req, res) {
  const registrationNumber = req.body;
  // const sure = {
  //   registrationNumber: "re15dwf",
  // };

  try {
    const response = await fetch(
      "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      {
        method: "post",
        headers: {
          "x-api-key": process.env.DVLA_ENQUIRY_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registrationNumber: registrationNumber }),
      }
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
