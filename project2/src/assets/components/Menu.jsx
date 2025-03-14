import Vector1 from "../../assets/images/Vector1.png";
import Vector from "../../assets/images/Vector.png";
import Vector2 from "../../assets/images/Vector2.png";
const Menu = () => {
  const menus = [
    {
      id: 1,
      icon: Vector1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      icon: Vector,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      icon: Vector2,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <>
      <div>
        <div className="mt-15 mb-5">
          <h1 className="text-center text-3xl  font-bold text-[#4D4D4D]">
            Manage your entire community in
          </h1>
          <h1 className="text-center text-3xl font-bold text-[#4D4D4D]">
            a single system
          </h1>
          <p className="text-[#717171] font-light py-3 text-center">
            Who is Nextcent suitable for?
          </p>
        </div>
        <ul className="block md:flex md:flex-wrap md:justify-center mx-7 items-center md:pb-28">
          {menus.map(({ id, icon, title, description }) => (
            <li
              key={id}
              className="text-center md:w-80 my-5  md:mx-8 border-2 p-5 border-white border-opacity-30 rounded-lg shadow-md"
            >
              <div className="flex flex-col items-center">
                <div className="mb-2">
                  <img src={icon} alt={icon} className="" />
                </div>
                <h3 className="text-black text-2xl font-bold w-30">{title}</h3>
                <p className="tracking-tight text-gray-500 w-65">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
