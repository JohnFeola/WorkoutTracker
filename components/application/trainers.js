import { trainerData } from "./trainerData";
import Image from "next/image";
import { Button } from "flowbite-react";
import { HiUserCircle, HiChatAlt } from "react-icons/hi";
import { useState } from "react";
import Backdrop from "./modal/backdrop";
import UpgradePlan from "./modal/upgradeplan";

function Trainers() {
  const [modal, setModal] = useState(false);

  function modalHandler() {
    setModal(!modal);
  }

  return (
    <div id="about" className="container px-5 pb-24 mx-auto">
      <div className="flex flex-wrap">
        {trainerData.map((trainer) => {
          return (
            <div key={trainer.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={trainer.imgSrc}
                  alt=""
                  width={720}
                  height={400}
                />

                <h2 className="text-lg font-medium mb-4 text-center">
                  {trainer.name}
                </h2>
                <p className="text-center pb-2">{trainer.blurb}</p>
                <div className="flex items-center gap-2">
                  <Button onClick={modalHandler} className="w-1/2">
                    <HiUserCircle className="mr-2 h-5 w-5" />
                    Profile
                  </Button>
                  <Button onClick={modalHandler} className="w-1/2">
                    Message <HiChatAlt className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {modal && <Backdrop onClick={modalHandler} />}
      {modal && <UpgradePlan />}
    </div>
  );
}
export default Trainers;
