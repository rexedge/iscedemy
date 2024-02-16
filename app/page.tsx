import MaxWidthWrapper from '@/components/layout/max-width-wrapper';
import CoursePreview from '@/components/pages/home/course-preview';
import HomeHeader from '@/components/pages/home/header';
import React from 'react';

export default function Home() {
	return (
		<main className='min-h-[100svh] bg-primary w-full overflow-clip'>
			<MaxWidthWrapper >
				<HomeHeader/>
				<div>
					<CoursePreview/>
				</div>
			</MaxWidthWrapper>
		</main>
	);
}
