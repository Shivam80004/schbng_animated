import React from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from '../assets/schbang logo png.webp'
import star from '../assets/star.png'
import bg from '../assets/full bg.png'

function Hero() {

  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from("#heading-3", { y: 50, opacity: 0 })
      .from("#heading-1", { y: 50, opacity: 0 }, "-=0.4")


    gsap.fromTo(
      '.main',
      {
        // marker:true
        scale: 1
      },
      {
        scale: 3.5,
        opacity: 0,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.main',
          start: "top top",
          end: "+=500",
          scrub: true,
          // markers:true,
        },
      });

  });

  return (
    <>

      <nav className="bg-white/95 backdrop:blur-lg text-gray-900 shadow-lg fixed top-0 rounded-2xl m-9 pl-7 pr-2 z-50 inset-x-0">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a href="/">
              <img className='h-11 w-full' src={logo} alt="" />
            </a>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static w-full font-semibold lg:w-auto left-0 transition-all duration-300 ease-in-out ${isOpen ? 'top-16' : '-top-72'
              }`}>
            <a href="#" className="block lg:inline-block px-4 py-2 hover:text-blue-800">Work</a>
            <a href="#" className="block lg:inline-block px-4 py-2 hover:text-blue-800">Solution</a>
            <a href="#" className="block lg:inline-block px-4 py-2 hover:text-blue-800">About</a>
            <a href="#" className="block lg:inline-block px-4 py-2 hover:text-blue-800">Resources</a>
            <a href="#" className="block lg:inline-block px-4 py-2 hover:text-blue-800">Careers</a>
            <a href="#" className="block lg:inline-block px-4 py-2 bg-black p-3 rounded-2xl shadow-sm text-white hover:bg-blue-800">Contact Us</a>


          </div>
        </div>
      </nav>
      <div className="h-full w-full overflow-hidden bg-gradient-to-t from-blue-800 to-[#00a2ff] relative">

     
        <div className="main h-screen w-full text-white">
          <section
            id="explore-section"
            className=" h-1/2 text-white sm:h-screen"
          >

            <h3
              id="heading-3"
              className="text-white font-poppins font-semibold text-xl absolute top-[40%] left-[10%] md:font-poppins md:font-bold md:text-4xl sm:mb-4"
            >
              Your ,
            </h3>
            <h3
              id="heading-3"
              className="text-white font-poppins font-semibold text-2xl absolute top-[51%] left-[10%] md:font-poppins md:font-bold md:text-[70px] sm:mb-4"
            >
             Creative, Media & Technology
            </h3>
            <h1
              id="heading-1"
              className="text-white font-poppins font-semibold text-xl absolute top-[63%] left-[25%] md:font-poppins md:font-medium md:text-6xl sm:mb-4"
            >
              Transformation Partner
            </h1>

          </section>
        </div>
      </div>
    </>
  )
}

export default Hero;