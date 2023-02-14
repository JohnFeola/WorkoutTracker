import { liveClassData } from "./liveClassData";
import Image from "next/image";
import { Button } from "flowbite-react";
import { HiOutlineUserAdd, HiCalendar } from "react-icons/hi";
import { useState } from "react";
import Backdrop from "./modal/backdrop";
import UpgradePlan from "./modal/upgradeplan";
import Calendar from "./modal/calendar";


function Lives() {
  const [modal, setModal] = useState(false);
  const [modal2, setModals] = useState(false);

  function modalHandler() {
    setModal(!modal);
  }
  function modalHandler2() {
    setModals(!modal2);
  }

  return (
    <div id="about" className="container px-5 pb-24 mx-auto scroll-m-60">
      <div className="flex flex-wrap">
        {liveClassData.map((live) => {
          return (
            <div key={live.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={live.imgSrc}
                  alt=""
                  width={720}
                  height={400}
                />

                <h2 className="text-lg font-medium mb-4 text-center">
                  {live.name}
                </h2>
                <p className="text-center pb-2">{live.blurb}</p>
                <div className="flex items-center gap-2">
                  <Button onClick={modalHandler} className="w-1/2">
                    <HiOutlineUserAdd className="mr-3 h-5 w-5" />
                    Upgrade
                  </Button>
                  <Button onClick={modalHandler2} className="w-1/2">
                    Book <HiCalendar className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {modal && <Backdrop onClick={modalHandler} />}
      {modal && <UpgradePlan /> }
      {modal2 && <Backdrop onClick={modalHandler2} />}
      {modal2 && <Calendar /> }
    </div>
  );
}
export default Lives;
