import React from 'react'

function Talent() {
  return (
    <div className="w-full py-[60px]">
    <h1 className="font-normal text-3xl text-[rgb(140,19,60)] text-center">For recruiters, find the best talent.</h1>
    
    <div className="flex lg:w-[65%] w-[75%] justify-between block items-center mx-auto md:flex-row flex-col">
    
    <div className="md:basis-1/3 md:w-[full] w-[210px]">
        <img src = "/recruiter1.jpg" alt = "career" className="w-150px] h-[150px]"/>
    <div>
        <h1 className="font-semibold">The best candidates in seconds.</h1>
        <div>Our AI scans thousands of resumes and shows you the best matches.</div>
    </div>
    </div>
    
    
    <div className="md:basis-1/3 md:mx-[50px] mx-0 md:mt-8 md:w-[full] w-[210px]">
    <img src = "/recruiter2.jpg" alt = "career" className="w-150px] h-[150px]"/>
    <div>
        <h1 className="font-semibold">More Productivity.</h1>
        <div>Automation of resume ranking and job alerts frees up your time for high value activities.</div>
    </div>
    </div>
    
    <div className="md:basis-1/3 md:w-[full] w-[210px]">
    <img src = "/recruiter3.jpg" alt = "career" className="w-150px] h-[150px]"/>
    <div>
        <h1 className="font-semibold">Learns from the best.</h1>
        <div>Pre-trained with 5+ years of recruiting success data, our AI continues to learn from you!</div>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Talent