import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const MobileMenu = ({ showCatMenu, setshowCatMenu, setMobileMenu }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Wrapper className="flex flex-col md:hidden font-bold absolute  top-[102px] px-8 left-0 w-full h-[calc(100-50px)] bg-white z-50 text-black ">
        {pathname === "/" && (
          <div className="md:flex gap-8 items-center">
            <h3 className="pb-2 text-[#6D5C41] cursor-pointer text-[16px] leading-[21px] font-[600] ">
              <Link href="/vendor">Vendor</Link>
            </h3>
          </div>
        )}

        {pathname === "/vendor" && (
          <div className="md:flex gap-8 items-center">
            <div>
              <div className="pb-3 text-[#6D5C41] cursor-pointer text-[16px] leading-[21px] font-[600] ">
                <Link href="/pricing">Pricing</Link>
              </div>
            </div>
            <div>
              <div className="pb-4 text-[#6D5C41] cursor-pointer  text-[16px] leading-[21px] font-[600] ">
                <Link href="#">Blogs</Link>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default MobileMenu;
