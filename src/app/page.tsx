import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Home = () => {
    return (
        <div className="grid h-screen w-full items-center justify-center bg-[#0c0b0b]">
            <div className='pt-12 pb-12 bg-[#161111]'>
                <div className="pb-12 lg:pb-20 w-3/4 lg:w-1/2 mx-auto text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-6 h-6 text-[#ceed67] mb-8" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed text-[#d9d9d9] font-mono text-sm">Motivated and Hardworking individual with a passion for software development. Strong understanding of software development concepts and eagerness to learn devops.</p>
                    <span className="inline-block h-1 w-10 rounded bg-[#6f7167] mb-2 mt-4"></span>
                    <div className='pt-4 bg-[#333] text-center'>
                        <Link  href="https://drive.google.com/file/d/1vlKqk-noCRsfgbO3IGFPhcLsnqITOBHp/view?usp=drive_link"><button className="m-2 py-2 px-4 font-mono duration-300 text-sm text-[#ceed67] border border-[#ceed67] rounded-full hover:text-[#333] hover:bg-[#ceed67] hover:scale-110">view resume</button></Link>
                        <Link href="/Projects"><button className="m-2 py-2 px-4 font-mono duration-300 text-sm text-[#ceed67] border border-[#ceed67] rounded-full hover:text-[#333] hover:bg-[#ceed67] hover:scale-110">view projects</button></Link>
                    </div>
                </div>
                <div className='pt-8 lg:pt-20 bg-[#333] w-3/4 lg:w-1/2 mx-auto text-center lg:border-t border-gray-200'>
                    <p className='leading-relaxed text-[#ceed67] font-mono font-bold'>Who Am I?</p>
                    <p className='leading-relaxed text-[#d9d9d9] font-mono text-sm'>Hi everyone, I am Saksham koul from Faridabad, India. I am a Fourth year student pursuing Computer Science at bennett university. Collaboration, problem-solving, and a keen eye for detail define my approach to development.!</p>
                </div>
                <div>
                    <div className='pt-12 lg:pt-20 bg-[#333] text-center text-3xl'>
                        <button className='px-4 text-[#d9d9d9] hover:text-[#ceed67] duration-300 hover:scale-125'><a href='https://www.linkedin.com/in/sakshamkoul09/'><FaLinkedin /></a></button>
                        <button className='px-4 text-[#d9d9d9] hover:text-[#ceed67] duration-300 hover:scale-125'><a href='https://github.com/saksham-koul-2003'><FaGithub /></a></button>
                        <button className='px-4 text-[#d9d9d9] hover:text-[#ceed67] duration-300 hover:scale-125'><a href='https://mail.google.com/mail/u/0/#inbox'><SiGmail /></a></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
