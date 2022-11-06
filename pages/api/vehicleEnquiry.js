import fetch from "node-fetch";

export default async function handler(req, res) {
  const body = {
    registrationNumber: req,
  };
  try {
    const response = await fetch(
      "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "QvRdRSChk540ubGHaItvy5ANmcQxbuyYa3CkWqm4",
        },
      }
    );
    res = await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
