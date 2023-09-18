import React from 'react';
import ss1 from '../assets/ss1.png';
import ss2 from '../assets/ss2.png';
import ss3 from '../assets/ss3.png';
import ss4 from '../assets/ss4.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ss1,
      url: 'https://github.com/aakriti257/Restaurant-Website',
    },
    {
      id: 2,
      src: ss2,
      url: 'https://github.com/aakriti257/Stream_Finder',
    },
    {
      id: 3,
      src: ss3,
      url: 'https://streamfind-web.vercel.app/',
    },
    {
      id: 4,
      src: ss4,
      url: 'hehe',
    },
  ];

  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-700 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-white rounded-lg">
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a target='_blank' href={url}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
