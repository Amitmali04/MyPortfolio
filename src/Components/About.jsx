import React from "react";
import { educationkDetails, workDetails } from "../Details/InfoDetails";
import WorkInfo from "./WorkInfo";


const About = () => {

  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white pt-16"
    >
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full py-10 md:flex-row'">
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>

          <p className="text-xl mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>

        </div>
       
        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Work Experience
          </p>
          {
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <WorkInfo
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        }
        </div>


        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Education
          </p>
          {
          educationkDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <WorkInfo
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        }
        </div>
     

      </div>
    </div>
  );
};

export default About;
