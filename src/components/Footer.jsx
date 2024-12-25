import React from "react";
import logo from '../assets/schbang logo png.webp'

function Footer() {
  return (
    <>
      <footer className="bg-white h-[30vh] py-6 px-10 font-poppins text-sm">
        <div className="h-full w-full flex justify-between items-center">
          {/* Left Side: Links */}
          <div >
            <div className="mb-8 w-[60vw] flex flex-row items-center justify-between">
              <a href="#" className="text-gray-800 font-bold hover:underline">
                <img className="h-11 w-full" src={logo} alt="" />
              </a>
              <a href="#" className="text-gray-800 mr-4 hover:underline">Work</a>
              <a href="#" className="text-gray-800 mr-4 hover:underline">Solution</a>
              <a href="#" className="text-gray-800 mr-4 hover:underline">About</a>
              <a href="#" className="text-gray-800 mr-4 hover:underline">Resource</a>
              <a href="#" className="text-gray-800 hover:underline">Get Help</a>
            </div>
            <div className="flex gap-4 ml-5">
              <span className="text-gray-600">&copy;Schbang 2025. </span>
              <a href="#" className="text-gray-600 mr-4 hover:underline">User Agreement</a>
              <a href="#" className="text-gray-600 mr-4 hover:underline">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:underline">FAQs</a>
            </div>
          </div>

          {/* Right Side: Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.675C0 23.407.593 24 1.325 24H12.82V14.708H9.692V11.146H12.82V8.596C12.82 5.548 14.66 4.018 17.366 4.018 18.833 4.018 20.144 4.108 20.482 4.144V7.185H18.674C17.36 7.185 17.082 7.822 17.082 8.705V11.146H20.347L19.834 14.708H17.082V24H22.675C23.407 24 24 23.407 24 22.675V1.326C24 .593 23.407 0 22.675 0Z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M7.75 2.75H16.25C19.45 2.75 22 5.3 22 8.5V16.25C22 19.45 19.45 22 16.25 22H7.75C4.55 22 2 19.45 2 16.25V8.5C2 5.3 4.55 2.75 7.75 2.75ZM12 7.33C9.67 7.33 7.83 9.18 7.83 11.5C7.83 13.83 9.67 15.67 12 15.67C14.33 15.67 16.17 13.83 16.17 11.5C16.17 9.18 14.33 7.33 12 7.33ZM12 9.5C13.22 9.5 14.17 10.45 14.17 11.67C14.17 12.89 13.22 13.83 12 13.83C10.78 13.83 9.83 12.89 9.83 11.67C9.83 10.45 10.78 9.5 12 9.5ZM16.29 7.33C16.66 7.33 17 6.99 17 6.63C17 6.27 16.66 5.93 16.29 5.93C15.93 5.93 15.59 6.27 15.59 6.63C15.59 6.99 15.93 7.33 16.29 7.33Z" />
              </svg>

            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22.46 6.12C21.69 6.47 20.85 6.71 20 6.84C20.87 6.26 21.52 5.34 21.88 4.31C21.05 4.88 20.14 5.3 19.19 5.55C18.41 4.71 17.29 4.2 16.05 4.2C13.74 4.2 11.86 6.09 11.86 8.4C11.86 8.73 11.9 9.05 11.97 9.36C8.32 9.14 5.12 7.39 3 4.75C2.61 5.41 2.38 6.16 2.38 6.94C2.38 8.42 3.19 9.72 4.35 10.46C3.67 10.43 3.05 10.24 2.5 9.93V9.97C2.5 12.06 3.93 13.83 5.9 14.24C5.51 14.35 5.1 14.41 4.68 14.41C4.39 14.41 4.1 14.38 3.82 14.33C4.4 16.08 5.96 17.35 7.82 17.39C6.38 18.54 4.57 19.26 2.58 19.26C2.28 19.26 1.98 19.24 1.69 19.21C3.56 20.45 5.76 21.2 8.13 21.2C16.04 21.2 20.2 14.54 20.2 8.98L20.19 8.61C20.99 8.03 21.7 7.3 22.3 6.5L22.46 6.12Z" />
              </svg>


            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M4.98 3.5C4.98 4.61 4.08 5.5 3 5.5C1.92 5.5 1.02 4.61 1.02 3.5C1.02 2.4 1.92 1.5 3 1.5C4.08 1.5 4.98 2.4 4.98 3.5ZM1.5 8.19H4.5V21H1.5V8.19ZM9 8.19H12V10H12.11C12.64 9.19 13.93 8.14 16 8.14C19.6 8.14 21 10.29 21 13.7V21H18V14.62C18 12.44 17.3 11.27 15.78 11.27C14.24 11.27 13.5 12.43 13.5 14.62V21H10.5V8.19H9Z" />
              </svg>

            </a>
           
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer;