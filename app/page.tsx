import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import AboutPreview from '@/components/pages/home/about-preview';
import CoursePreview from '@/components/pages/home/course-preview';
import HomeHeader from '@/components/pages/home/header';
import { TestimonialPreview } from '@/components/pages/home/testimonial-preview';
import Image from 'next/image';
import React from 'react';

export default function Home() {
	return (
		<main className='min-h-[100svh] bg-primary w-full overflow-clip'>
			<MaxWidthWrapper >
			<Image width={50} height={50} src='/assets/ellipse2.png' alt='ellipse-image | ISCEDemy' className='z-20 absolute left-28 animate-ping  duration-1000 delay-1000 top-40  '/>
			<Image width={50} height={50} src='/assets/ellipse2.png' alt='ellipse-image | ISCEDemy' className='z-20 absolute right-96 duration-1000 delay-500  animate-ping -bottom-36  '/>
			<Image width={50} height={50} src='/assets/ellipse2.png' alt='ellipse-image | ISCEDemy' className='z-20 absolute left-64 animate-ping bottom-5    '/>
			<Image width={50} height={50} src='/assets/ellipse2.png' alt='ellipse-image | ISCEDemy' className='z-20 absolute right-10  animate-ping top-96  '/>

				<HomeHeader/>
				<div>
					<CoursePreview/>
				</div>
				<div>
					<AboutPreview/>
				</div>
				<div>
					<TestimonialPreview/>
				</div>
				<Image width={50} height={50} src='/assets/ellipse2.png' alt='ellipse-image | ISCEDemy' className='z-50 absolute right-10  animate-ping -bottom-[2000px]    '/>
				<Image width={50} height={50} src='/assets/ellipse2.png' alt='ellipse-image | ISCEDemy' className='z-50 absolute left-16  duration-4000 delay-150  animate-ping   -bottom-[1800px]    '/>

			</MaxWidthWrapper>
		</main>
	);
}
