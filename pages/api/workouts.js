import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const workoutName = req.body.name;
    const workoutDescription = req.body.description;
    const workoutDifficulty = req.body.difficulty;
    const workoutImage = req.body.image_link;
    const workoutUserOwn = req.body.user_own;

    const client = await MongoClient.connect(
      "mongodb+srv://towson_connect:catBanana123@apollo.mjvgd.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("WorkoutApp");

    var size = await db.collection("Workouts").count();
    var sizeString = size.toString();

    await db.collection("Workouts").insertOne(
      { workout_id: sizeString, 
        name: workoutName,
        description: workoutDescription,
        difficulty: workoutDifficulty,
        image_link: workoutImage,
        user_own: workoutUserOwn
      });
    res.status(201).json({ message: "Created New Workout!" });
  }

  if (req.method === "GET") {
    
    const client = await MongoClient.connect(
      "mongodb+srv://towson_connect:catBanana123@apollo.mjvgd.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("WorkoutApp");

    const documents = await db.collection("Workouts").find().toArray();
    res.status(201).json({ workouts: documents });
  }
}

export default handler;