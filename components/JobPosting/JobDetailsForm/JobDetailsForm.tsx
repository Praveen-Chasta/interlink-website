"use client"

import { useState, useEffect, useRef } from "react"

export default function Component() {
  const [activeStep, setActiveStep] = useState(1)
  const formRef = useRef<HTMLDivElement>(null)

  const steps = [
    { id: 1, name: "Job Details" },
    { id: 2, name: "Candidate Requirements" },
    { id: 3, name: "Interviewer Information" },
    { id: 4, name: "Job Preview" },
    { id: 5, name: "Publish Job" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const sections = formRef.current.querySelectorAll("section")
        const scrollPosition = formRef.current.scrollTop + formRef.current.clientHeight / 2

        let activeSection = 1
        sections.forEach((section, index) => {
          if (section.offsetTop <= scrollPosition) {
            activeSection = index + 1
          }
        })
        setActiveStep(activeSection)
      }
    }

    const currentFormRef = formRef.current
    if (currentFormRef) {
      currentFormRef.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (currentFormRef) {
        currentFormRef.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="flex h-screen bg-gray-50">
    {/* Timeline - Left Side (Fixed) */}
    <div className="w-64 p-6 bg-white border-r border-gray-200 flex-shrink-0 h-full">
      <div className="space-y-0 relative h-full">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="py-4 text-center">
              <span
                className={`text-sm font-medium ${
                  activeStep >= step.id ? "text-primary font-semibold" : "text-gray-400"
                }`}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-8 w-0.5 mx-auto ${
                  activeStep > step.id ? "bg-blue-500" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  
    {/* Form Content - Right Side (Scrollable) */}
    <div
      ref={formRef}
      className="flex flex-grow h-full overflow-y-auto pl-8"
      style={{ maxHeight: "calc(100vh - 24px)" }} // Reduce height and prevent overflow on the page
    >
      <div className="w-full max-w-[calc(100%-256px)] p-6 space-y-16 bg-white rounded-lg shadow-md">
        <section id="job-details" className="space-y-6">
          {/* AI Job Creation */}
          <div className="space-y-4">
            <div className="bg-gradient-to r">
              <h2 className="font-semibold mb-2 text-start">Create Job Post with AI</h2>
              <div className="flex gap-4 items-center w-full">
  <div>
    <img
      src="images/interlink-ai.png"
      alt="AI"
      className="w-80 h-20 object-contain"  // Increased image width and height
    />
  </div>
  <div className="flex bg-gray-200 text-gray-700 border border-gray-300 placeholder-gray-500 px-4 py-2 rounded-lg h-16 w-full">
    <input
      type="text"
      placeholder="Enter the prompt"
      className="bg-transparent flex-grow"  // Makes the input take the remaining space
    />
    <button className="p-2 flex items-center justify-center ml-auto">
      <span className="sr-only">Send prompt</span>
      <img src="images/arrow-button.png" alt="Send prompt" className="w-6 h-6" />
    </button>
  </div>
</div>

            </div>
          </div>
  
          {/* Job Details Form */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Job Details</h3>
            <p className="text-sm text-gray-500">
              We use this information to find the best candidates for the job
            </p>
  
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="company" className="block font-medium">
                  Company you are hiring for *
                </label>
                <input
                  id="company"
                  placeholder="e.g. Interlink"
                  className="border border-gray-300 px-4 py-2 rounded-lg w-full max-w-md"
                />
              </div>
  
              <div className="space-y-2">
                <label htmlFor="title" className="block font-medium">
                  Job title / Designation *
                </label>
                <input
                  id="title"
                  placeholder="e.g. UI/UX designer"
                  className="border border-gray-300 px-4 py-2 rounded-lg w-full max-w-md"
                />
              </div>
  
              <div className="space-y-2">
                <label className="block font-medium">
                  Number of employees in your company *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="employment-type"
                      value="full-time"
                      className="mr-2"
                    />
                    Full Time
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="employment-type"
                      value="part-time"
                      className="mr-2"
                    />
                    Part Time
                  </label>
                </div>
              </div>
  
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="night-shift" />
                <label htmlFor="night-shift" className="text-gray-700">
                  This is a night shift job
                </label>
              </div>
            </div>
          </div>
        </section>
  
        {/* Additional sections can follow a similar pattern with labels, inputs, and custom styling */}
      </div>
    </div>
    </div>
  
  )
}
