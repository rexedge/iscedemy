import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import * as Icons from './icons'

export const COURSE_PREVIEW: {
icon?: React.ReactNode[];
name: string;
title?: string;
info: string;

}[] = [
    {
        icon: [
            <Icons.LaptopIcon key="1" />, 
            <Icons.NodeJSCourseIcon key="2"/>,
            <Icons.DatabaseIcon key="3"/>, 
            <Icons.GitIcon key="4" />,
        ],
        name: 'CAREER PATH',
        title: 'Back-end Development',
        info: `Discover the core of back-end development. Learn to create user interfaces and master
        key programming languages and frameworks driving today's web.`,
    },
    {
        icon: [
            <Icons.NextJSIcon key="5"/>,
            <Icons.JavaScriptIcon key="6"/>,
            <Icons.ReactJSColorIcon key="7"/>,
            <Icons.Heading5Icon key="8"/>,
        ],
        name: 'CAREER PATH',
        title: 'Front-end Development',
        info: `Dive into front-end development using HTML, CSS, and JavaScript. Learn to craft web pages and use React to
        develop engaging user-focused web applications.`,
    },
]
export const OTHER_COURSE_PREVIEW: {
    icon?: React.ReactNode;
    name: string;
    title?: string;
    info: string;
}[] = [
    {
        icon: <Icons.BookIcon key="9"/>,
        name: 'COURSE',
        title: 'UI/UX',
        info: `Explore a beginner-friendly, popular programming language that's renowned for its readability and
        extensive range of applications.`,
    },
    {
        icon: <Icons.DataBaseColorIon key="10"/>,
        name: ' COURSE',
        title: 'CyberSecurity',
        info: `Master SQL, an essential skill in data analysis and management, from creating to querying and manipulating
        databases.`,
    },
    {
        icon: <Icons.TrendIcon key="11"/>,
        name: 'COURSE',
        title: 'Digital Marketing',
        info: `Get familiar with the foundational building blocks of web development, understand the structure of web
        pages, and start building real websites.`,
    },
    {
        icon: <Icons.PaintbrushIcon key="12"/>,
        name: ' COURSE',
        title: 'Graphic Design',
        info: `Dive into the world of JavaScript, the programming language to manipulate web page elements, build web
        applications, and more.`,
    }
]
export const TESTIMONIALS : {
    image?: StaticImport | string;
    name: string;
    review: string;
    userrole: string;

}[] = [
    {
        image: '/images/jeff.jpg',
        name: 'Jeff F.',
        review: `I would not have gotten ready for a web developer position if I hadn't attended the ISCEDemy courses.`,
        userrole: 'Frontend Developer',
    },
    {
        image: '/images/jeff2.jpg',
        name: 'Tobechukwu P.',
        review: `What I gained from the course was the ability to better understand coding and how to work on a project.`,
        userrole: 'Frontend Developer',
    },
    {
        image: '/images/favour.jpg',
        name: 'Favour S.',
        review: `I highly recommend ISCEDemy to anyone looking to learn Web Development. I promise you will not regret it.`,
        userrole: 'Frontend Developer',
    }
]