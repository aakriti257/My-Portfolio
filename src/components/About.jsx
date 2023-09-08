import React from 'react'

const About = () => {
  return (
    <div name="about" 
         className="w-full h-screen bg-gradient-to-b from-gray-700 to-black text-white">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">
                About
            </p>
        </div>
        <p className="text-xl mt-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, numquam fuga! Consequatur nihil exercitationem corrupti tenetur pariatur perferendis ipsa tempore velit laborum ut doloremque eum architecto quia libero aliquam perspiciatis quos laudantium nisi alias, delectus expedita voluptas doloribus. Eveniet optio ratione, quae ipsum quia reiciendis iusto fuga beatae fugit vel.
        </p> 

        <br/>   

        <p className="text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo tempore, excepturi vitae quisquam earum, aliquid ipsum maiores, velit exercitationem doloremque recusandae mollitia assumenda sit consequuntur? Quos maxime facere quae consectetur! Architecto, quia consectetur beatae dolore dignissimos numquam rem voluptas, ducimus a tempore suscipit ipsum aliquam, blanditiis obcaecati magnam dicta sequi?
        </p>
        </div>
    </div>
  )
}

export default About