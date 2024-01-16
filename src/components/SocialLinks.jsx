import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMailOpen } from "react-icons/io";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <> Linkedin <FaLinkedin size={30} /> </>
      ),
      href: 'https://Linkedin.com',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <> Github <FaGithub size={30} /> </>
      ),
      href: 'https://Github.com/Twinkle-07',

    },
    {
      id: 3,
      child: (
        <> Email <IoMdMailOpen size={30} /> </>
      ),
      href: 'mailto:pathroserozario5',

    },
    {
      id: 4,
      child: (
        <> Resume <BsFillPersonLinesFill size={30} /> </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ]

  return (
    <>
      <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

          {
            links.map(({id, child,href, style , download}) => {
              return (
                <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>
                  <a href={href} className='flex justify-between items-center w-full text-white'
                    download= {download}
                    target='_blank'
                    rel="noreferrer"
                  >
                    {child}

                  </a>
                </li>
              )
            })
          }



        </ul>
      </div>
    </>
  )
}

export default SocialLinks