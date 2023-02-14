import Link from "next/link";
import { FaRegWindowClose, FaBars, FaCaretLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuIsOpen, openOrCloseMenu] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  function menuHandler() {
    openOrCloseMenu(!menuIsOpen);
  }

  useEffect(() => {
    function changeColors() {
      if (window.scrollY >= 90) {
        setBgColor("white");
        setTextColor("black");
      } else {
        setBgColor("transparent");
        setTextColor("white");
      }
    }
    window.addEventListener("scroll", changeColors);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className="fixed left-0 top-0 w-full z-10"
    >
      <div
        style={{ color: `${textColor}` }}
        className="flex m-auto items-center justify-between p-4 max-w-7xl"
      >
        <Link href="/">
          <h1 className="text-2xl font-bold">WorkoutApp</h1>
        </Link>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/#pricing">Pricing</Link>
          </li>
          <li className="p-4">
            <Link href="/#team">Team</Link>
          </li>
          <li className="p-4">
            <Link href="/create-account">Sign up</Link>
          </li>
          <li className="p-4">
            <Link href="/login">Log in</Link>
          </li>
        </ul>
        <div
          onClick={menuHandler}
          className="md:hidden flex hover:cursor-pointer"
        >
          {menuIsOpen ? (
            <FaRegWindowClose className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>
      </div>
      <div
        className={
          menuIsOpen
            ? "md:hidden fixed left-0 bg-gray-200 w-full h-screen ease-in-out duration-500 z-2 rounded-b flex-col text-center"
            : "md:hidden fixed -left-full bg-gray-200 w-full h-screen ease-in-out duration-500 z-2 rounded-b flex-col text-center"
        }
      >
        <div onClick={menuHandler} className="space-y-8 font-bold">
          <div>
            <ul className="text-center mt-8 text-3xl space-y-8">
              <li className="hover:bg-gray-300 w-full">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:bg-gray-300 w-full">
                <Link href="/#about">About</Link>
              </li>
              <li className="hover:bg-gray-300 w-full">
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li className="hover:bg-gray-300 w-full">
                <Link href="/#team">Team</Link>
              </li>
              <li className="hover:bg-gray-300 w-full">
                <Link href="/create-account">Sign up</Link>
              </li>
              <li className="hover:bg-gray-300 w-full">
                <Link href="/login">Log in</Link>
              </li>
            </ul>
          </div>
          <div className="border-t-2 border-black">
            <div>
              <p className="py-2"> 123 WorkoutApp Street, Towson MD</p>
              <p className="py-2"> (443) 444-4444</p>
              <p className="pt-2"> contact@WorkoutApp.com</p>
            </div>
            <div className="bg-black text-xl text-white overflow-hidden w-full py-4 border-black">
              &copy; WorkoutApp LLC, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
