import Image from "next/image";
import Hero from "../images/hero.webp"
import {CgArrowTopRight , CgChevronRight } from "react-icons/cg";
import { ImLeaf } from "react-icons/im";
import { BsShieldFillCheck } from "react-icons/bs";
import { PiHouseLineFill } from "react-icons/pi";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaQuestion } from "react-icons/fa";


export default function Home() {
  return (
    <main className="flex flex-col gap-y-28">
      {/* HERO */}
      <section className="relative max-h-screen w-full flex flex-col lg:flex-row items-center h-[38rem] lg:h-auto overflow-hidden shadow-md">
        {/* <Image src={Hero} className="max-h-screen object-cover fixed -z-10" alt=""/> */}

        {/* VIDEO MOBILE */}
        <div className="lg:hidden overflow-hidden absolute">
          <div className="bg-[#000000a7] absolute w-full h-full"></div>
          <video muted className="w-screen -z-10" preload="auto" autoPlay playsInline loop>
            <source type="video/mp4" src="/video.webm">
            </source>
          </video>
        </div>

        {/* VIDEO */}
        <div className="hidden lg:block w-full order-1 overflow-hidden rounded-lg">
          <video muted className="place-self-end -z-10 lg:w-[80%] lg:h-[46rem] object-cover rounded-lg" preload="auto" autoPlay playsInline loop>
            <source type="video/mp4" src="/video.webm">
            </source>
          </video>
        </div>

        <div className="flex flex-col gap-y-6 max-w-2xl lg:bg-transparent px-8 py-20 lg:px-20 lg:py-20 z-10">
          <h1 className="h2 lg:hidden text-white drop-shadow-xl">Transform Your Space with Our Expert <span className="text-[--primary-color]">Cleaning</span></h1>
          <h1 className="h1 hidden lg:block">Transform Your Space with Our Expert <span className="text-[--primary-color]">Cleaning</span> </h1>
          <p className="p !text-white lg:!text-[#151515] drop-shadow-xl">Discover the joy of a spotless home with our professional cleaning services. We cater to your unique needs, ensuring every corner sparkles.</p>
          <div className="flex flex-row gap-x-4">
            <a href="/contact" className="btn max-w-max">Contact us</a>
            <a href="/about" className="btn_secondary-transparent max-w-max">About <CgArrowTopRight /></a>
          </div>  
        </div>
      </section>

      {/* HERO 2 */}
      <section className="shadow-md"> 
        <div className="py-8 lg:py-24 px-8 lg:px-0 lg:max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-x-8">
          {/* TEXTS */}
          <div className="flex flex-col gap-y-10">
            {/* TOP TEXTS */}
            <div className="flex flex-col gap-y-4">
              <h2 className="h2"><span className="text-[--primary-color]">Experience</span> the Difference with Our Exceptional Cleaning Services Today!</h2>
              <p className="p">We utilize eco-friendly products to ensure a safe environment for your family and pets. Our trusted professionals are dedicated to delivering top-notch cleaning services that exceed your expectations.</p>   
            </div>

            {/* BOTTOM TEXTS */}
            <div className="flex flex-row gap-x-10">
              <div className="flex flex-col lg:p-3 rounded-lg gap-y-2">
                <h3 className="h3 text-[--primary-color] flex gap-x-2"><ImLeaf /> EcoFriendly</h3>
                <p className="p text-[#151515]">Safe for you and the environment.</p>
              </div>
              <div className="flex flex-col lg:p-3 rounded-lg gap-y-2">
                <h3 className="h3 text-[--primary-color] flex gap-x-2"><BsShieldFillCheck /> Trusted</h3>
                <p className="p text-[#151515]">Professionals you can rely on every time.</p>
              </div>
            </div>
          </div>
          {/* IMAGE */}
          <div className="hidden lg:block">
            <Image className="rounded-lg" width={1080} src={Hero} alt=""/>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="shadow-md">
        <div className="grid lg:grid-rows-3 gap-y-12 max-w-screen-xl mx-auto h-auto lg:h-[42rem]">
          {/* TOP TEXTS */}
          <div className="px-8 lg:px-0 gap-y-4 grid lg:grid-cols-2">
            {/* LEFT TEXT */}
            <div>
              <p className="p">Clean</p>
              <h2 className="h2">Exceptional Cleaning <span className="text-[--primary-color]">Services</span> for Every Space</h2>
            </div>
            {/* RIGHT TEXT */}
            <div>
              <p className="p">Our cleaning services are designed to meet your unique needs. We specialize in both residential and office cleaning, ensuring a spotless environment tailored just for you. Experience the difference with our dedicated team and meticulous approach.</p>
            </div>
          </div>

          {/* HALF TEXTS */}
          <div className="grid lg:grid-cols-3 px-8 lg:px-0 gap-y-6 lg:gap-y-0">
            <div className="flex flex-col gap-y-2 lg:gap-y-4 max-w-sm ">
              <PiHouseLineFill size={32} />
              <h3 className="h4">Residential Cleaning Tailored to Your Home</h3>
              <p className="p">Transform your living space with our thorough residential cleaning services.</p>
            </div>
            <div className="flex flex-col gap-y-2 lg:gap-y-4 max-w-sm">
              <HiOfficeBuilding size={32} />
              <h3 className="h4">Professional Office Cleaning for a Productive Workplace</h3>
              <p className="p">Keep your office pristine and welcoming with our expert cleaning solutions.</p>
            </div>
            <div className="flex flex-col gap-y-2 lg:gap-y-4 max-w-sm">
              <FaQuestion size={32}/>
              <h3 className="h4">Why Choose Our Cleaning Services?</h3>
              <p className="p">We prioritize quality, reliability, and customer satisfaction in every job.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-row gap-x-6 mx-auto lg:mx-0">
            <a className="btn_secondary" href="/servives">See More Services <CgArrowTopRight /></a>
          </div>
        </div>
        {/* FINAL CTA */}
        <div className="banner h-80 relative my-10 lg:my-0">
            <div className="absolute w-full h-full bg-[#000000a7]"></div>

            <div className="relative max-w-screen-xl mx-auto grid grid-rows-2 gap-y-8 py-10 z-10 px-8 lg:px-0">
              {/* TEXTS */}
              <div className="flex flex-col gap-y-2">
                <h2 className="h2 text-white">Schedule You Cleaning Today!</h2>
                <p className="p !text-[#f4f4f4]">Experience a sparkling clean home with our professional cleaning services. Schedule your appointment now!</p>
              </div> 

              {/* BUTTON */}
              <div className="flex flex-row gap-x-4">
                <a href="/contact" className="btn">Let's Talk</a>
                <a href="/contact" className="btn_secondary-transparent">Contact <CgArrowTopRight /></a>
              </div>
            </div>
        </div>  
      </section>
    </main>
  )
}
