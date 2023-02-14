import { Footer } from "flowbite-react";

function Bottomnav() {
  return (
    <Footer container={true}>
      <p className="text-center text-sm md:flex text-gray-500">&copy;2022 WorkoutApp™</p>
      <Footer.LinkGroup>
        <div className="mx-auto flex">
        <Footer.Link href="#" className="p-2 md:p-0">Workouts</Footer.Link>
        <Footer.Link href="#" className="p-2 md:p-0">Programs</Footer.Link>
        <Footer.Link href="#" className="p-2 md:p-0">Personal Training</Footer.Link>
        <Footer.Link href="#" className="p-2 md:p-0">Live Classes</Footer.Link>
        </div>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default Bottomnav;