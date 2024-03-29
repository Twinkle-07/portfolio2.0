import React from 'react'
import us from './assets/u&me.jpg'
import me from './assets/IMG_20230106_185250_376.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
import Experience from './components/Experience';

const Home = () => {
    return (
        <>
            <div name="home" className=' h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                    <div className='flex flex-col justify-center h-full'>
                        <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a full stack devloper</h2>
                        <p className='text-gray-500 py-4 max-w-md'>I am a fresher in frontend and backend development with full stack technology as per the current service or experience.</p>
                        <div>
                            <Link to='/experience' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'>
                                Experience
                                <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1'/>
                                </span>
                            </Link>
                        </div>

                    </div>
                    <div>
                    <img src={me} alt="myImg" className='rounded-2xl mx-auto w-auto h-80 md:w-full' />
                    </div>
                </div>
                
                
            </div>

        </>
    )
}

export default Home