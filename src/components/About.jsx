import React from 'react'

const About = () => {
  return (
    <div name='about' className=' flex justify-center items-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto felx flex-col justify-center w-full h-full'>
            <div className='py-20'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-10 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam officiis consequatur facere, rerum saepe distinctio dolorum eligendi, natus nulla quos voluptatem nihil, perspiciatis tenetur? Soluta!</p>
            <br />
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis non rem ratione ipsam illo culpa cum odit, doloremque molestias voluptatum doloribus veniam ducimus, eveniet sunt eaque cumque aliquid. Ad.</p>
        </div>

    </div>
  )
}

export default About