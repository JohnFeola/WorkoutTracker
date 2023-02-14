import Image from "next/image";

import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { teamData } from "./teamData";

function Team() {
  return (
    <div id="team" className="text-gray-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-black">
            Our Team
          </h1>
          <p className="mx-auto">
            Meet the team that made your fitness journey possible.
          </p>
        </div>

        <div className="flex flex-wrap -m-2">
          {teamData.map((member) => {
            return (
              <div key={member.id} className="p-2 w-full lg:w-1/3 md:w-1/2">
                <div className="h-full flex items-center border-gray-300 p-4 rounded-lg shadow-lg border hover:border-blue-500 hover:-translate-y-1 ease-in-out duration-150">
                  <Image
                    src={member.imgPath}
                    width={80}
                    height={80}
                    className="w-16 h-16 bg-gray-100 p-12 rounded-full"
                    alt=""
                  />
                  <div className="flex-grow">
                    <h2 className="text-black font-medium p-2">
                      {member.name}
                    </h2>
                    <p className="p-2">{member.blurb}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
