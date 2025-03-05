import React from 'react'

function Changelog() {

	return (
		<div className="flex items-center flex-col mt-8">
			<h1 className="text-2xl">Changelog</h1>
			<h3 className="text-sm text-gray-500">Here's everything we have shipped from the past few days</h3>
			
			<div className="flex my-10">
				<div className="h-80 flex flex-col justify-evenly">
					<p className="text-right mr-8 text-[12px] text-gray-500">September 3, 2024</p>
					<p className="text-right mr-8 text-[12px] text-gray-500">August 28, 2024</p>
					<p className="text-right mr-8 text-[12px] text-gray-500">August 25, 2024</p>
					<p className="text-right mr-8 text-[12px] text-gray-500">August 22, 2024</p>
					<p className="text-right mr-8 text-[12px] text-gray-500">August 15, 2024</p>
					<p className="text-right mr-8 text-[12px] text-gray-500">August 10, 2024</p>
					<p className="text-right mr-8 text-[12px] text-gray-500">August 1, 2024</p>
				</div>

				<div className="verLine border-1 h-auto w-0 relative left-[7px]"></div>

				<div className="h-80 flex flex-col justify-evenly">
					<div className="1 w-3 h-3 bg-black rounded-full"></div>
					<div className="2 w-3 h-3 bg-black rounded-full"></div>
					<div className="3 w-3 h-3 bg-black rounded-full"></div>
					<div className="4 w-3 h-3 bg-black rounded-full"></div>
					<div className="5 w-3 h-3 bg-black rounded-full"></div>
					<div className="6 w-3 h-3 bg-black rounded-full"></div>
					<div className="7 w-3 h-3 bg-black rounded-full"></div>
				</div>

				<div className="h-80 flex flex-col justify-evenly">
					<p className="ml-5 text-[12px]">Announcing Projects on Frontend Roadmap</p>
					<p className="ml-5 text-[12px]">Build your learning habits with learning streaks</p>
					<p className="ml-5 text-[12px]">Git and GitHub Roadmap</p>
					<p className="ml-5 text-[12px]">Submit your projet solution and get feedback</p>
					<p className="ml-5 text-[12px]">Backend Project ideas</p>
					<p className="ml-5 text-[12px]">Redis roadmap</p>
					<p className="ml-5 text-[12px]">Changelog page to help you stay in the loop</p>
				</div>
			</div>

			<button className="text-center mx-auto w-fit h-fit px-5 py-1 bg-black text-white text-sm rounded-md cursor-pointer hover:font-semibold">Visit Complete Changelog</button>

		</div>
	)
}

export default Changelog