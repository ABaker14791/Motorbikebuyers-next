const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// Sendinblue config

var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;
// Instantiate the client
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;
var apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
var emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

// Make the call to the client
apiInstance.createEmailCampaign(emailCampaigns).then(
  function (data) {
    console.log("API called successfully. Returned data: " + data);
  },
  function (error) {
    console.error(error);
  }
);

// Sendgrid config
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;
// sgMail.setApiKey(API_KEY);

// Functions

// Sends vehicle details to The Motorbike Buyers email
exports.detailsEmail = functions.firestore
  .document("/bikes/{documentId}")
  .onCreate((snap, context) => {
    const newBike = snap.data();
    const msg = {
      to: "abakermtb@gmail.com", // change to sales@buyers
      from: "sales@themotorbikebuyers.co.uk", // change to motorbike buyers verified domain

      template_id: TEMPLATE_ID,
      dynamic_template_data: {
        subject: `A New ${newBike.Manufacturer} valuation request!`,
        registration: newBike.registration,
        Manufacturer: newBike.Manufacturer,
        model: newBike.model,
        year: newBike.year,
        mileage: newBike.mileage,
        serviceHistory: newBike.serviceHistory,
        keeper: newBike.keeper,
        finance: newBike.finance,
        stolen: newBike.stolen,
        condition: newBike.condition,
        name: newBike.name,
        email: newBike.email,
        phone: newBike.phone,
      },
    };
    return sgMail.send(msg); // TODO: add try catch here
    // (async () => {
    //   try {
    //     await sgMail.send(msg);
    //   } catch (error) {
    //     console.error(error);

    //     if (error.response) {
    //       console.error(error.response.body)
    //     }
    //   }
    // })();
  });

//   Sends a confirmation Email after user submits their details
exports.confirmEmail = functions.firestore
  .document("/bikes/{documentId}")
  .onCreate((snap, context) => {
    const clientBike = snap.data();
    const msg = {
      to: clientBike.email,
      from: "adam_baker@live.co.uk", // Change to verified domain
      subject: "Thank you for submitting your details",
      template_id: "d-8b9791f7ef354d9e875a8c61cc32a9ee", // need to be te other template, how?
    };
    return sgMail.send(msg);
  });
