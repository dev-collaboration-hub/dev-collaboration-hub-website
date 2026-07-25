import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  const data = {
    navButtons: [
      {
        text: "Home",
        url: "#"
      },
      {
        text: "Projects",
        url: "#"
      },
      {
        text: "Contributers",
        url: "#"
      },
      {
        text: "Contributers Guide",
        url: "#"
      },
      {
        text: "Contact",
        url: "#"
      }
    ]
  }
  return (
    <div className="dark:bg-black w-full">
      <Navbar navButtons={data.navButtons} title></Navbar>
    </div>
  );
}
