import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Backdrop from "./modal/backdrop";
import NewWorkout from "./modal/newworkout";
import { useRouter } from "next/router";

import { Button } from "flowbite-react";
import { MdLogout } from "react-icons/md";
import {
  FaRegWindowClose,
  FaBars,
  FaDumbbell,
  FaShoppingCart,
  FaBell,
  FaPlus,
} from "react-icons/fa";

function Navigation() {
  const router = useRouter();
  const query = router.query;
  const username = query.username;

  const [nav, setNav] = useState(false);
  const [profile, setProfile] = useState(false);

  const [modal, setModal] = useState(false);

  function modalHandler() {
    setModal(!modal);
  }

  function handleProfile() {
    setProfile(!profile);
  }

  function handleNav() {
    setNav(!nav);
  }

  return (
    <nav className="relative w-full items-center justify-between py-4 bg-gray-100 text-gray-500 shadow-lg">
      <div className="container w-full flex flex-wrap items-center justify-between px-6 mx-auto">
        <div onClick={handleNav} className="sm:hidden">
          {nav ? (
            <FaRegWindowClose size={20} className="sm:hidden" />
          ) : (
            <FaBars size={20} className="sm:hidden" />
          )}
        </div>

        {/* Mobile button drop down menu */}
        <div
          className={
            nav
              ? "z-10 w-5/12 rounded divide-y divide-gray-100 shadow transition-opacity duration-500 border border-gray-200 bg-white text-gray-900 absolute top-14 left-4 sm:hidden"
              : "z-10 w-5/12 rounded divide-y divide-gray-100 shadow transition-opacity invisible duration-500 border border-gray-200 bg-white text-gray-900 absolute top-16 left-4 sm:hidden"
          }
        >
          <div className="pt-1 text-sm text-gray-700 w-full">
            <ul className="pt-1">
              <Link href={`/app/${username}/workouts`}>
                <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-500 cursor-pointer hover:bg-gray-100">
                  Workouts
                </li>
              </Link>
              <Link href={`/app/${username}/programs`}>
                <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-500 cursor-pointer hover:bg-gray-100">
                  Programs
                </li>
              </Link>
              <Link href={`/app/${username}/personal-training`}>
                <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-500 cursor-pointer hover:bg-gray-100">
                  Personal Training
                </li>
              </Link>
              <Link href={`/app/${username}/live-classes`}>
                <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-500 cursor-pointer hover:bg-gray-100">
                  Live Classes
                </li>
              </Link>
              <li onClick={modalHandler} className="flex items-center py-2 px-4 text-sm text-white cursor-pointer bg-blue-700 hover:bg-blue-800 rounded-b justify-between">
                New Workout <FaPlus className="text-white" />
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile button drop down menu */}

        <div className="flex items-center">
          <FaDumbbell className="text-blue-700 mr-2 sm:flex hidden" />
          <h1 className="font-semibold sm:hidden flex text-blue-700">
            WorkoutApp
          </h1>
          <ul className="sm:flex hidden">
            <li className="px-2 hover:text-blue-700">
              <Link href={`/app/${username}/workouts`} className="p-0">
                Workouts
              </Link>
            </li>
            <li className="px-2 hover:text-blue-700">
              <Link href={`/app/${username}/programs`} className="p-0">
                Programs
              </Link>
            </li>
            <li className="px-2 hover:text-blue-700">
              <Link href={`/app/${username}/personal-training`} className="p-0">
                Training
              </Link>
            </li>
            <li className="px-2 hover:text-blue-700">
              <Link href={`/app/${username}/live-classes`} className="p-0">
                Classes
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center hover:text-gray-500">
          <div className="hidden sm:flex">
            <Button onClick={modalHandler} size="sm">
              <FaPlus className="mr-2" />
              New Workout
            </Button>
          </div>
          <FaShoppingCart className="m-4 hover:text-blue-700" />
          <FaBell className="mr-4 hover:text-blue-700" />
          <div onClick={handleProfile} className="relative">
            <Image
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80"
              alt="profile picture"
              width={25}
              height={25}
              className="flex rounded-full  hover:ring-offset-blue-800 hover:ring-2 "
            />
          </div>
          {/* Profile Picture drop down */}
          <div
            className={
              profile
                ? "z-10 w-48 rounded divide-y divide-gray-100 shadow transition-opacity duration-500 border border-gray-200 bg-white text-gray-900 absolute top-12 right-0"
                : "z-10 w-48 rounded divide-y divide-gray-100 shadow transition-opacity invisible duration-500 border border-gray-200 bg-white text-gray-900 absolute top-12 right-0 sm:hidden"
            }
          >
            <div className="pt-1 text-sm text-gray-700 w-full">
              <ul className="pt-1">
                <Link href={`/app/${username}`}>
                  <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-500 cursor-pointer hover:bg-gray-100">
                    Profile
                  </li>
                </Link>
                <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-500 cursor-pointer hover:bg-gray-100">
                  Settings
                </li>
                <Link href="/">
                  <li className="flex items-center justify-between py-2 px-4 text-sm text-gray-500 cursor-pointer hover:bg-gray-100 border-t-2">
                    Log Out <MdLogout />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* Profile Picture drop down */}
        </div>
      </div>
      {modal && <Backdrop onClick={modalHandler} />}
      {modal && <NewWorkout />}
    </nav>
  );
}

export default Navigation;
