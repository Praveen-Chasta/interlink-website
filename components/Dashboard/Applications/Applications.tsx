'use client'

export default function Applications() {

    return(
       <div className="flex flex-col h-screen w-screen">
            <div className="flex items-center justify-between w-full h-[150px] p-4 pl-16 pr-16 bg-[#EBEFF3] shadow-md">
                <div className="flex items-center">
                    <div className="image">
                        <img src="images/job-profile-image.png" alt="job-profile"  className="rounded-lg"/>
                    </div>
                    <div className="flex flex-col ml-8">
                        <h1 className="text-2xl font-bold leading-tight text-[#000000] mb-3">
                            UI / UX Designer 
                        </h1>
                        <p className="text-[#777777] text-[20px] font-inter font-medium break-words">Course Compass</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-end">
                    <button className="text-center w-[155px] font-semibold p-2 rounded-[29.74px] border-[1.8px] border-[#000000] mb-3">Job Setting</button>
                    <p className="text-[#777777] text-[19px] font-inter font-medium break-words">Posted on 02 October 2024 | Rahul</p>
                </div>
            </div>
            {/* Application Details */}
            <div className="flex items-start h-screen w-screen">
                {/* Left Side Filter Section */}
                <div className="flex flex-col h-full w-[20%] p-8">
                    <button className="flex items-center mb-8">
                        <img src = "images\left-arrow.png" alt = "back-button"  className="mr-3"/>
                        <span className="text-black text-[1em] font-inter font-semibold break-words">Back</span>
                    </button>
                    <h1 className="text-black text-[1.33em] font-inter font-semibold break-words mt-2 mb-4">Filters</h1>
                    <div className="relative w-[13em] h-[2.5em]">
                        <select className="w-full h-full bg-white rounded-md border-[0.13em] border-[#9A9A9A] appearance-none pl-4 pr-8">
                            <option value="UI/UX Designer" className="text-black text-[0.75em] font-inter font-medium break-words">UI/UX Designer</option>
                            <option value="All">All</option>
                            <option value="All">All</option>
                            <option value="All">All</option>
                        </select>
                        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                            <img
                            src="/images/downword-arrow.png"
                            alt="Dropdown arrow"
                            className="w-4 h-3"
                            />
                        </div>
                     </div>

                </div>
                {/* Hr Line section */}
                <hr className="w-[1px] border-2 h-[78%] border-dotted border-[#A5A5A5] mt-20" />
                
                {/* Right Side Application Section */}
                <div className="flex-grow h-full p-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-black text-[26px] font-inter font-semibold break-words">Recommended applications 
                        <span className="border-[0.06em] rounded-[15px] text-[#000000] border-[#A7A7A7] font-inter p-[0.3em] ml-6">1</span>
                        </h1>
                        <div>
                            <button><img src = "images\left-list-button.png"/></button>
                            <button className="ml-5"><img src = "images\right-list-button.png"/></button>
                        </div>
                    </div>
                    {/* Application Card */}
                    <div className="mt-20">
                        <div className="h-[255px] w-[275px] bg-white shadow-lg border-1 rounded-lg p-4">
                            {/* Content goes here */}
                        </div>
                    </div>
                </div>
            </div>
            
       </div>
    )

}