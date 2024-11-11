import JobDetailsForm from '../../components/JobPosting/JobDetailsForm/JobDetailsForm';

const JobDetailsPage = () => {
    return (
        <>
           <div className="flex flex-col items-start justify-start p-6 bg-[#FAF9FB] w-screen h-screen">
                <div className="flex items-center gap-x-3"> {/* Add gap-x-2 here for horizontal gap */}
                    <img src="images/interlink-logo.png" alt="Internlink Logo" className="w-8 h-8" />
                    <span className="font-semibold">Internlink</span>
                </div>
                <div className="ml-12 mt-8 w-full h-full"> 
                    <h1 className="font-inter text-[23.36px] font-bold leading-[28.28px] text-left">
                        Hello, Rahul
                    </h1>
                    <p className="font-inter text-[18.69px] font-bold leading-[22.62px] text-left text-[#626262]">
                        Grow your team by posting a job
                    </p>
                    <div className='w-full h-full mt-8'>
                        <JobDetailsForm />
                    </div>
                </div>
                
            </div>
        </>

    );
};

export default JobDetailsPage;

