import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const Community = () => {
  const images = [
    {
      id: 1,
      image: img1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      description: "Readmore",
    },
    {
      id: 2,
      image: img2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      description: "Readmore",
    },
    {
      id: 3,
      image: img3,
      title: "Revamping the Membership Model with Triathlon Australia",
      description: "Readmore",
    },
  ];

  return (
    <>
      <div>
        <div className="mb-5">
          <h1 className="font-bold text-center text-2xl mb-2">
            Caring is the new marketing
          </h1>
          <p className="text-center text-[#717171] mx-auto w-80 md:w-150 font-light">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
        </div>
        <div className="mb-20">
          <ul className="flex flex-col md:flex-row justify-center items-center gap-10">
            {images.map(({ id, image, title, description }) => (
              <li
                key={id}
                className="relative w-full md:w-auto my-5 mb-15 mx-4"
              >
                <div className="flex justify-center">
                  <img src={image} className="w-[80%] md:w-[320px]" alt="" />
                </div>
                <div className="bg-white text-gray-500 shadow-gray-500 shadow-2xl border-white p-4 rounded-lg w-[70%] md:w-70 text-center mx-auto absolute -mt-20 left-1/2 transform -translate-x-1/2 z-10">
                  <p className="font-bold text-lg mb-2">{title}</p>
                  <div className="flex justify-center cursor-pointer text-[#4CAF4F] items-center gap-4">
                    <a href="">
                      <p>{description}</p>
                    </a>
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Community;
