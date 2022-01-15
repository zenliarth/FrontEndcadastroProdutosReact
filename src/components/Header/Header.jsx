import React from 'react';
import { HiOutlineHome, HiOutlineUser } from 'react-icons/hi';

const Header = () => {
  return (
    <div className="flex w-full h-20">
      <div className="flex justify-between w-10/12 mx-auto py-4">
        <div className="w-40 h-full">
          <a className="text-xl text-white" href="/">
            Logo
          </a>
        </div>
        <ul className="flex h-full items-center justify-center gap-4 pt-4 text-white">
          <li className="h-full flex itens-center justify-center gap-2">
            <a className="flex text-xl hover:text-indigo-300" href="/profile">
              <div className="px-1 pb-1  flex h-full items-center">
              <HiOutlineHome />
              </div>
              Home
            </a>
          </li>
          <li className="h-full flex itens-center justify-center gap-2">
            <a className="flex text-xl hover:text-indigo-300" href="#profile">
              <div className="px-1 pb-1 flex items-center">
                <HiOutlineUser />
              </div>
              Profile
            </a>
          </li>
          <li className="flex h-full itens-center">
            <a
              className="flex itens-center justify-center text-xl hover:text-indigo-300"
              href="/about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
