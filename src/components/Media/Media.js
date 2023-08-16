import React from 'react'

export default function Media() {
  return (
    <div className="w-full px-7 py-4">
        <h1 className="text-center text-3xl text-[rgb(140,19,60)] font-normal">Jobster is an AI platform that matches the right people to the right jobs,</h1>
        <h1 className="text-center text-3xl text-[rgb(140,19,60)] font-normal">saving time for both candidates and recruiters.</h1>

<div className="grid lg:grid-cols-2 grid-cols-1 mt-4">
<img src = "/find-jobs-iphone.png" alt = "phone" className="block mx-auto w-[160px]"/>

<img src = "/find-talent-ipad.png" alt = "phone" className="block mx-auto w-[400px] lg:mt-0 mt-5"/>
</div>
    </div>
  )
}
