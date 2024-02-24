import React from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';
import {
	LucideApple,
	LucideFacebook,
	LucideInstagram,
	LucideLinkedin,
	LucideMail,
	LucideMapPin,
	LucidePhone,
	LucideTwitter,
	LucideYoutube,
} from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
	return (
		<div>
			<MaxWidthWrapper>
				<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-7 justify-between'>
					<div className='w-full flex flex-col gap-4'>
						<div className='font-bold text-lg'>
							Download ISCE Stores
						</div>
						<div className=' font-medium'>
							ISCE Store is a dynamic and inclusive
							e-commerce platform that seamlessly connects
							sellers and buyers, fostering a vibrant
							marketplace
						</div>
						<ol className='grid grid-cols-2 gap-4'>
							<li className='bg-black h-12 justify-center gap-2 flex items-center text-white rounded-lg'>
								<LucideApple />
								<div>
									<div className='text-white text-[9px]'>
										Download On The
									</div>
									<div className='text-white text-[16px] font-bold'>
										App Store
									</div>
								</div>
							</li>
							<li className='bg-black h-12 justify-center gap-2 flex items-center text-white rounded-lg'>
								<LucideApple />
								<div>
									<div className='text-white text-[11px]'>
										Get it In
									</div>
									<div className='text-white text-[16px] font-bold'>
										Google Play
									</div>
								</div>
							</li>
						</ol>
					</div>

					<div className='w-full flex flex-col gap-4'>
						<ol className='font-bold text-lg'> Contact Us</ol>
						<ol className='flex gap-2'>
							<LucideMapPin className='shrink-0' />
							<ol>
								4th floor, Polystar building, Manuwa bus
								stop, Lekki phase 1, Lagos, Nigeria
							</ol>
						</ol>
						<ol className='flex gap-2'>
							<LucideMail className='shrink-0' />
							<ol> Customersupport@24mobilemech.com</ol>
						</ol>
						<ol className='flex gap-2'>
							<LucidePhone className='shrink-0' />
							<ol> 09013 447 0693</ol>
						</ol>
					</div>

					<div className='flex flex-col gap-4 px-9'>
						<ol className='font-bold text-lg'> Quick Link</ol>
						<Link href='/about-us'> About Us</Link>
						<Link href='/about-us'> Terms Of Use</Link>
						<Link href='/about-us'> Privacy & Policy</Link>
						<Link href='/about-us'>
							{' '}
							Frequently Asked Question
						</Link>
					</div>

					<div className='flex flex-col gap-4'>
						<div className='font-bold text-lg'>
							{' '}
							Subscribe To Our Newsletter
						</div>
						<div className='border-b-2 rounded-lg h-12'>
							<input
								placeholder='Email Address'
								type='text'
								className='px-3 w-full h-full border-none bg-slate-100  text-black rounded-lg placeholder:text-black'
							/>
						</div>
						<Button className='h-12 rounded-2xl'>
							Subscribe
						</Button>
					</div>
				</div>
				<div className='pt-10 '>
					<div className='flex items-center gap-4 justify-center'>
						<LucideTwitter />
						<LucideFacebook />
						<LucideInstagram />
						<LucideYoutube />
						<LucideLinkedin />
					</div>
					<div className='grid justify-center pb-10'>
						2024 ISCE Stores. All Rights Reserved.
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
}
