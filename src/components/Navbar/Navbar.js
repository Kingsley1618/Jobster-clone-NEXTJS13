import React from 'react'
import {BiSolidChevronDown} from "react-icons/bi"
import {FaBars} from "react-icons/fa"
function Navbar() {
  return (
    <div className="fixed top-0 flex justify-between w-full px-7 items-center bg-[rgb(40,48,69)] py-3">
        <div className="lg:hidden">
<FaBars className="text-[30px] text-white"/>
        </div>
        <div className="flex items-center">
            <img src = "/jobster.png" className="w-[60px] h-[60px]"/>
          <div className="text-[30px] text-white ps-4 font-bold">Jobster.io</div>
        </div>

        <div className="flex">
<ul className="flex text-white">
    <li className="lg:block hidden cursor-pointer">Find Jobs</li>
    <li className="lg:block hidden px-[34px] cursor-pointer">Find Talent</li>
    <li className="lg:block hidden cursor-pointer">eBook</li>
    <li className="lg:block hidden px-[34px] cursor-pointer">About</li>
    <li className="lg:block hidden cursor-pointer">Log In</li>
    
</ul>
<BiSolidChevronDown className="lg:hidden block text-[30px] text-white"/>
        </div>
    </div>
  )
}

export default Navbar