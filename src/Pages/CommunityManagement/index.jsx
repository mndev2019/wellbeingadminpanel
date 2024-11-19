//import React from 'react'

import { useState } from "react"
import PageHeader from "../../Component/PageHeader"
import CreateChallenge from "./CreateChallenge"
import CreateDiscussion from "./CreateDiscussion"
import CreateEvent from "./CreateEvent"
import CreatePost from "./CreatePost"
import ModalComponent from "../../Component/ModalComponent"
// import date from '../../assets/Image/date.png'

const CommunityManagement = () => {
    const [aboutdata, setAboutdata] = useState("Create Challenge");
    const [modalTitle, setModalTitle] = useState("Add Challenges");
    const [modalContent, setModalContent] = useState(null);
    const [show, setShow] = useState(false);
    const handleAbout = (itm) => {
        setAboutdata(itm);
        if (itm === "Create Challenge") {
            setModalTitle("Add Challenges");
        } else if (itm === "Create Discussion") {
            setModalTitle("Add Discussion");
        } else if (itm === "Create Post") {
            setModalTitle("Add Post");
        } else if (itm === "Create Event") {
            setModalTitle("Add Event");
        }
    };
    const handleModalContent = () => {
        if (aboutdata === "Create Challenge") {
            setModalContent(
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
                        <label htmlFor="gender" className='text-[16px] font-[500]'>Title</label>
                        <input
                            type="text"
                            name="message"
                            className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                            placeholder="Enter your title"
                        />
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
                        <label htmlFor="gender" className='text-[16px] font-[500]'>Plan Type</label>
                        <select
                            name="gender"
                            className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 text-[#B8B8B8]"
                        >
                            <option value="" disabled selected>Select</option>

                        </select>
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
                    <div className="mb-3">
                        <label htmlFor="gender" className='text-[16px] font-[500]'>Duration</label>
                        <input
                            type="text"
                            name="message"
                            className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                            placeholder="Set duration"
                        />
                    </div>
                    <button type='submit' className="bg-primary text-[#121212] text-[18px] font-[700] px-4 py-2 rounded-md w-full mt-3">Submit</button>
                </form>

            );
        } else if (aboutdata === "Create Discussion") {
            setModalContent(
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
                        <label htmlFor="gender" className='text-[16px] font-[500]'>Title</label>
                        <input
                            type="text"
                            name="message"
                            className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                            placeholder="Enter your title"
                        />
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
                        <label htmlFor="gender" className='text-[16px] font-[500]'>Plan Type</label>
                        <select
                            name="gender"
                            className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 text-[#B8B8B8]"
                        >
                            <option value="" disabled selected>Select</option>

                        </select>
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
            );
        } else if (aboutdata === "Create Post") {
            setModalContent(
                // <form>
                //     <div className="mb-3">
                //         <label htmlFor="categorySelection" className="text-[16px] font-[500]">
                //             Category Selection
                //         </label>
                //         <select
                //             name="categorySelection"
                //             className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 text-[#B8B8B8]"
                //         >
                //             <option value="" disabled selected>
                //                 Select
                //             </option>
                //             <option value="category1" className="text-black">
                //                 Category 1
                //             </option>
                //             <option value="category2" className="text-black">
                //                 Category 2
                //             </option>
                //         </select>
                //     </div>
                //     <div className="mb-3">
                //         <label htmlFor="subCategory" className="text-[16px] font-[500]">
                //             Sub-Category
                //         </label>
                //         <input
                //             type="text"
                //             name="subCategory"
                //             id="subCategory"
                //             className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 text-[#B8B8B8]"
                //             placeholder="Enter sub-category"
                //         />
                //     </div>
                //     <div className="mb-3">
                //         <label htmlFor="email" className="text-[16px] font-[500] ">
                //             Upload Video
                //         </label>
                //         <div className="input-group flex items-center w-full border border-dashed border-[#D6D6D6] rounded-lg justify-between px-2 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary mt-[6px]">
                //             <div className="field w-full">
                //                 <input
                //                     type="file"
                //                     id="documentfile"
                //                     name="file"

                //                     // value={formValues.company}
                //                     // onChange={handleInputChange}
                //                     className="mt-1 hidden text-sm  w-full rounded-md  focus:outline-none mt-2"
                //                 />

                //                 <label htmlFor="documentfile" className=' w-full flex justify-center' >
                //                     <p className='text-center py-6'  >
                //                         <div className="flex justify-center">
                //                             <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                //                                 <path d="M22.5 0C22.8978 0 23.2794 0.158036 23.5607 0.43934C23.842 0.720645 24 1.10218 24 1.5V7.8L31.8195 2.325C31.9319 2.24618 32.0639 2.19975 32.2009 2.19075C32.3379 2.18176 32.4747 2.21055 32.5965 2.27399C32.7183 2.33743 32.8203 2.43309 32.8915 2.55053C32.9626 2.66797 33.0002 2.80269 33 2.94V21.06C33.0002 21.1973 32.9626 21.332 32.8915 21.4495C32.8203 21.5669 32.7183 21.6626 32.5965 21.726C32.4747 21.7894 32.3379 21.8182 32.2009 21.8092C32.0639 21.8003 31.9319 21.7538 31.8195 21.675L24 16.2V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5C0 1.10218 0.158035 0.720645 0.43934 0.43934C0.720644 0.158036 1.10218 0 1.5 0H22.5ZM21 3H3V21H21V3ZM12 6L18 12H13.5V18H10.5V12H6L12 6ZM30 7.2615L24 11.4615V12.5385L30 16.7385V7.2615Z" fill="#121212" />
                //                             </svg>
                //                         </div>

                //                         <span className='text-[#A6A6A6] text-[14px] font-[400] mt-4'>  Upload Video</span></p>
                //                 </label>

                //             </div>

                //         </div>
                //     </div>
                //     <div className="mb-3">
                //         <label htmlFor="message" className="text-[16px] font-[500]">Description</label>
                //         <textarea
                //             name="message"
                //             rows="4"
                //             className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none"
                //             placeholder="Enter description..."
                //         ></textarea>
                //     </div>
                //     <button
                //         type="submit"
                //         className="bg-primary text-[#121212] text-[18px] font-[700] px-4 py-2 rounded-md w-full mt-3"
                //     >
                //         Submit
                //     </button>
                // </form>
            );
        } else if (aboutdata === "Create Event") {
            setModalContent(
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
                        <label htmlFor="gender" className='text-[16px] font-[500]'>Title</label>
                        <input
                            type="text"
                            name="message"
                            className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                            placeholder="Enter your title"
                        />
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
                        <label htmlFor="gender" className='text-[16px] font-[500]'>Plan Type</label>
                        <select
                            name="gender"
                            className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 text-[#B8B8B8]"
                        >
                            <option value="" disabled selected>Select</option>

                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="text-[16px] font-[500]">Select Date</label>
                        <div className="relative mt-2">
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] appearance-none text-[#A6A6A6]"
                               
                            />
                            
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="text-[16px] font-[500]">Select Date</label>
                        <div className="relative mt-2">
                            <input
                                type="time"
                                id="date"
                                name="date"
                                className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] appearance-none text-[#A6A6A6]"
                               
                            />
                            
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
            );
        }
        setShow(true);
    };

    return (
        <>
            <section className="px-2">
                <PageHeader
                    title="Community Management"
                    btn={modalTitle}
                    onClick={handleModalContent}
                    filter="show"
                    weekly="show"

                />
                <div className="w-full bg-white p-4 flex gap-7 ">
                    {
                        ["Create Challenge", "Create Discussion", "Create Post", "Create Event"].map((itm) => (
                            <>
                                <button onClick={() => (handleAbout(itm))} className={`text-[#A6A6A6] text-[16px] font-[400] ${aboutdata == itm ? "text-black font-[700] border-b-2 border-[#121212]" : ""}`}>{itm}</button>
                            </>
                        ))
                    }
                    {/* <button className="text-[#A6A6A6] text-[16px] font-[400]">Create Challenge</button>
                    <button className="text-[#A6A6A6] text-[16px] font-[400]">Create Discussion</button>
                    <button className="text-[#A6A6A6] text-[16px] font-[400]">Create Post</button>
                    <button className="text-[#A6A6A6] text-[16px] font-[400]">Create Event</button> */}
                </div>
                {
                    aboutdata == "Create Challenge" && (
                        <CreateChallenge />
                    )
                }
                {
                    aboutdata == "Create Discussion" && (
                        <CreateDiscussion />
                    )
                }
                {
                    aboutdata == "Create Post" && (
                        <CreatePost />
                    )
                }
                {
                    aboutdata == "Create Event" && (
                        <CreateEvent />
                    )
                }

                {show && (
                    <ModalComponent
                        onCancel={() => setShow(false)}
                        content={modalContent}
                        title={modalTitle}
                    />
                )}
            </section>

        </>
    )
}

export default CommunityManagement