import Bottomnav from "../../../components/application/bottomnav";
import Navigation from "../../../components/application/navigation";
import WorkoutList from "../../../components/application/workout-list";

import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

function UserDashboard() {
  const router = useRouter();
  const query = router.query;
  const username = query.username;

  const [workouts, setWorkouts] = useState([]);
  
  var useTheseWorkouts = [];

  useEffect(() => {
    fetch("/api/workouts")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data.workouts);
      });
  }, []);

  workouts.map((item) => {
    if (item.user_own) {
      if (item.user_own == username) {
        useTheseWorkouts.push(item);
      }
    }
  })

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="border-b-2">
        <div className="flex flex-col text-center w-2/3 sm:w-full my-8 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">Personal Workouts</h1>
          <p className="w-2/3 mx-auto leading-relaxed text-base">
            Browse your individually created workouts.
          </p>
        </div>
        <WorkoutList items={useTheseWorkouts} />
      </main>
      <footer>
        <Bottomnav />
      </footer>
    </div>
  );
}

export default UserDashboard;
