import Head from "next/head";
import About from "../components/marketing/about";
import Footer from "../components/marketing/footer";
import Hero from "../components/marketing/Hero";
import Navbar from "../components/marketing/Navbar";
import Prices from "../components/marketing/prices";
import Team from "../components/marketing/team";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WorkoutApp</title>
        <meta name="description" content="WorkoutApp Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <div className="flex flex-col text-center w-2/3 sm:w-full mb-0 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">
            WorkoutApps Features
          </h1>
        </div>
        <About />
        <div className="flex flex-col text-center w-2/3 sm:w-full mb-0 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4">
            Pricing plans for any level of fitness
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Choose an affordable plan that has the best features for your
            fitness journey.
          </p>
        </div>
        <Prices />
        <Team />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
