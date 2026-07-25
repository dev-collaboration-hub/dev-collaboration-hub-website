import React from 'react'

type ButtonType = {
  text: string;
  url: string;
};

interface PropsType {
  navButtons: ButtonType[]; 
}


const Navbar = (props: PropsType) => {
  return (
    <div className="flex w-full p-8 dark:bg-gray-800 bg-gray-500"></div>
  )
}

export default Navbar