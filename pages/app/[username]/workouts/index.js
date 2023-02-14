import WorkoutList from "../../../../components/application/workout-list";
import Navigation from "../../../../components/application/navigation";
import Bottomnav from "../../../../components/application/bottomnav";

import { useState, useEffect } from "react";


function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/api/workouts")
      .then((response) => response.json())
      .then((data) => {
        setWorkouts(data.workouts);
      });
  }, []);

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="border-b-2">
        <div className="flex flex-col text-center w-2/3 sm:w-full my-8 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">Workouts</h1>
          <p className="w-2/3 mx-auto leading-relaxed text-base">
            Browse our individual workouts, you can create a new workout using
            the New Workout button. After creation it will show in the list
            below and on your profile page.
          </p>
        </div>
        <WorkoutList items={workouts} />
      </main>
      <footer>
        <Bottomnav />
      </footer>
    </div>
  );
}

export default Workouts;
