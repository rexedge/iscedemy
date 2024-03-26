import Image from "next/image";

export default function OurStory() {
	return (
		<div id="our-story" className="h-[100svh]">

			<div className="">
			
				<div className="grid md:grid-cols-2 gap-16 justify-center py-20">
					<div className="">
						<div className="text-start pb-10 ">
							<div className="text-2xl font-bold ">{`Our Story`}</div>
						</div>
						<div className="font-light text-lg w-full rounded-xl overflow-clip">
							<Image
								src="/jopwe.jpg"
								width={400}
								height={400}
								alt="arin"
								className="w-full object-cover"
							></Image>
						</div>
					</div>
					<div className=" flex flex-col gap-10">
						<div className="">
							<span className="text-2xl  font-normal text-black flex flex-col">{`We exist specifically for our customers because 
we know heroes such as yourselves deserve only 
the best sidekicks.`}</span>
	</div>
	<div className="">
		<span className=" text-2xl">{`We believe that everyone has the right to 
change the world we want to give the younger 
generation the ability to affect their world using 
tech.`}</span>
	</div>
	<div className="">
		<span className="text-2xl">{`We believe in child education because the only 
way to really change the current world for the 
better is by enabling them to paint a world of 
their own.
`}</span>
	</div>
	</div>
	</div>
	</div>

	</div>
	);
}
