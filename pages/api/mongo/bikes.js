import { MongoClient } from "mongodb";
export default async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;
		const client = await MongoClient.connect(process.env.MONGODB_URI);
		const db = client.db();
		const bikeCollection = db.collection("trade_bikes");
		const result = await bikeCollection.insertOne(data);
		console.log(result);
		client.close();
		res.status(201).json({ message: "Data inserted successfully!" });
	}
}
