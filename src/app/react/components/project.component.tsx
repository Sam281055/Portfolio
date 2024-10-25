import React from "react";
type set = {
  title: string;
  description: string;
  link: string;
  projectNumber: string;
  btnTxt: string;
  btnTxt2: string;
};
const ProjectCard = ({
  title,
  description,
  link,
  projectNumber,
  btnTxt,
  btnTxt2,
}: set) => {
  return (
    <div className="w-10/12 mx-auto my-auto">
      <div className="flex">
        <div className="w-1/2">
          <h2 className="">{projectNumber}</h2>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        <div className="w-1/2 justify-end">
          <div className="flex mx-auto w-full justify-end">
              <button className="bg-yellow-700 px-10 text-4xl rounded-[40px] border">
                {btnTxt}
              </button>
            <button className="rounded-md mx-4">{btnTxt2}</button>
          </div>
          <p className="">{description}</p>
        </div>
      </div>

      <div className="w-10/12 mx-auto">
        <a href={link} target="_blank">
          <h1>IMG</h1>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
