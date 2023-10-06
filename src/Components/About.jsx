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
            I am a dedicated professional with a passion for excellence. I am
            committed to continuous learning and development to stay up-to-date
            with the latest trends and technologies in my field. I am confident
            in my ability to work collaboratively with cross-functional teams to
            achieve project objectives and exceed expectations.
          </p>
        </div>

        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experience
          </p>
          {workDetails.map(
            ({ Position, Company, Location, Type, Duration }) => (
              <WorkInfo
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
              />
            )
          )}
        </div>

        <div className="pb-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
          {educationkDetails.map(
            ({ Position, Company, Location, Type, Duration }) => (
              <WorkInfo
                position={Position}
                company={Company}
                location={Location}
                type={Type}
                duration={Duration}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
