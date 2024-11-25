import React from "react";
import { GiCircularSaw } from "react-icons/gi";

const Header: React.FC = () => {
  return (
    <header className="bg-black border border-current text-white p-4 mb-6 mx-auto max-w-3xl">
      <div className="flex items-center justify-center space-x-4">
        <GiCircularSaw className="text-lime-400 w-8 h-8" />
        <h1 className="text-3xl font-light">Rozkrój Szafy</h1>
      </div>
    </header>
  );
};

export default Header;
