import React from 'react'
import { data } from "../data/data.js";
const Work = () => {
    const project = data;
  return (
    <div className='min-h-[85vh] lg:min-h-[100vh] flex items-center' id='work'>
    <div className='container mx-auto'>
        <div className='max-w-[100px]  p-4 flex flex-col justify-center w-full h-full'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 pb-2 '>
                Projects
            </p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
        {project.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div h-[250px] object-center  "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100">
      <span className="text-2xl font bold text-purple-500 tracking-wider mx-auto my-auto ">
        {item.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
            bg-purple-200 text-black font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
            bg-purple-200 text-black font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}
        </div>
    </div>
</div>
  )
}

export default Work