import React, { useState } from 'react';
import '../../App.css'; 

const AddJob = () => {
    return (
        <div className="full-page w-full flex justify-center min-h-screen items-center bg-gray-50">
            <div className='w-[80%] h-[800px] md:h-[800px] lg:h-[800px] shadow-lg bg-white rounded-lg p-8'>
                <h1 className="text-2xl font-bold text-center">Add a Job Posting</h1>
                <form className=''>
                    <div className='mb-6 mt-8 pl-32'>
                        <label htmlFor="title" className="text-md font-medium text-gray-700">
                            Job Title
                        </label>
                        <div>
                            <input type="text"
                                id="title"
                                name="title"
                                placeholder="Enter Job Title"
                                className='w-[80%] border border-gray-300 mb-6 rounded-md p-2 mt-2'
                                required
                            />
                        </div>

                        <label htmlFor="companyName" className="text-md font-medium text-gray-700">
                            Company Name
                        </label>
                        <div>
                            <input type="text"
                                id="companyName"
                                name="Company Name"
                                placeholder="Enter Company Name"
                                className='w-[80%] border border-gray-300 rounded-md p-2 mt-2'
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default AddJob;