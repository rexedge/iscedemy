import MaxWidthWrapper from '@/components/layout/max-width-wrapper'
import Link from 'next/link'
import * as Icons from '../../../lib/icons'
import React from 'react'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <div className="w-full py-6 md:py-12 lg:py-16">
      <MaxWidthWrapper>
        <div className="container grid-in-container px-4 md:px-6">
          <div className="flex flex-col text-background   justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter xl:text-4xl underline">{`At PalmTechNIQ`}</h2>
            <div className="space-y-2 flex flex-col-reverse items-center lg:flex-row lg:justify-between w-full">
              <div className="relative w-full lg:w-1/2 px-4">
                   <p className="w-full text-background text-lg text-center xl:mx-8 py-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {`We're dedicated to providing the best technical education for our students, preparing them for success in the digital age. Our innovative approach, experienced instructors, and hands-on learning opportunities make our institute the perfect place to launch your career in tech.`}
                </p>
              </div>
              <div className="p-8 w-full lg:w-1/2 relative">
                <Image
                  width={500}
                  height={500}
                  src='/images/wuli.jpg'
                  alt='iscedemy | someone coding'
                  className='rounded-xl'
                />
              </div>
            </div>

            <div className="relative mt-12 lg:mt-20">
              <div className=" relavtive mx-auto flex flex-col py-4 gap-6  lg:gap-2 lg:max-w-none items-center xl:space-x-4 justify-center xl:flex-row lg:flex-row md:flex-row">
                <div className="flex flex-col items-center ">
                  <div className="h-30 w-30 py-3">
                    <Icons.ExpertIcon />
                  </div>
                  <div className="xl:text-xl lg:text-xl text-md text-background dark:text-gray-400">{`Expert Instructors`}</div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="h-30 w-30 py-3">
                    <Icons.Curriculum />
                  </div>
                  <div className="xl:text-xl lg:text-xl text-md text-background dark:text-gray-400">{`Hands-on Projects`}</div>
                </div>
                <div className="flex flex-col items-center ">
                  <div className="h-30 w-30 py-3">
                    <Icons.AwardIcon />
                  </div>
                  <div className="xl:text-xl lg:text-xl text-md text-background dark:text-gray-400">{`Cutting-edge Curriculum`}</div>
                </div>
              </div>
            </div>
            
            <div className="mx-auto max-w-sm py-3">
              <Link
                className="inline-block w-full bg-white text-black rounded-full px-8 py-2 text-sm font-medium shadow transition-colors hover:bg-tertiary/100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/about"
              >
                {`Learn More`}
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

