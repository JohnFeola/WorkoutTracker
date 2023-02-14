import Navigation from "../../../components/application/navigation";
import Bottomnav from "../../../components/application/bottomnav";
import ProgramDescription from "./ProgramDescription";

function Programs() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main style={{backgroundColor: "white"}}>
        <ProgramDescription title="Upper Body Workout 1" intensity={3} imgSrc={"https://www.belson.com/Images/Target-Muscles-Detail-005-C.jpg"} ex1={"-Bench Press: 4 x 5"} ex2={"-Lateral Raises: 5 x 10"} ex3={"-Military Press: 4 x 8"} ex4 = {"-Inverted Rows: 3 x 12"} ex5= {"-Bicep Curls: 6 x 12"} ex6={"-Sit-ups : 4 x 25"}/>
        <ProgramDescription title="Lower Body Workout 1" intensity={5} imgSrc={'https://www.belson.com/Images/Target-Muscles-Detail-027-C.jpg'} ex1={"-Deadlift: 4 x 5"} ex2={"-Squats: 5 x 5"} ex3={"-Lunges: 5 x 10"} ex4 = {"-Calf Raises: 5 x 25"} ex5= {"-Front Squat: 2 x 5"} ex6={"-Leg Extensions: 4 x 10"}/>
        <ProgramDescription title="Upper Body Workout 2" intensity={4} imgSrc={'https://www.belson.com/Images/Target-Muscles-Detail-038-C.jpg'} ex1={"-Pullups: 5 x 5"} ex2={"-Push-ups: 5 x 10"} ex3={"-Inverted Rows: 3 x 10"} ex4 = {"-Lateral Raises: 3 x 10"} ex5= {"-Tricep Extensions: 4 x 8"} ex6={"-Leg Curls: 3 x 10"}/>
      </main>
      <footer>
        <Bottomnav />
      </footer>
    </div>
  );
}

export default Programs;