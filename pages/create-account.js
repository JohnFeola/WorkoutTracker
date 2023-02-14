import { useRef, useState, useEffect } from "react";
import Link from "next/link";

import { BsPencilSquare } from "react-icons/bs";
import { FaDumbbell } from "react-icons/fa";
import { useRouter } from 'next/router'

export function CreateAccountPage() {
  const [match, setMatch] = useState(true);
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

  function pwordVerify() {
    setMatch(false);
  }

  function formVerify() {
    setValid(false);
  }

  const fnameInputRef = useRef();
  const lnameInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const verifyInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const fname = fnameInputRef.current.value;
    const lname = lnameInputRef.current.value;
    const username = usernameInputRef.current.value;
    const password = passwordInputRef.current.value;
    const verify = verifyInputRef.current.value;

    if (password !== verify) { // Internal check for password
      pwordVerify();
      return;
    }

    if (
      !fname ||
      fname.trim() === "" ||
      !lname ||
      lname.trim() === "" ||
      !username ||
      username.trim() === ""
    ) {
      formVerify();
      return;
    }

    // talk to database here
    var usernameFound = false;

    for (var key in users) { // This is the object
      for (var key1 in users[key]) { // This is the "key"
        if (!usernameFound) {
          var value = users[key][key1];

          if (value == username) { // Found a username
            usernameFound = true;
          }
        }
      }
    }

    if (usernameFound) { // Username already exists
      console.log("username already exists");
    } else { // Create account logic
      fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(
          { first_name: fname, 
            last_name: lname, 
            username: username,
            password: password
          }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

        console.log("account created");
        router.push(`/login`);
    }
  }

  return (
    <div className="bg-gray-50 h-screen py-12 px-4 items-center justify-center flex">
      <div className="w-full max-w-lg">
        <FaDumbbell className="mx-auto h-20 w-20 text-blue-700" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create a WorkoutApp account
        </h2>
        <p className="mt-2 text-center text-sm font-medium text-blue-700 hover:text-blue-500">
          <Link href="/login">Already have an account?</Link>
        </p>
        <section className="mt-8 space-y-6">
          <form onSubmit={submitHandler}>
            <div className="flex gap-2">
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                required
                ref={fnameInputRef}
                className="block w-full rounded-md mb-2 border-gray-300 shadow-sm px-3 py-2"
              />

              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                required
                ref={lnameInputRef}
                className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
            </div>
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                ref={usernameInputRef}
                className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2"
              />

              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                ref={passwordInputRef}
                className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
              <input
                type="password"
                id="verify"
                placeholder="Verify Password"
                required
                ref={verifyInputRef}
                className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <BsPencilSquare className="h-4 w-4 text-blue-500 group-hover:text-white" />
                </span>
                Create Account
              </button>
            </div>
          </form>
          {match ? null : (
            <p className="text-center mt-2 font-medium text-red-700 text-sm">
              ! Those passwords didnt match. Try again.
            </p>
          )}
          {valid ? null : (
            <p className="text-center mt-2 font-medium text-red-700 text-sm">
              Please enter valid first name, last name, and username.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
export default CreateAccountPage;
