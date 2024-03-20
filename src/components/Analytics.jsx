import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores illo accusantium accusamus beatae nostrum. Necessitatibus blanditiis est facere omnis fugiat iure nesciunt dolore doloribus ipsa nemo itaque, voluptas nulla ab.
                </p>
                <button className="bg-white border border-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black hover:scale-110 hover:duration-500 hover:text-[#00df9a] hover:bg-[#000300] hover:border hover:border-black">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics