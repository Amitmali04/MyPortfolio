import React from 'react'
import { Link } from 'react-scroll'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";


const Home = () => {
  return (
    <div name="home" className='w-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-16'>

        <div className='max-w-screen-lg mx-auto  flex flex-col items-center justify-between h-full py-10 md:flex-row'>
            <div className='flex flex-col justify-center h-full mt-10 px-5 mx-10 md:mt-0'>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          {/* <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap"></span></span> */}

          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience IT Excutive.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS, Node and MongoDB.
          </p>

          <div>
          <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer sm:items-center"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
            </div>

            <div className=''>
            <img src={HeroImage} alt='my-Profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
        </div>   
    </div>
  )
}

export default Home
