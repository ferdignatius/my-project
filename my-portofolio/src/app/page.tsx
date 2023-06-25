import HomePage from '@/components/Home/HomePage'
import Layout from '@/components/Layout'
import SocialMedia from '@/components/about/SocialMedia'
import Title from '@/components/Home/Title'
import Achievement from '@/components/about/Achievement'
import About from '@/components/about/About'
import Skills from '@/components/about/Skills'
import Works from '@/components/works/Works'
import Image from 'next/image'
import Work from '@/components/works/Work'
import profilePicture from '../../public/images/profile pict.jpeg'
import Navbar from '@/components/Navbar'
import ContactForm from '@/components/Contact'
import ContactPage from '@/components/ContactPage'

export default function Home() {
  return (
    <main className='w-full min-h-screen text-dark bg-background'>
      <Navbar />
      <Layout className='pt-0'>
        <div className='grid grid-cols-7 grid-flow-row-dense auto-cols-auto gap-10 md:gap-3 lg:gap-7'>
          <div className='col-span-7 lg:col-span-7 '>
            <HomePage/>
          </div>
          <div className='col-span-7'>
            <SocialMedia/>
          </div>

          <div className='col-span-2 lg:col-span-4 md:col-span-7'>
            <Title/>
          </div>

          <div className='col-span-3 lg:col-span-7'>
            <div className="bg-light text-dark h-72 md:h-auto rounded-2xl w-full m-auto text-center flex flex-col items-center justify-center shadow-sm overflow-hidden">
              <Image src={profilePicture} alt='Ferdinand Ignatius Surya' className='w-full h-full object-cover object-top'/>
            </div>
          </div>

          <div className='col-span-2 lg:col-span-3 md:col-span-7'>
            <Achievement/>
          </div>

          <div className='col-span-4 md:col-span-7'>
            <About />
          </div>


          <div className='col-span-3 md:col-span-7'>
            <Skills />
          </div>

          <div className='col-span-7'>
            <Works />
          </div>

          <Work />

          <div className='col-span-4 md:col-span-7'>
            <ContactForm />
          </div>

          <div className='col-span-3 md:col-span-7'>
            <ContactPage />
          </div>

          
        </div>
      </Layout>

    </main>
      
  )
}
