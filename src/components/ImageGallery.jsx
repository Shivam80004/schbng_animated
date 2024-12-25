import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bridge from '../assets/img-bridge.svg'
import { useGSAP } from '@gsap/react';
import btm from '../assets/background22.png'

gsap.registerPlugin(ScrollTrigger);

function ImageGallery() {

    const images = [
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/655da88f5ebcb0f7d393b360_madmix%20WEBSITE%20CS-01-p-1600.png',
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64f5baf3ba8347c71679d608_iqoo%20website%20case%20study-01-p-1600.png',
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/647725f396c6376edf86be43_DOMINOS%20WEBSITE%20CASE%20STUDY%20m%20text-01%20(Large)-p-1600.png',
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/647726b6bbb4647b00589d78_FEVICOL%20WEBSITE%20CASE%20STUDY%20M%20TEXT%20(Large)-p-1600.png',
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6477272c5e9047a330a89ba3_SWITCH%20MOBILITY%20STUDY%20M%20TEXT-01%20(Large)-p-1600.png',
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/646b110fe6c2b20c089dec8d_H%26M%20WEBSITE%20CS-01%20(Large).png',
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6477266468810cea11c95a7e_JUST%20ONE%20HEAD%20CASE%20STUDY%20M%20TEXT-01%20(Large)-p-1600.png',
        'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/647031c8c0c41a05b7bb50b3_BLACK%20AND%20DECKER%20CASE%20STUDY-01%20(Large)-p-1600.png'
    ]

    return (
        <>
            <div className='h-full w-full bg-gradient-to-t to-whitez from-blue-800 relative'>
                <div className='h-[65vh] w-[15vw] bg-gradient-to-r from-white to-[#ffffff00] absolute top-0 left-0 z-10'></div>
                <div className='h-[65vh] w-[15vw] bg-gradient-to-r to-white from-[#ffffff00] absolute top-0 right-0 z-10'></div>

                <div className='h-[75vh] w-full rounded-[60px] overflow-hidden bg-white' >
                    <div className='slide-track animate-scroll hover:animation-paused h-[70vh] w-full scrollbar-hide flex items-center justify-items-center '
                    >
                        {
                            images.map((backgrounds, index) => (
                                <div style={{ perspective: "100px" }} key={index} className="h-[30vh] w-[180px] sm:h-[60vh] sm:w-[50vw] flex-shrink-0">
                                    <img
                                        src={backgrounds}
                                        className='w-full h-full p-3 rounded-3xl object-cover hover:scale-y-105 hover:scale-x-105 transition-transform ease-in-out duration-300' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="h-screen w-full bg-[#] bg-gradient-to-t to-blue-800 from-[#00a2ff] relative">
                <div className='h-[87vh] w-[75vw] bg-white absolute bottom-0 right-[9%] rounded-[50px] flex items-center justify-center'>
                    <iframe
                        src="https://player.vimeo.com/video/1009850695?h=0ef5fe8a95&autoplay=1&loop=1&muted=1&controls=0"
                        className="h-[90%] w-full object-cover rounded-3xl"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Embedded Vimeo Video"
                    ></iframe>
                </div>
                <img className="h-full w-full absolute bottom-0" src={btm} alt="" />
            </div>
        </>
    )
}

export default ImageGallery