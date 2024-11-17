'use client';

import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


export default function Analytics() {
    const [activeTab, setActiveTab] = useState('performance');
    const [selectedJob, setSelectedJob] = useState('');

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedJob(event.target.value);
        setActiveTab('performance');
    };

    return (
        <div className="flex items-start bg-[#F5F5F5] w-screen h-screen">
            <Sidebar/>
            <div className='p-8 w-full h-full flex flex-col item'>
                <h1 className='text-[40px] text-left font-bold font-inter'>Analytics</h1>
                <div className='w-full h-full flex flex-col items-center'>
                    <div className="flex flex-col items-center mt-5 bg-white w-full  h-full max-h-[857px] rounded-3xl shadow-lg">
                        <div className='flex items-center p-8'>
                            <button 
                                className={`border-[1px] p-2 rounded-3xl mr-10 w-[164px] ${activeTab === 'performance' ? 'bg-[#1C73E8] text-[#FFFFFF]' : 'border-[1px] text-[#1C73E8] border-[#1C73E8]'}`} 
                                onClick={() => handleTabClick('performance')}
                            >
                                Performance
                            </button>
                            <button 
                                className={`border-[1px] p-2 rounded-3xl w-[170px] ${activeTab === 'ai-insights' ? 'bg-[#1C73E8] text-[#FFFFFF]' : 'border-[1px] text-[#1C73E8] border-[#1C73E8]'}`} 
                                onClick={() => handleTabClick('ai-insights')}
                            >
                                AI-Driven Insights
                            </button>
                        </div>
                        <hr className='w-[705px] bg-[#B4ABAB] h-[1px]'/>
                        <div className='relative flex items-center justify-center mt-5 bg-[#E4E4E4] rounded-3xl'>
                            <select 
                                className="p-4 w-[844px] h-[55px] bg-transparent text-[#4B4B4B] text-[18px] font-inter font-semibold rounded-3xl appearance-none"
                                onChange={handleSelectChange}
                                value={selectedJob}
                            >
                                <option value="" disabled selected hidden className="font-italic">
                                    Select the job post to view performance
                                </option>
                                <hr className='w-full bg-[#B4ABAB] h-[1px]'/>
                                <option value="job1" className="flex justify-between text-black text-[18px] font-inter font-semibold">
                                    1. UI / UX Designer - (Job Live for 48 hours)
                                </option>
                                <hr className='w-full bg-[#B4ABAB] h-[1px]'/>
                                <option value="job2" className="flex justify-between text-black text-[18px] font-inter font-semibold">
                                    2. UI / UX Designer - Job Live for 48 hours
                                </option>
                                <hr className='w-full bg-[#B4ABAB] h-[1px]'/>
                                <option value="job3" className="flex justify-between text-black text-[18px] font-inter font-semibold">
                                    3. UI / UX Designer - Job Live for 48 hours
                                </option>
                                <hr className='w-full bg-[#B4ABAB] h-[1px]'/>
                            </select>
                            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none p-4">
                                <img
                                    src="/images/downword-arrow.png"
                                    alt="Dropdown arrow"
                                    className="w-6 h-4"
                                />
                            </div>
                        </div>
                        {activeTab === 'performance' && selectedJob && (
                            <div className='mt-5 w-full h-full flex items-center justify-center'>
                                {/* Replace this with your graph component */}
                                <div className='w-[844px] h-[400px] bg-gray-200 rounded-3xl flex items-center justify-center'>
                                    <p>Graph for {selectedJob}</p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'ai-insights' && (
                            <div className='mt-5 w-full h-full flex items-center justify-center'>
                                <div className='w-[844px] h-[400px] bg-white rounded-3xl'>
                                    {/* Blank white screen */}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}