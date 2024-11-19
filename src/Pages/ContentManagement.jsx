//import React from 'react'
import { useState } from 'react';
import ModalComponent from '../Component/ModalComponent'
import PageHeader from '../Component/PageHeader'
import tableimage from '../assets/Image/tableimagecontent.png'
import video from '../assets/Image/videoduration.png'

const ContentManagement = () => {
    const [show, setShow] = useState(false);
    const content = (
        <div>
            <form  >
                <div className="mb-3">
                    <label htmlFor="gender" className='text-[16px] font-[500]'>Category Selection</label>
                    <select
                        name="gender"
                        className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 text-[#B8B8B8]"
                    >
                        <option value="" disabled selected>Select</option>
                        <option value="category1" className="text-black">Category 1</option>
                        <option value="category2" className="text-black">Category 2</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="text-[16px] font-[500]">Content</label>
                    <textarea
                        name="message"
                        rows="4"
                        className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none"
                        placeholder="Enter your content..."
                    ></textarea>
                </div>
                <div className="mb-3">
            <label htmlFor="gender" className="text-[16px] font-[500]">Audio / Video Duration</label>
            <div className="relative mt-2">
                <input
                    type="text"
                    name="duration"
                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] "
                    placeholder="Set duration"
                />
                <img src={video} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
        </div>
                <div className="mb-3">
                    <label htmlFor="email" className="text-[16px] font-[500] ">
                        Upload Image
                    </label>
                    <div className="input-group flex items-center w-full border border-dashed border-[#D6D6D6] rounded-lg justify-between px-2 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary mt-[6px]">
                        <div className="field w-full">
                            <input
                                type="file"
                                id="documentfile"
                                name="file"

                                // value={formValues.company}
                                // onChange={handleInputChange}
                                className="mt-1 hidden text-sm  w-full rounded-md  focus:outline-none mt-2"
                            />

                            <label htmlFor="documentfile" className=' w-full flex justify-center' >
                                <p className='text-center py-6'  >
                                    <div className="flex justify-center">
                                        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 31.5H29C30.6569 31.5 32 30.1569 32 28.5V7.5C32 5.84315 30.6569 4.5 29 4.5H8C6.34315 4.5 5 5.84315 5 7.5V28.5C5 30.1569 6.34315 31.5 8 31.5ZM8 31.5L24.5 15L32 22.5M15.5 12.75C15.5 13.9926 14.4926 15 13.25 15C12.0074 15 11 13.9926 11 12.75C11 11.5074 12.0074 10.5 13.25 10.5C14.4926 10.5 15.5 11.5074 15.5 12.75Z" stroke="#1E1E1E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    <span className='text-[#A6A6A6] text-[16px] font-[400]'>  Upload Image</span></p>
                            </label>

                        </div>

                    </div>
                </div>
                <button type='submit' className="bg-primary text-[#121212] text-[18px] font-[700] px-4 py-2 rounded-md w-full mt-3">Submit</button>
            </form>
        </div>
    );
    return (
        <>

            <section className='px-2'>
                <PageHeader title="Content Management" btn="Add Content" onClick={() => setShow(true)} />
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <table className="w-full border-separate border-spacing-y-1">
                            <thead>
                            <tr className="*:text-start *:text-nowrap *:text-sm *:font-bold bg-[#FAFAFA] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:border-gray-100 ">
                                    <th>
                                        Category
                                    </th>
                                    <th>
                                        Image
                                    </th>
                                    <th>
                                        Content
                                    </th>
                                    <th>
                                        Audio / Video Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
                                        <>
                                            <tr className="*:text-start *:text-[13px] *:font-[400] bg-[#FFFFFF] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:text-nowrap *:border-gray-100">
                                                <td>
                                                    Mental Wellness
                                                </td>
                                                <td>
                                                    <img src={tableimage} alt='image' className='rounded-full h-[40px] w-[40px] object-cover' />
                                                </td>
                                                <td>
                                                    Practice a different yoga flow each day to improve flexibility and balance.
                                                </td>
                                                <td>
                                                    4 Min
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {show && <ModalComponent onCancel={() => setShow(false)} content={content} title={"Add Content"} />}
            </section>
        </>
    )
}

export default ContentManagement