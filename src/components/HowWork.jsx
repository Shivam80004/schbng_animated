import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import one from "../assets/p1.png";
import two from "../assets/p2.png";
import three from "../assets/p3.png";
import four from "../assets/p4.png";
import five from "../assets/p5.png";

gsap.registerPlugin(ScrollTrigger);

function HowWork() {

    useEffect(() => {
        const lenis = new Lenis();
    
        // Sync Lenis scroll with ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 600));
        gsap.ticker.lagSmoothing(0);
    
        const stickySection = document.querySelector(".sticky-section");
        const cards = document.querySelectorAll(".card");
    
        if (stickySection && cards.length) {
          const totalCards = cards.length;
          const stickyHeight = window.innerHeight * 9;
    
          // Initial setup: hide cards and set starting position
          gsap.set(cards, { opacity: 0, y: 50 });
    
          ScrollTrigger.create({
            trigger: stickySection,
            start: "top top",
            end: `+=${stickyHeight}px`,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => positionCards(self.progress),
            //markers: true,
          });
    
          const getRadius = () => {
            return window.innerWidth < 900
              ? window.innerWidth * 7.5
              : window.innerWidth * 2.5;
          };
    
          const arcAngle = Math.PI * 0.4;
          const startAngle = Math.PI / 2 - arcAngle / 2;
    
          const positionCards = (progress = 0) => {
            const radius = getRadius();
            const totalTravel = 0.5 + totalCards / 7.5;
            const adjustedProgress = progress * totalTravel;
    
            cards.forEach((card, i) => {
              const normalizedProgress = i / totalCards;
              const cardProgress = normalizedProgress + adjustedProgress;
    
              const angle = startAngle + arcAngle * cardProgress - 0.5;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const rotation = (angle - Math.PI / 2) * (-180 / Math.PI);
    
              // Animate position and opacity
              gsap.to(card, {
                x : x - 10,
                y:  -radius + y - 30,
                rotation: -rotation,
                opacity: 1,
                transformOrigin: "center center",
                duration: 0.3,
                ease: "power2.out",
              });
            });
          };
    
          positionCards(0); // Initial setup
        }
    
        return () => {
          ScrollTrigger.getAll().forEach((instance) => instance.kill());
          lenis.destroy();
        };
      }, []); 

    return (
        <>
        <div className="h-full w-full bg-[#000e23] overflow-hidden">
        <div className="h-full w-full bg-[#ffffff]" id="container">
            <div className="h-[100vh] w-[100vw] relative sticky-section ">
                <div></div>
                <div className="cards h-[200px] w-[150vw] absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 will-change-transform">
                    <div className="card h-[550px] w-[500px] absolute top-1/2 left-1/2 ml-[-250px] transform origin-center will-change-transform">
                        <div className="cardImg overflow-hidden">
                             <img className="h-full w-full object-cover rounded-[80px] shadow-lg " src={five} alt="" />
                        </div>
                    </div>
                    <div className="card h-[550px] w-[500px] absolute top-1/2 left-1/2 ml-[-250px] transform origin-center will-change-transform">
                        <div className="cardImg overflow-hidden">
                             <img className="h-full w-full object-cover rounded-[80px] shadow-lg " src={four} alt="" />
                             
                        </div>
                    </div>
                    <div className="card h-[550px] w-[500px] absolute top-1/2 left-1/2 ml-[-250px] transform origin-center will-change-transform">
                        <div className="cardImg overflow-hidden">
                             <img className="h-full w-full object-cover rounded-[80px] shadow-lg " src={three} alt="" />
                            
                        </div>
                    </div>
                    <div className="card h-[550px] w-[500px] absolute top-1/2 left-1/2 ml-[-250px] transform origin-center will-change-transform">
                        <div className="cardImg overflow-hidden">
                             <img className="h-full w-full object-cover rounded-[80px] shadow-lg " src={two} alt="" />
                             
                        </div>
                    </div>
                    <div className="card h-[550px] w-[500px] absolute top-1/2 left-1/2 ml-[-250px] transform origin-center will-change-transform">
                        <div className="cardImg overflow-hidden">
                             <img className="h-full w-full object-cover rounded-[80px] shadow-lg " src={one} alt="" />
                             
                        </div>
                    </div>
         
                    
                    
                    
                </div>
            </div>
        </div>
        </div>
        </>
    )

}

export default HowWork;