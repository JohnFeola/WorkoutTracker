import Bottomnav from "../../../../components/application/bottomnav";
import Navigation from "../../../../components/application/navigation";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

function SingleWorkoutPage() {
  const [workouts, setWorkouts] = useState([]);
  const router = useRouter();
  const query = router.query;
  const workoutID = query.workoutid;

  var workoutName = "";
  var workoutDifficulty = "";
  var workoutDescription = "";
  var workoutImage = "";

  useEffect(() => {
    fetch("/api/workouts")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data.workouts);
      });
  }, []);

  workouts.map((item) => {
    if (item._id === workoutID) {
      workoutName = item.name;
      workoutDifficulty = item.difficulty;
      workoutDescription = item.description;
      workoutImage = item.image_link;
    }
  });

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="border-b-2">
        <div className="overflow-hidden bg-white border-[1px] border-black shadow sm:rounded-lg max-w-3xl mx-auto my-20">
          <Image src={workoutImage} width={760} height={480} alt="" />
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Workout</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {workoutName}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Difficulty(1-5)
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {workoutDifficulty}
                </dd>
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Workout Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {workoutDescription}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
      <footer>
        <Bottomnav />
      </footer>
    </div>
  );
}

export default SingleWorkoutPage;
