import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center px-10 py-10'>
            <div className='logo'>
                <img className='bg-center bg-cover w-10' src='https://cdn.worldvectorlogo.com/logos/netflix-logo-icon.svg' />
            </div>

            <div>
                <div>
                    <ul className='flex gap-[3vw]'>
                        {["Home", "About Us", "Pricing", "Opportunities"].map((item, index) => {
                            return <li className='cursor-pointer hover:text-amber-900' key={index}>
                                {item}
                            </li>
                        })}

                    </ul>
                </div>
            </div>

            <div>
                <ul>
                    <li className='cursor-pointer hover:text-amber-900'>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar