import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-end">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-blue-600"
            className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-white text-4xl font-bold cursive tracking-widest"
          >
            Zakk
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white text-xl nav-font hover:text-black hover:bg-white"
            activeClassName="text-gray-900 bg-white animate-pulse"
          >
            My Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white text-xl nav-font hover:text-black hover:bg-white"
            activeClassName="text-gray-900 bg-white animate-pulse"
          >
            What I Do
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white text-xl nav-font hover:text-black hover:bg-white"
            activeClassName="text-gray-900 bg-white animate-pulse"
          >
            Who I am
          </NavLink>
        </nav>
        
      </div>
    </header>
  );
}
