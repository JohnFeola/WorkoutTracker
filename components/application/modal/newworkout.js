import { BsPencilSquare } from "react-icons/bs";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

function NewWorkout() {
  const router = useRouter();
  const query = router.query;
  const username = query.username;

  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const difficultyInputRef = useRef();

  const [message, setMessage] = useState(false);

  function showMessage() {
    setMessage(!message);
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredDifficulty = difficultyInputRef.current.value;
    const image =
      "https://images.unsplash.com/photo-1638536534847-2cb61af9efe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

    fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        description: enteredDescription,
        difficulty: enteredDifficulty,
        user_own: username,
        image_link: image,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    showMessage();
  }

  return (
    <div className="bg-white rounded-lg p-4 text-center z-50 fixed translate-x-1/2 translate-y-1/2 w-1/2">
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl px-1 font-semibold">
          Create a new Workout
        </h2>
      </div>
      <section className="mt-8 space-y-6">
        <form onSubmit={submitHandler}>
          <div className="block gap-2 sm:px-8 px-2">
            <input
              type="text"
              placeholder="Workout Name"
              className="block w-full rounded-md mb-2 border-gray-300 shadow-sm px-3 py-2"
              required
              ref={nameInputRef}
            />
            <textarea
              type="text"
              placeholder="Workout Description"
              className="block w-full rounded-md appearance-none mb-2 border-gray-300 shadow-sm px-3 py-2"
              required
              ref={descriptionInputRef}
            />
          </div>
          <div className="gap-2 sm:px-8 px-2">
            <input
              type="text"
              placeholder="Difficulty(1-5)"
              className="block w-full rounded-md mb-2 border-gray-300 shadow-sm px-3 py-2"
              required
              ref={difficultyInputRef}
            />
          </div>
          <div className="sm:px-8 px-2 pb-4">
            <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BsPencilSquare className="h-4 w-4 text-blue-500 group-hover:text-white" />
              </span>
              Create Workout
            </button>
            {message ? (
              <p className="text-lg font-semibold text-blue-500">
                Workout successfully created!
              </p>
            ) : null}
          </div>
        </form>
      </section>
    </div>
  );
}

export default NewWorkout;
