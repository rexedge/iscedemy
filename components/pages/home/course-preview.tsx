import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OTHER_COURSE_PREVIEW } from '@/lib/consts'
import Image from 'next/image'
import Link from 'next/link'
import * as Icons from '../../../lib/icons'


export default function CoursePreview() {
	return (
		<div className=" text-white px-4">
			<h1 className='text-white font-bold xl:w-96 w-full  xl:text-4xl text-2xl py-2'>{`React, JavaScript, HTML, CSS, and more`}</h1>
			<p className='text-xl font-normal xl:font-semibold xl:w-1/2 w-full pb-3'>{`Choose between a range of beginner-friendly learning paths, hand-crafted by learning experts and backed by research`}</p>
			{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{COURSE_PREVIEW.map((course, i) => (
					<Card key={i} className="hover:text-background items-start justify-center mx-auto bg-cover bg-center hover:bg-primary/70 hover:scale-105 transition-all bg-[url('/images/wuli.jpg')]"  >
					<CardHeader>
						<div className="flex items-center mb-3 w-5 h-5 space-x-2 text-tertiary">
							{course.icon?.map((singleicon, i) => (
								<div className='h-5 w-5' key={i}>
									{singleicon}
								</div>
							))}
						</div>
						<Badge className="py-4 w-full" variant="secondary">{course.name}</Badge>
						<CardTitle className="mt-2">{course.title}</CardTitle>
					</CardHeader>
					<CardContent className='py-2'>
						<CardDescription>
							{course.info}
						</CardDescription>
					</CardContent>
					<CardFooter className="flex justify-between mt-4">
						<Button variant="secondary" className="bg-white text-black px-5 py-3 rounded-full "><Link href='/course'>{`Start Learning`}</Link></Button>
						<div className="h-5 w-5 text-tertiary">
							<Link href='/course'>
								<Icons.ArrowRightIcon />
							</Link>
						</div>
					</CardFooter>
				</Card>
				
				))}
			</div> */}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 ">
				{OTHER_COURSE_PREVIEW.map((othersignglecourse, i) => (
					<Card className="bg-background rounded-md shadow-md border " key={i}>
						<CardHeader className=' gap-y-3'>
							<div className="h-6 w-6 text-tertiary">
								{othersignglecourse.icon}
							</div>
						<div className='relative'>
							{othersignglecourse.image && (
								<Image
									className=' rounded-md'
									width='1000'
									height='1000'
									alt='image'
									src={othersignglecourse.image}
								/>
							)}
							<div className=' cursor-pointer w-full absolute top-0 rounded-md bg-[#0000009e] hover:opacity-100 transition duration-300 ease-in-out opacity-0 h-full '>
								{othersignglecourse.link && (


									<Link
										className=''
										href={othersignglecourse.link}
									>
										<div className='after:bg-white after:absolute after:bottom-0 after:w-[20px] hover:after:w-[120px] pb-1 transition duration-300 translate-y-0 after:h-[2.5px] after:rounded-full flex gap-2 justify-center items-center'>
											<p className='text-white text-center items-center mt-[80px]'>
												Get Course
											</p>
											<div className='mt-[80px]'>
												{<Icons.ArrowRightIcon />}
											</div>
										</div>
									</Link>

								)}
							</div>
						</div>

	<CardTitle>{othersignglecourse.title}</CardTitle>
	</CardHeader>

	<CardContent>
		<CardDescription className='text-primary'>
			{othersignglecourse.info}
		</CardDescription>
	</CardContent>
	</Card>
	))}
	</div>

	<Button className="mx-auto grid max-w-sm py-3 mt-4 animate-bounce duration-1000 delay-9000 ">
		<Link
			className="inline-block w-full bg-white text-black rounded-full 
			   px-8 py-2 text-sm font-medium  shadow transition-colors hover:bg-tertiary/100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 "
			href="/courses"
		>
			{`Start A Course`}
		</Link>
	</Button>


	</div>
	)
}
