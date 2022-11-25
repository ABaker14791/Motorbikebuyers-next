const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// Sendgrid config
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

// Functions

// Sends vehcile details to The Motorbike Buyers email
exports.detailsEmail = functions.firestore
  .document("/bikes/{documentId}")
  .onCreate((snap, context) => {
    const newBike = snap.data();
    const msg = {
      to: newBike.email, // change to sales@buyers
      from: "adam_baker@live.co.uk", // change to motorbike buyers verified domain

      template_id: TEMPLATE_ID,
      dynamic_template_data: {
        subject: `A New ${newBike.Manufacturer} valuation request!`,
        registration: newBike.registration,
        Manufacturer: newBike.Manufacturer,
        model: newBike.modelyear,
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
    return sgMail.send(msg);
  });

//   Sends a confirmation Email after user submits their details
exports.confirmEmail = functions.firestore
  .document("/bikes/{documentId}")
  .onCreate((snap, context) => {
    const clientBike = snap.data();
    const msg = {
      to: clientBike.email,
      from: "adam_baker@live.co.uk", // Change to verified domain
      template_id: "d-8b9791f7ef354d9e875a8c61cc32a9ee", // need to be te other template, how?
    };
    return sgMail.send(msg);
  });
