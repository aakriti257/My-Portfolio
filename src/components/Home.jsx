import React from 'react'
import HeroImage from "../assets/abc.jpeg" ;
import {MdKeyboardArrowRight} from "react-icons/md"
import {Link} from "react-scroll"
const Home = () => {
  return (
    <div 
      name="Home" 
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-purple-900">
        
        <div className='max-w-screen-md mx-auto flex flex-col items-center 
            justify-center h-full px- md:flex-row'>
            <div className="flex flex-col justify-center h-full">
                  <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    <span className='text-purple-400'>I'm</span> a Front-End <span className ="text-purple-400">Developer</span>
                   
                  </h2>
                  <p className="text-white py-4 ">I am a passionate front-end developer with a 
                    strong foundation in web development technologies. 
                    with the skills in both front-end  development,
                     making me adept at creating dynamic and responsive web applications.
                    I have a solid grasp of programming languages like HTML, CSS, JavaScript, 
                    Tailwind and React and I am eager to apply my knowledge to real-world projects.
                  </p>
                <div>
                    <Link to="Portfolio" smooth duration={500} 
                    className="group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r 
                    from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={25}
                             className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>

            {/*<div>
                <img src={HeroImage} alt="my profile" class="rounded-2xl w-2/3 md:w-full mx-auto mb-20 "/>
            </div>*/}
        </div>
    </div>
  )
};

export default Home