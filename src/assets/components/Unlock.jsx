import unlock from "./../images/unlock.png";
import icon1 from "./../images/icon1.png";
import Icon4 from "./../images/Icon4.png";
import icon2 from "./../images/icon2.png";
import Icon3 from "./../images/Icon3.png";

const Unlock = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center items-center ">
        <div className="mb-4 md:mb-0 ">
          <img src={unlock} alt="" />
        </div>
        <div className="mx-10">
          <h1 className="text-[#717171] text-3xl  md:text-left mb-6 font-bold mx-5 md:mx-0">
            The unseen of spending three <br />
            years at Pixelgrade
          </h1>
          <p className="text-[#717171] w-full md:w-105 lg:w-150 font-light  mb-5  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio
          </p>
          <a href="">
            <button className="bg-[#4CAF4F] cursor-pointer rounded-sm w-25 h-10 text-white mx-auto">
              Learn More
            </button>
          </a>
        </div>
      </div>

      <section className="bg-[#F5F7FA] p-6 md:p-12 my-10 flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div className="mb-8 md:mb-0">
          <h1 className="text-[#717171] text-2xl font-bold">Helping a local</h1>
          <h1 className="text-[#4CAF4F] text-2xl my-1 font-bold">
            business reinvent itself
          </h1>
          <p className="text-gray-900 font-light">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 md:gap-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src={icon1} alt="" className="w-10 md:w-auto" />
              <div className="mr-0 md:mr-24">
                <h1 className="text-gray-700 font-bold">2,245,341</h1>
                <p className="text-[#717171] font-light">Members</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src={Icon4} alt="" className="w-10 md:w-auto" />
              <div>
                <h1 className="text-gray-700 font-bold">46,328</h1>
                <p className="text-[#717171] font-light">Clubs</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src={Icon3} alt="" className="w-10 md:w-auto" />
              <div className="mr-0 md:mr-20">
                <h1 className="text-gray-700 font-bold">2,245,341</h1>
                <p className="text-[#717171] font-light">Event Bookings</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src={icon2} alt="" className="w-10 md:w-auto" />
              <div>
                <h1 className="text-gray-700 font-bold">46,328</h1>
                <p className="text-[#717171] font-light">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Unlock;
