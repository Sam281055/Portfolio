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
    <div className="w-10/12 mx-auto my-auto h-[80vh] border rounded-md">
      <div className="flex p-10">
        <div className="w-1/2">
          <h2 className="">{projectNumber}</h2>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>  
        <div className="w-1/2 justify-end">
          <div className="flex mx-auto w-full justify-end">
            <button className="w-32 h-10 text-xl hover:bg-green-500 rounded-md border">

              <p className="px-10 text-center">{btnTxt}</p>
            </button>
            <button className="w-32 h-10 text-xl hover:bg-green-500 ml-5 rounded-md border">

              <p className="px-10 text-center">{btnTxt2}</p>
            </button>
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
