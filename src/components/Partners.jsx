import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Partners() {

    const img = [
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6767bca0de38568fef7_Tata%20Communications%20Logo-p-500.webp",
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a654eb26aa9e17e57f7b_White%20bg%20logo-01%20-%20Aniket%20Sharma%20(1)-p-500.webp",
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a688dc557cbd3f8764d2_PayTM-p-500.webp",
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6a9a55b9bf8075c3208_Protinex%20(1).webp",
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6b985072710b1ea7df9_Hershey%E2%80%99s%20(1)-p-500.png",
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a71f7e03b0faa862befb_Bodycraft_Logo_png-p-500.png",
        "https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a52e7e03b0faa8614a73_glow_and_lovely_logo%20-%20Prajna%20Anchan-p-500.png",
    ]


      // GSAP animation
      useGSAP( ()=>{
        gsap.fromTo('.white-text',
            {
            width: "0%"
            },
            {
            width: "100%",
            duration: 1,
            stagger: {
              amount: 1,
            },
            scrollTrigger: {
              trigger: ".about",
              start: "top 60%",
              end: "+=90%",
              scrub: 1,
            },
          });
      });

    // useEffect(() => {
    //     ScrollTrigger.matchMedia({
    //         "(min-width: 768px)": function(){
    //             gsap.to('.white-text', 3.5,{
    //               width: '100%',
    //               stagger: {
    //                 amount: 1
    //               },
    //               scrollTrigger:{
    //                 trigger: '.about',
    //                 start: 'top 60%',
    //                 end: '+=90%',
    //                 scrub: 1,
    //               }
    //             })
                
    //         }
    //       })
    //     })

    return (
        <>
            {/* <div className="h-[100vh] w-full bg-amber-400 absolute top-[1100vh]">

            </div> */}
            <div className="about h-[400vh] w-full bg-blue-700 flex relative">

                <div className="h-screen w-1/2 bg-blue-700 sticky top-0">

                    <div className='text-area relative font-poppins font-bold text-7xl uppercase '>
                        <div className="grey-text text-blue-500 absolute text-xl top-[30vh] left-[7%]">Partnering</div>
                        <div className="white-text w-[0] overflow-hidden text-white absolute text-xl top-[30vh] left-[7%]">Partnering</div>

                        <div className="grey-text text-blue-500 absolute top-[35vh] left-[10%]">With&nbsp;the</div>
                        <div className="white-text w-[0] overflow-hidden text-white absolute top-[35vh] left-[10%]">With&nbsp;the</div>

                        <div className="grey-text text-blue-500 absolute top-[45vh] left-[20%]">world's</div>
                        <div className="white-text w-[0] overflow-hidden text-white absolute top-[45vh] left-[20%]">world's</div>

                        <div className="grey-text text-blue-500 absolute top-[55vh] left-[10%]">Leading</div>
                        <div className="white-text w-[0] overflow-hidden text-white absolute top-[55vh] left-[10%]">Leading</div>

                        <div className="grey-text text-blue-500 absolute top-[65vh] font-poppinss italic left-[20%]">BRANDS</div>
                        <div className="white-text w-[0] overflow-hidden text-white absolute top-[65vh] font-poppinss italic left-[20%]">BRANDS</div>
                    </div>

                </div>

                <div className="h-[300vh] w-1/2 bg-blue-700 mt-[35%]">

                    <div className="h-full w-full flex flex-col items-center justify-between">

                        {img.map((imgs, id) => (
                            <div className="h-[10vh] w-[24vw] filter brightness-[10]">
                                <img className="h-full w-full object-scale-down" id={id} src={imgs} key={id} alt="" />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Partners;