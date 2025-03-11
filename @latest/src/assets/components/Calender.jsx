import pana from "../images/pana.png";
import tesla from "../images/tesla.png";
import customer1 from "../images/customer1.png";
import customer2 from "../images/customer2.png";
import customer3 from "../images/customer3.png";
import customer4 from "../images/customer4.png";
import customer5 from "../images/customer5.png";
import customer6 from "../images/customer6.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const Calender = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center items-center ">
        <div className="mb-4 md:mb-0 ">
          <img src={pana} width={250} alt="" />
        </div>
        <div className="ml-30">
          <h1 className="text-[#717171] text-3xl w-130 md:text-left mb-6 font-bold mx-5 md:mx-0">
            How to design your site footer like we did
          </h1>
          <p className="text-[#717171] w-full md:w-105 lg:w-150 font-light  mb-5  ">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-[#4CAF4F]  rounded-sm w-25 h-10 text-white mx-auto">
            Learn More
          </button>
        </div>
      </div>

      {/* customer section */}

      <section className="customer my-10">
        <div className=" flex flex-col md:flex-row justify-center items-center p-9 bg-[#F5F7FA] ">
          <div className="mb-4 md:mb-0 ">
            <img src={tesla} width={250} alt="" />
          </div>
          <div className="ml-30">
            <p className="text-[#717171] w-full md:w-105 lg:w-150 font-light  mb-2  ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3 className="text-[#4CAF4F] ">Tim Smith</h3>
            <p className="text-[#717171] font-light">
              British Dragon Boat Racing Association
            </p>

            <div className="flex items-center flex-wrap gap-6 mt-5">
              <img src={customer1} alt="logo" className="w-[30px]" />
              <img src={customer2} alt="logo" className="w-[30px]" />
              <img src={customer3} alt="logo" className="w-[30px]" />
              <img src={customer4} alt="logo" className="w-[30px]" />
              <img src={customer5} alt="logo" className="w-[30px]" />
              <img src={customer6} alt="logo" className="w-[30px]" />

              <p className="text-[#4CAF4F]">Meet our customers</p>
              <div className="text-[#4CAF4F] ">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calender;
