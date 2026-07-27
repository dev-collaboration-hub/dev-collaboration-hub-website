import Navbar from "./components/Navbar";

export default function Home() {
  const data = {
    navButtons: [
      {
        text: "Home",
        url: "/"
      },
      {
        text: "Projects",
        url: "/projects"
      },
      {
        text: "Contributors",
        url: "/contributors"
      },
      {
        text: "Contribution Guide",
        url: "/contribution-guide"
      },
      {
        text: "Contact",
        url: "/contact"
      }
    ]
  }
  return (
    <div className="dark:bg-black w-full">
      <Navbar navButtons={data.navButtons} title></Navbar>
    </div>
  );
}
