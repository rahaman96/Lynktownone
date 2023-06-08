import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
const data = [
  // { id: 1, name: "Pricing", url: "/" },
  // { id: 2, name: "Blogs", url: "/Blogs" },
];

const DesktopMenu = ({ showCatMenu, setshowCatMenu }) => {
  return (
    <>
      <div className="hidden md:flex items-center gap-8 text-center font-medium text-black text-lg md:text-2xl">
        {/* <ul className='hidden md:flex items-center gap-8 font-medium text-black '> */}

        {data.map((item) => {
          return (
            <div key={item.id}>
              <Link href={item?.url}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DesktopMenu;
