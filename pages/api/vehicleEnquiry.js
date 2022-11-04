import fetch from "node-fetch";

export async function fetchDetails(registration) {
  const body = {
    registrationNumber: registration,
  };
  try {
    const response = await fetch(
      "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
      {
        method: "post",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "QvRdRSChk540ubGHaItvy5ANmcQxbuyYa3CkWqm4",
        },
      }
    );
    const bikeDetails = await response.json();
    console.log(bikeDetails);
    return bikeDetails;
  } catch (error) {
    throw new Error(error);
  }
}
