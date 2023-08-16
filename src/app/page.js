import Button from '@/components/Button/Button'
import Talent from '@/components/Talent/Talent'
import Card from '@/components/Card/Card'
import JobSeeker from '@/components/JobSeeker/JobSeeker'
import Media from '@/components/Media/Media'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Image from 'next/image'

export default async function Home() {

 
  return (
    <main className="">
   <Navbar />
   <Card />
   <Media />
   <Button />
   <JobSeeker />
   <Talent />
   <Footer />
    </main>
  )
}

