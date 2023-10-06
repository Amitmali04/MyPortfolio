import React from "react";
import {MdLocationPin} from 'react-icons/md'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'


const WorkInfo = ({ position, company, location, type, duration }) => {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 ">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <HiOutlineBuildingOffice2 />

            <p className="text-content text-xs md:text-sm font-light pl-1">
              {company}
            </p>
          </div>
          <div className="flex items-center">
            <MdLocationPin />
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {location}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">
          {duration}
        </p>
      </div>
    </article>
  );
};

export default WorkInfo;
