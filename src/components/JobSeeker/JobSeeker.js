import React from 'react'

export default function JobSeeker() {
  return (
    <div className="w-full py-[60px]">
<h1 className="font-normal text-3xl text-[rgb(140,19,60)] text-center">For job seekers, find your dream job.</h1>

<div className="flex lg:w-[65%] w-[75%] justify-between block items-center mx-auto md:flex-row flex-col">

<div className="md:basis-1/3 md:w-[full] w-[210px]">
    <img src = "/seekerimage.jpg" alt = "career" className="w-150px] h-[150px]"/>
<div>
    <h1 className="font-semibold">What does the future hold for your career?</h1>
    <div>Upload your resume to get job postings, resume tips and more!</div>
</div>
</div>


<div className="md:basis-1/3 md:mx-[50px] mx-0 md:mt-8 md:w-[full] w-[210px]">
<img src = "/seekerimagetwo.jpg" alt = "career" className="w-150px] h-[150px]"/>
<div>
    <h1 className="font-semibold">Personalized just for you.</h1>
    <div>Our AI platform puts you first in your job search with customized resume and job recommendations.</div>
</div>
</div>

<div className="md:basis-1/3 md:w-[full] w-[210px]">
<img src = "/seekerimagethree.jpg" alt = "career" className="w-150px] h-[150px]"/>
<div>
    <h1 className="font-semibold">Get insider knowledge.</h1>
    <div>Learn about the job market, which companies are hiring and what skills are in demand.</div>
</div>
</div>

</div>
</div>
  )
}
