import Button from '@/components/atoms/Button'
import Logo from '@/components/atoms/Logo'
import Text from '@/components/atoms/Text'
import NavLink from '@/components/molecules/NavLink'
import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-full pt-12 pb-16 bg-darkblue flex justify-center items-center flex-col'>
        <div className='w-11/12 flex justify-between items-center border-b pb-12 border-[#71777D]'>
            {/* left side */}
            <div className='space-y-5 w-6/12'>
              <Logo>IITC</Logo>
              <Text 
                additionals={'w-6/12'} 
                size={'small'} 
                color={'white'}>
                    mencari generasi dengan potensi yang luar biasa pada bidang tertentu
              </Text>
              <ul className='flex space-x-4'>
                 <NavLink isSmall target="#hero">Home</NavLink>
                 <NavLink isSmall target="#about">About</NavLink>
                 <NavLink isSmall target="#skema">Skema</NavLink>
                 <NavLink isSmall target="#lomba">Lomba</NavLink>
                 <NavLink isSmall target="#timeline">Timeline</NavLink>
                 <NavLink isSmall target="#faq">FAQ</NavLink>
              </ul>
              <div className='flex space-x-2 text-white items-center'>
               <AiOutlineMail />
               <Text color={'white'} size={'small'}>adminiitc@gmail.com</Text>
               <AiOutlinePhone />
               <Text color={'white'} size={'small'}>+6288177162</Text>
              </div>
            </div>
            {/* right side */}
            <form className='flex justify-center items-end w-6/12 flex-col space-y-2'>
              <label className='flex space-y-2 flex-col'>
                <Text size={'description'} color={'white'}>Get the freshest news from us</Text>
                <div className='flex items-center space-x-3'>
                  <input 
                    type='text' 
                    placeholder='your email address' 
                    className='bg-white px-2 py-1 rounded-md focus:outline-none text-sm'  
                  />
                  <Button isSquare color={'oren'} size={'sm'}>Subscribe</Button>
                </div>
              </label>
              </form>
        </div>
              {/* bottom */}
            <div className='w-11/12 flex justify-between mt-6 text-[#92989F] items-center'>
                <ul className='flex space-x-4 items-center'>
                    <li className='border-x border-[#92989F] text-xs px-3'><a href='#'>Terms & Conditions</a></li>
                    <li className='border-r border-[#92989F] text-xs pr-3'><a href='#'>Privacy Policy</a></li>
                    <li className='border-r border-[#92989F] text-xs pr-3'><a href='#'>Accessibility</a></li>                      
                    <li className='border-r border-[#92989F] text-xs pr-3'><a href='#'>Legal</a></li>
              </ul>
              <p>Develop with love © Intermedia 2023. All right reserved</p>
            </div>
    </footer>
  )
}

export default Footer
