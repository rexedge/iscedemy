import React from 'react'
import { CardTitle, CardHeader, CardDescription, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import * as Icons from '../../../lib/icons'


export default function CoursePreview() {
  return (
    <div className=" text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:text-background  bg-background hover:bg-primary/70 hover:scale-105  transition-all">
          <CardHeader>
            <div className="flex items-center mb-3 w-5 h-5 space-x-2 text-tertiary">
              <div className='h-5 w-5'>
                <Icons.LaptopIcon />
              </div>
              <div className='h-5 w-5'>
                <Icons.DatabaseIcon />
              </div>
              <div className='h-5 w-5'>
                <Icons.CogIcon />
              </div>
              <div className='h-5 w-5'>
                <Icons.PaintbrushIcon />
              </div>
            </div>
            <Badge className=" py-4" variant="secondary">
              {`CAREER PATH`}
            </Badge>
            <CardTitle className="mt-2">Full-stack Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className=''>
              {`Discover the core of both front-end and back-end development. Learn to create user interfaces and master
              key programming languages and frameworks driving today's web.`}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button variant="secondary">Start Learning</Button>
            <div className="h-5 w-5 text-tertiary">
            <Icons.ArrowRightIcon />
            </div>
            
          </CardFooter>
        </Card>

        <Card className="hover:text-background  bg-background hover:bg-primary/70 hover:scale-105  transition-all duration-500">
          <CardHeader>
            <div className="flex mb-3 items-center space-x-2 text-tertiary">
            <div className='h-5 w-5'>
            <Icons.LaptopIcon />
            </div>
              
              <div className='h-5 w-5'>
              <Icons.Heading5Icon />
              </div>
             
              <div className='h-5 w-5'>
              <Icons.CatIcon />
              </div>
             
              <div className='h-5 w-5'>
              <Icons.SquareIcon />
              </div>
              
            </div>
            <Badge className="py-4" variant="secondary">
              CAREER PATH
            </Badge>
            <CardTitle className="mt-2">Front-end Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className=''>
              Dive into front-end development using HTML, CSS, and JavaScript. Learn to craft web pages and use React to
              develop engaging user-focused web applications.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button variant="secondary">Start Learning</Button>
            <div className="h-5 w-5 text-tertiary">
              <Icons.ArrowRightIcon />
            </div>

          </CardFooter>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <Card className="bg-background ">
          <CardHeader>
            <div className="h-6 w-6 text-tertiary">
              <Icons.BookIcon />
            </div>

            <Badge className="py-4" variant="default">
              COURSE
            </Badge>
            <CardTitle className="mt-2">Python</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-primary'>
              Explore a beginner-friendly, popular programming language that's renowned for its readability and
              extensive range of applications.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button variant="outline">Start Learning</Button>
            <div className="h-5 w-5 text-tertiary">
              <Icons.ArrowRightIcon />
            </div>

          </CardFooter>
        </Card>
        <Card className="bg-background">
          <CardHeader>
            <div className="h-6 w-6 text-tertiary">
              <Icons.DatabaseIcon />
            </div>

            <Badge className="py-4" variant="default">
              COURSE
            </Badge>
            <CardTitle className="mt-2">SQL</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-primary'>
              Master SQL, an essential skill in data analysis and management, from creating to querying and manipulating
              databases.
              jfytfyttrjyhvufkufuygukyvcyxjjxfch
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button variant="outline">Start Learning</Button>
            <div className="h-5 w-5 text-tertiary">
              <Icons.ArrowRightIcon />
            </div>

          </CardFooter>
        </Card>

        <Card className="bg-background">
          <CardHeader>
            <div className="h-6 w-6 text-tertiary">
              <Icons.FileCodeIcon />
            </div>

            <Badge className="py-4" variant="default">
              COURSE
            </Badge>
            <CardTitle className="mt-2">HTML</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-primary'>
              Get familiar with the foundational building blocks of web development, understand the structure of web
              pages, and start building real websites.
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button variant="outline">Start Learning</Button>
            <div className="h-5 w-5 text-tertiary">
              <Icons.ArrowRightIcon />
            </div>

          </CardFooter>
        </Card>

        <Card className="bg-background">
          <CardHeader>
            <div className="h-6 w-6 text-tertiary">
              <Icons.SquareIcon />
            </div>

            <Badge className="py-4" variant="default">
              COURSE
            </Badge>
            <CardTitle className="mt-2">JavaScript</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className='text-primary'>
              {`Dive into the world of JavaScript, the programming language to manipulate web page elements, build web
              applications, and more.`}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button variant="outline">Start Learning</Button>
            <div className="h-5 w-5 text-tertiary">
              <Icons.ArrowRightIcon />
            </div>

          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
