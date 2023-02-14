import Link from "next/link";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex items-center justify-center h-screen mb-12 custom-img bg-fixed bg-cover">
      <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/60" />
      <div className=" p-8 text-white z-[2] bg-black/80 rounded-lg m-8">
        <h2 className="md:text-5xl text-4xl font-semibold lg:tracking-normal tracking-tighter">
          Get started with WorkoutApp today
        </h2>
        <p className="py-5">
          Join thousands of users on a new fitness journey, access individual
          workouts and exercise plans for free!
        </p>
        <Link href="/create-account">
          <button className="bg-white hover:bg-slate-200 text-black py-2 px-4 rounded-md w-full">
            Create Account
          </button>
        </Link>
        <span className="flex justify-between w-full sm:w-1/2 mx-auto mt-6">
          <FaTwitter size={30} className="text-twitter m-2" />{" "}
          <FaFacebook size={30} className="text-facebook m-2" />{" "}
          <FaInstagram size={30} className="text-instagram m-2" />{" "}
          <FaLinkedin size={30} className="text-linkedin m-2" />
        </span>
      </div>
    </div>
  );
}

export default Hero;
