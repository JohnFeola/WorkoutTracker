import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;

    const client = await MongoClient.connect(
      "mongodb+srv://towson_connect:catBanana123@apollo.mjvgd.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("WorkoutApp");

    await db.collection("Users").insertOne(
      { username: username, 
        password: password,
        first_name: firstName,
        last_name: lastName
      });

      res.status(201).json({ message: "Signed up!" });
  }

  if (req.method === "GET") {
    
    const client = await MongoClient.connect(
      "mongodb+srv://towson_connect:catBanana123@apollo.mjvgd.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("WorkoutApp");

    const documents = await db.collection("Users").find().toArray();
    res.status(201).json({ users: documents });
  }
}

export default handler;