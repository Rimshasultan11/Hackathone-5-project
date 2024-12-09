import React from 'react'
import { FaPinterest, FaInstagram, FaFacebookSquare, FaSkype, FaLinkedin } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import Link from 'next/link';
const FooterS = () => {
  return (
    <div>
       <div className="bg-[#2A254B] w-full py-10">
      <div className="wrapper flex flex-col lg:flex-row justify-between gap-10 px-6 lg:px-12">
       
        {/* Brand Nmae */}
      <div>
          <h1 className="text-white text-lg font-semibold mb-4">Avion</h1>
          <ul className="text-[14px] text-[#FFFFFF] space-y-2">
            <li><Link href="#">21 New York Street</Link></li>
            <li><Link href="#">New York City</Link></li>
            <li><Link href="#">United States of America</Link></li>
            <li><Link href="#">432 34</Link></li>
          </ul>
        </div>

      {/* social Links */}
       <div>
      <h1 className="text-white text-lg font-semibold mb-4">Social Link</h1>
      <div className="flex gap-4 text-xl text-white">
          <FaLinkedin />
          <FaFacebookSquare />
          <FaInstagram />
          <FaSkype />
          <CiTwitter />
          <FaPinterest />
        </div>

       </div>
       
        {/* Manu */}
        <div>
          <h1 className="text-white text-lg font-semibold mb-4">Manu</h1>
          <ul className="text-[14px] text-[#FFFFFF] space-y-2">
            <li><Link href="#">New arrivals</Link></li>
            <li><Link href="#">Best sellers</Link></li>
            <li><Link href="#">Recently viewed</Link></li>
            <li><Link href="#">Popular this week</Link></li>
            <li><Link href="#">All products</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h1 className="text-white text-lg font-semibold mb-4">Categories</h1>
          <ul className="text-[14px] text-[#FFFFFF] space-y-2">
            <li><Link href="#">Crockery</Link></li>
            <li><Link href="#">Furniture</Link></li>
            <li><Link href="#">Homeware</Link></li>
            <li><Link href="#">Plant pots</Link></li>
            <li><Link href="#">Chairs</Link></li>
            <li><Link href="#">Crockery</Link></li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h1 className="text-white text-lg font-semibold mb-4">Our company</h1>
          <ul className="text-[14px] text-[#FFFFFF] space-y-2">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Vacancies</Link></li>
            <li><Link href="#">Contact us</Link></li>
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Returns policy</Link></li>
          </ul>
        </div>

       </div>
      {/* Divider */}
      <hr className="border-[#4E4D93] my-6 mx-6 lg:mx-12" />

      {/* Footer Bottom */}
      <div className="wrapper justify-between items-center gap-4 px-6 lg:px-12">
        <p className="text-[#FFFFFF] text-sm">Copyright 2022 Avion LTD</p>
      </div>
    </div>
    </div>
  )
}

export default FooterS