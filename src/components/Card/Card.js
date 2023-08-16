import React from 'react'

export default function Card() {
  return (
    <div className="px-7 bg-[rgb(44,45,75)] w-full py-[50px] mt-8">
        <h1 className="text-[rgb(219,57,102)] text-[40px] text-center">Let the power of AI help you</h1>

       <div className="flex w-[100%] lg:justify-center lg:flex-row flex-col items-center">
<div className="w-[80%] lg:w-[30%]">
   <div className="text-3xl text-white text-center mt-3">Find your dream job</div>
   <div className="bg-[rgb(66,57,97)] py-[55px] flex items-center flex-col rounded-[40px] mt-4">
<img src ="/find-job.png" alt = "find-job" className="w-[30%]"/>
<button type = "button" className="block bg-[rgb(216,15,70)] text-white w-[220px] py-2 rounded-xl text-[22px] font-semibold">Upload Resume</button>
<button type = "button" className="mt-4 block border border-white w-[220px] py-1 rounded-xl text-[22px] tracking-tighter hover:bg-white hover:text-[rgb(36,48,87)] text-white">Learn More</button>
</div>
</div>


<div className="w-[80%] lg:w-[30%] lg:ml-6 ml-0">
    <div className="text-3xl text-white text-center mt-3">Find the best talent</div>
    <div className="bg-[rgb(66,57,97)] py-[55px] flex items-center flex-col rounded-[40px] mt-4">
<img src ="/find-talent.png" alt = "find-job" className="w-[30%]"/>
<button type = "button" className="block bg-[rgb(216,15,70)] text-white w-[220px] py-2 rounded-xl text-[22px] font-semibold">Book Demo</button>
<button type = "button" className="mt-4 block border border-white w-[220px] py-1 rounded-xl text-[22px] tracking-tighter hover:bg-white hover:text-[rgb(36,48,87)] text-white">Learn More</button>
</div>
</div>
       </div>
    </div>
  )
}
