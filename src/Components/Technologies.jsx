import React from 'react'
import { technologies } from '../Details/InfoDetails'


const Technologies = () => {
  return (
    <div
    name="technologies"
    className="bg-gradient-to-b from-gray-800 to-black w-full text-white bg-white"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-24">
         <div className='pb-8'>
           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
           Technologies
           </p>
           <p className="py-6">These are the technologies I've worked with</p>
         </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
    </div>
  </div>
  )
}

export default Technologies
