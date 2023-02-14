import Navigation from "../../../components/application/navigation";
import Bottomnav from "../../../components/application/bottomnav";
import Trainers from "../../../components/application/trainers";

function PersonalTrainers() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main className="border-b-2">
        <div className="flex flex-col text-center w-2/3 sm:w-full my-8 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">
            Our Personal Trainers
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Browse our personal trainers, they are happy to help you start your fitness journey.
          </p>
        </div>
        <Trainers />
      </main>
      <footer>
        <Bottomnav />
      </footer>
    </div>
  );
}

export default PersonalTrainers;
