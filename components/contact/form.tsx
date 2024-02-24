import React from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  TwitterIcon,
} from "@/lib/svg";
import Link from "next/link";

export default function Form() {
  return (
    <main>
      <>
        <div className=" w-full text-white lg:relative min-h-screen items-center justify-center">
          <div className="lg:w-3/4 bg-tertiary mx-auto py-16 z-20 flex justify-end">
            <div className=" lg:w-1/2 lg:px-3 lg:flex lg:flex-col justify-end lg:mr-24">
              <h1 className="text-6xl font-bold px-4">Get in Touch</h1>
              <p className="text-xl px-4 mt-4 mb-12">
                Feel free to drop us a line below!
              </p>
              <div className="lg:flex lg:flex-wrap lg:justify-end lg:-mx-4">
                <div className="w-full px-4 lg:mb-0">
                  <form className="space-y-6">
                    <div>
                      <Input
                        required
                        className="w-full bg-gray-200 border-none"
                        id="name"
                        placeholder="Jess Smith"
                        type="text"
                      />
                    </div>
                    <div>
                      <Input
                        required
                        className="w-full bg-gray-200 border-none"
                        id="email"
                        placeholder="jess@company.com"
                        type="email"
                      />
                    </div>
                    <div>
                      <Textarea
                        required
                        className="w-full bg-gray-200 border-none"
                        id="message"
                        placeholder="Write your message here"
                      />
                    </div>
                    <Button className= "lg:w-1/4 ">Send message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:absolute lg:bottom-[58%]">
            <div className="bg-primary lg:p-11 w-full lg:ml-10 lg:rounded-2xl px-11">
              <h1 className="flex font-bold text-3xl justify-center mb-4">
                Contact Us
              </h1>
              <div className="flex flex-col  space-y-4">
                <div className="flex">
                Head Office
                Polystar Building, 3rd Floor, Remi Olowude Street,
                Maruwa Bus Stop, Lekki, Lagos, Nigeria
                </div>
                <Link
                  href={`https://www.instagram.com/iscetech`}
                  className="flex space-y-6"
                >
                  <InstagramIcon />
                  Instagram
                </Link>
                <Link href={``} className="flex">
                  <FacebookIcon />
                  Facebook
                </Link>
                <Link href="https://www.twitter.com/isceapp" className="flex">
                  <TwitterIcon />
                  Twitter
                </Link>
                <Link
                  href={`https://www.linkedin.com/company/isceapp`}
                  className="flex"
                >
                  <LinkedinIcon />
                  LinkedIn
                </Link>
                <Link href={`https://www.giithub.com/iscedcs`} className="flex">
                  <GithubIcon />
                  Github
                </Link>
              </div>
            </div>
          </div>
          <div className="xl:w-full lg:w-full md:w-full items-center overflow-hidden justify-center xl:max-w-7xl mx-auto">
            <iframe
              className="w-full mx-auto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.720024241891!2d3.465805674080175!3d6.4300021242447025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b917993a95193%3A0x21bdfe095d86ad6d!2sISCE%20DIGITAL%20CONCEPT!5e0!3m2!1sen!2sng!4v1707147460978!5m2!1sen!2sng"
              width="800"
              height="600"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </>
    </main>
  );
}
