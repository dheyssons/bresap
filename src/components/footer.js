"use client"

import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});

import { ImWhatsapp, ImInstagram, ImMail2 } from 'react-icons/im';

import Link from 'next/link';
import Image from 'next/image';
import Logo from "../images/logo.webp"

export default function Footer() {
	return (
        <footer className=' bg-white'>
			<div className='container mx-auto flex flex-col w-full max-w-[75rem] gap-y-[2rem] pt-8 lg:p-8'>
				<div className='flex flex-row justify-between'>
					{/* menu  */}
					<div className='flex flex-col gap-y-6 px-6'>
						<a className={`${archivo.className} p medium text-[#080808] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[#659e28] after:block`}>Menu</a>
						<a href='/' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> Home </a>
						<Link href='/services' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> Services </Link>
						{/* <a href='/about' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> About </a> */}
						<a href='/contact' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> Contact </a>
						{/* <Link href='#contactus' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> Contact </Link> */}
					</div>

					<div className='flex flex-col items-center px-6'>
						{/* icon & text  */}
						<div className='flex flex-col items-center w-full max-w-[30rem]'>
							<Image src={Logo} className='w-full max-w-[64px] h-full max-h-[64px] mb-3' alt="" />
							<p className={`${archivo.className} p small mb-10 w-[8rem] md:w-full text-center`}>Your Cleaning Expert</p>
						</div>
						
						{/* social media  */}
						<div className='flex flex-col md:flex-col justify-between'>
							<div className=' flex flex-col gap-y-6'>
								<nav>
									<ul className='flex flex-col md:flex-row gap-2 md:gap-8'>
										<li className='flex flex-row items-center'>
											<a className="!hidden lg:!flex social_link btn" href="mailto:bresap@gmail.com" target='_blank'>bresap.srv@gmail.com</a>
											<a className="lg:!hidden social_link btn w-full" href="mailto:bresap@gmail.com" target='_blank'>
											<ImMail2 className='mr-2' />Email</a>
										</li>
										<li className='flex flex-row items-center'>
											<a className="social_link btn" href="https://www.instagram.com/bresap_service/" target='_blank' title='instagram profile'>
											<ImInstagram className='mr-2' />Instagram</a>
										</li>
										<li className='flex flex-row items-center'>
											<a className="social_link btn" href="https://api.whatsapp.com/send?phone=32465580914" target='_blank' title='whatsapp number'>
											<ImWhatsapp className='mr-2' />Whatsapp</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<p className={`${archivo.className} p small self-center text-center m-[1rem]`}>© 2025 - BRESAP</p>
			</div>
		</footer>
    )
}