import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Service",
    },
    {
      id: 3,
      title: "Feature",
    },
    {
      id: 4,
      title: "Product",
    },
    {
      id: 5,
      title: "Testimonial",
    },
    {
      id: 6,
      title: "FAQ",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-full py-3 bg-white">
        <div className="mx-3 lg:mx-30 flex space-x-2 py-2">
          <img src={logo} alt="logo" />
          <h3 className="font-bold ">Nexcent</h3>
        </div>
        <ul className="md:flex hidden space-x-4 px-4 justify-center items-center">
          {links.map(({ id, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-black-400 hover:scale-105 duration-200 capitalize"
            >
              <a href="">{title}</a>
            </li>
          ))}
        </ul>
        <div className="mx-30 md:flex hidden  ">
          <a href="" className="text-[#4CAF4F] mx-10">
            Login
          </a>
          <a href="">
            <button className="bg-[#4CAF4F] font-light text-white p-1 w-20 cursor-pointer rounded-sm">
              Sign up
            </button>
          </a>
        </div>
        <div
          onClick={() => setnav(!nav)}
          className="cursor-pointer md:hidden pr-4 z-10"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
