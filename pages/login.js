import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import { HiLockClosed } from "react-icons/hi";
import { FaDumbbell } from "react-icons/fa";
import { useRouter } from 'next/router'

export function LoginPage() {
  const [valid, setValid] = useState(true);
  const [users, setUsers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/users")
    .then((response) => response.json())
    .then((data) => {
      setUsers(data.users);
    });
  }, []);

  function formVerify() {
    setValid(false);
  }

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;

    var usernameFound = false;
    var responsefromdatabase = false;

    // Checking if the user & password combination exists
    for (var key in users) { // This is the object
      for (var key1 in users[key]) { // This is the "key"
        if (usernameFound) {
          var value = users[key][key1];

          if (value == password) {
              responsefromdatabase = true;
          }
        }

        var value = users[key][key1];

        if (value == username) { // Found a username
          usernameFound = true;
        }
      }
    }

    if (responsefromdatabase == false) {
      formVerify();
      return;
    } else {
      router.push(`/app/${ username }`);
    }
  }

  return (
    <div className="bg-gray-50 h-screen py-12 px-4 items-center justify-center flex">
      <div className="w-full max-w-lg">
        <FaDumbbell className="mx-auto h-20 w-20 text-blue-600" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to WorkoutApp
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link
            href="/create-account"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            start your 14-day free trial
          </Link>
        </p>
        <section className="mt-8 space-y-6">
          <form onSubmit={submitHandler}>
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                ref={usernameInputRef}
                className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2 "
              />

              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                ref={passwordInputRef}
                className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label className="ml-2 block text-sm text-gray-900">
                  {" "}
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <HiLockClosed className="h-4 w-4 text-blue-500 group-hover:text-white" />
                </span>
                Login
              </button>
            </div>
          </form>
          {valid ? null : (
            <p className="text-center mt-2 font-medium text-red-600 text-sm">
              Incorrect username and/or password. Please try again.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
export default LoginPage;
