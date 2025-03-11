import menu_logo from "../../assets/images/menu_logo.png";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-16 w-full h-full bg-[#F5F7FA]">
        <div className="text-center md:text-left md:w-1/2 mx-0 lg:mx-24 ">
          <h1 className="text-5xl font-bold text-[#4D4D4D] my-2">
            Lessons and insights
          </h1>
          <h1 className="text-5xl text-[#4CAF4F] font-bold"> from 8 years</h1>
          <p className="text-[#4D4D4D] font-light text my-6">
            Where to grow your business as a photographer site or social media?
          </p>
          <a href="">
            <button className="bg-[#4CAF4F] rounded-sm w-32 h-10 text-white mx-auto md:mx-0 cursor-pointer">
              Register
            </button>
          </a>
        </div>

        <div className="py-14 mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={menu_logo}
            alt="Illustration"
            className="max-w-sm w-full md:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
