import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';

function WorkoutList(props) {
  const { items } = props;
  const router = useRouter();
  const query = router.query;
  const username = query.username;

  return (
    <div id="about" className="container px-5 pb-24 mx-auto">
      <div className="flex flex-wrap">
        {items.map((item) => {
          return (
            <div key={item._id} className="xl:w-1/4 md:w-1/2 p-4 ">
              <Link href={`/app/${username}/workouts/${item._id}`}>
                <div className="bg-gray-100 p-6 rounded-lg border hover:border-blue-700">
                  <Image
                    src={item.image_link}
                    width={760}
                    height={500}
                    className=" rounded w-full object-cover object-center mb-6"
                    alt=""
                  />
                  <h2 className="text-lg font-medium mb-0">{item.name}</h2>
                  <p className="mb-2">Difficulty: {item.difficulty}</p>
                  <p className=" h-[4.5rem] overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkoutList;
