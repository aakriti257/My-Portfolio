import React from 'react'

const About = () => {
  return (
    <div name="About" 
         className="w-full h-screen bg-gradient-to-b from-purple-900 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">
                About
            </p>
        </div>
        <p className="text-xl mt-20">
        Welcome to my portfolio! I'm a passionate frontend developer with expertise in building dynamic web applications using React.js and crafting visually appealing user interfaces with the power of Tailwind CSS. Here, you'll find a glimpse of my journey in web development, 
        highlighting projects that demonstrate my skills and dedication to creating engaging digital experiences.
        </p> 

        <br/>   
  
        <p className="text-xl ">
        I have also worked on  a web development project that demonstrates my proficiency in HTML, CSS, and JavaScript. This project was designed to  create a user-friendly e-commerce food/restaurant website for ordering food and to learn frontend.


        </p>
        </div>
    </div>
  )
}

export default About