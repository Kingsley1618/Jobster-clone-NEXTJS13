import React from 'react'

export default function Footer() {
  return (
    <div className="w-full bg-[rgb(38,48,67)] py-[120px]">

<div className="w-[70%] flex justify-between mx-auto basis-1/3 lg:flex-row flex-col">
<div className="text-white flex lg:justify-start justify-center">
    <ul className="flex flex-col">
        <li>About Jobster.io</li>
        <li className="my-5">Privacy Policy</li>
        <li>Terms of Use</li> 
    </ul>
</div>

<div className="basis-1/3 flex flex-wrap lg:justify-end justify-center items-center lg:mt-0 mt-8">
<div><img src="/facebook-icon.png" alt="fb" className="w-[50px] height-[50px]"/></div>
<div><img src="/linkedin-icon.png" alt="fb" className="w-[50px] height-[50px] mx-7"/></div>
<div><img src="/ke-solutions-icon.png" alt="fb" className="w-[50px] height-[50px]"/></div>

</div>


<div className="basis-1/3 justify-center flex items-center lg:mt-0 mt-8">
<img src = "/jobster.png" className="w-[60px] h-[60px]"/>
</div>

</div>



    </div>
  )
}
