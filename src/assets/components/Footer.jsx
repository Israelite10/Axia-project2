import { FaLongArrowAltRight } from "react-icons/fa";
import footer_icon from "../images/footer_icon.png";
import { FiSend } from "react-icons/fi";
import insta from "../images/insta.png";
import internet from "../images/internet.png";
import x from "../images/x.png";
import youtube from "../images/youtube.png";

const Footer = () => {
  return (
    <>
      <section className="bg-[#F5F7FA] w-full h-full p-10 pt-15">
        <h1 className="text-center text-[#263238] text-4xl font-bold w-70 md:w-100 mx-auto mb-8">
          Pellentesque suscipit fringilla libero eu
        </h1>
        <div className="flex justify-center items-center">
          <a href="">
            <button className="bg-[#4CAF4F] cursor-pointer rounded-sm w-38 h-10 text-white mx-auto">
              Get Demo
            </button>
          </a>

          <FaLongArrowAltRight className="-ml-9 text-white" />
        </div>
      </section>
      <footer className="bg-[#263238] text-white py-10 px-5 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section - Logo & Copyright */}
          <div>
            <div className="flex items-center space-x-2">
              <img src={footer_icon} alt="Nexcent Logo" className="w-8 h-8" />
              <h1 className="text-2xl font-bold">Nexcent</h1>
            </div>
            <p className="text-gray-400 mt-4">Copyright © 2020 Nexcent Ltd.</p>
            <p className="text-gray-400">All rights reserved</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <img src={insta} alt="Instagram" className="w-6 h-6" />
              <img src={internet} alt="internet" className="w-6 h-6" />
              <img src={x} alt="Twitter" className="w-6 h-6" />
              <img src={youtube} alt="YouTube" className="w-6 h-6" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>

          {/* Right Section - Stay Up to Date */}
          <div>
            <h3 className="font-bold text-lg mb-3">Stay up to date</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-700 text-gray-300 p-3 rounded-lg w-full outline-none"
              />
              <button className="absolute right-3 top-3">
                <FiSend className="w-5 h-5 cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
