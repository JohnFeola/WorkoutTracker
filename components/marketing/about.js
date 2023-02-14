import { aboutData } from "./aboutData";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="container px-5 pb-24 mx-auto scroll-m-60">
      <div className="flex flex-wrap">
        {aboutData.map((item) => {
          return (
            <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={item.imgUrl}
                  alt=""
                  width={720}
                  height={400}
                />
                <h2 className="text-lg font-medium mb-4">{item.title}</h2>
                <p>{item.blurb}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default About;
