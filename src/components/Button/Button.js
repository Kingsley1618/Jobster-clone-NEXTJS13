import React from 'react'

export default function Button() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-[rgb(42,45,74)] py-7">
<button type = "button" className="w-[400px] block text-white mx-auto border border-white rounded-xl text-[22px] tracking-tighter hover:bg-white hover:text-[rgb(36,48,87)]">
I am a job seeker,how can i help
</button>


<button type = "button" className="w-[400px] lg:mt-0 mt-7 text-white block mx-auto border border-white rounded-xl text-[22px] tracking-tighter hover:bg-white hover:text-[rgb(36,48,87)]">
    I am a recruiter,tell me more
</button>


    </div>
  )
}
