import React from 'react'
import MaxWidthWrapper from '../../layout/max-width-wrapper'
import * as Icons from '../../../lib/icons'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeHeader() {
  return (
    <div className="my-10 py-10 text-background w-full items-center justify-center mx-auto">
      <MaxWidthWrapper className='flex flex-col lg:flex-row'>
        <div className="flex flex-col justify-center mx-auto lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{`ISCEDemy`}</h1>
          <h1 className="text-5xl font-bold mb-6">
            {`Learn to code. Build a portfolio. Get hired.`}
          </h1>
          <Input className="mb-4" placeholder="Your e-mail" type="email" />
          <Input className="mb-4" placeholder="Your password" type="password" />
          <div className="flex items-center mb-6">
            <Checkbox id="terms" className='border rounded-xl border-background '/>
            <Label className="ml-2 text-sm gap-2" htmlFor="terms">
              {`I agree to ISECDemy`}
              <Link className="text-tertiary px-2" href="#">
                {`Terms of Service`}
              </Link>
              {`and`}
              <Link className="text-tertiary px-2" href="#">
                {`Privacy Policy`}
              </Link>
            </Label>
          </div>
          <Button className="bg-secondary hover:bg-primary/70 mb-4 hover:text-secondary text-primary">Sign up and learn for free</Button>
        </div>

        <div className="lg:w-1/2 flex md:space-x-2 justify-center py-3">
          <div className="relative">
            <Image
              alt="Person coding"
              className="rounded-lg"
              height="450"
              src="/images/jeff.JPG"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="450"
            />         
            <div className="lg:absolute bottom-0 hidden -left-2 right-0 gap-3 py-2 px-3 rounded-b-lg xl:flex flex-wrap justify-center items-center lg:ml-4 lg:mb-4">
              <Badge variant="secondary" className=' cursor-pointer text-lg ' >{`HTML`}<div className=' ml-2 bg-tertiary rounded-lg py-3 px-4'><Icons.HtmlIcon /></div></Badge>
              <Badge variant="secondary"  className='cursor-pointer text-lg p-2'>{`JavaScript`}<div className='rounded-lg ml-2 bg-tertiary py-3 px-4'><Icons.JavaScriptIcon/></div></Badge>
              <Badge variant="secondary"  className=' cursor-pointer text-lg p-2'>{`SQL`}<div className='rounded-lg ml-2 bg-tertiary py-3 px-4'><Icons.SqlIcon/></div></Badge>
              <Badge variant="secondary"  className='cursor-pointer text-lg p-2'>{`Next.js`}<div className='rounded-lg ml-2 bg-tertiary py-3 px-4'><Icons.NextJSIcon/></div></Badge>
              <Badge variant="secondary"  className=' cursor-pointer text-lg p-2'>{`Node.js`}<div className='rounded-lg ml-2 bg-tertiary py-3 px-4'><Icons.NodeJSIcon/></div></Badge>
              <Badge variant="secondary"  className='cursor-pointer text-lg p-2'>{`React`}<div className='rounded-lg ml-2 bg-tertiary py-3 px-4'><Icons.ReactJSIcon/></div></Badge>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
