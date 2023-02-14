import Navigation from "../../../components/application/navigation";
import Bottomnav from "../../../components/application/bottomnav";
import Lives from "../../../components/application/lives";

function LiveClasses() {
  return (
    <div>
      <header>
        <Navigation />
        </header>
      <main className="border-b-2">
        <div className="flex flex-col text-center w-2/3 sm:w-full my-8 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">
            Our Live Classes
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Browse our virtual live classes with certified instructors to see which one works best for you!
          </p>
        </div>
        <Lives />
      </main>
      <footer>
        <Bottomnav />
      </footer>
    </div>
  );
}

export default LiveClasses;