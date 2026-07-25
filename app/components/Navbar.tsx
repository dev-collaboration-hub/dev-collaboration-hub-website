import Link from 'next/link';
import React from 'react'

type ButtonType = {
  text: string;
  url: string;
};

interface PropsType {
  navButtons: ButtonType[];
  title?: boolean;
}


const Navbar = (props: PropsType) => {
  return (
    <div className="flex w-full p-3 dark:bg-gray-900 bg-gray-500">
      {props.title? <>
        <Link className="whitespace-nowrap" href={"/"}>Dev Collaboration Hub</Link>
      </> : <></>}
      <div className="flex justify-center w-full">
        {props.navButtons.map((button) => (
          <div key={button.text} className="mx-4 border-b-2 border-transparent hover:border-gray-50">
            <Link href={button.url}>{button.text}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar