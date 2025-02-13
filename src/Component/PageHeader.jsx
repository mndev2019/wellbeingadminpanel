/* eslint-disable react/prop-types */

import { useState } from "react"
import calender from "../assets/Image/calender.png"

import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'
import angle from "../assets/Image/angle.png"
import plus from "../assets/Image/plus.png"
import { ToastContainer } from "react-toastify"
function PageHeader(props) {



    const [toDate, setToDate] = useState(""); // Initialize with ""'s date
    const [fromDate, setFromDate] = useState("");
    return (
        <>
            <ToastContainer />
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-[26px]">{props?.title}</h3>

                <div className="flex justify-between gap-6 items-center mb-6">
                    {props.btn &&
                        <button onClick={props.onClick} className="btn bg-primary flex gap-2 items-center text-secondary py-4 px-4 text-[18px] font-[700] rounded-lg"><img src={plus} alt="" /> {props.btn}</button>
                    }
                    {props.filter &&
                        <div className="bg-white shadow p-2 rounded-[12px] flex gap-4  items-center">
                            <div className="size-10 bg-shadeprimary  flex justify-center items-center rounded-lg">
                                <img src={calender} alt="" />
                            </div>
                            <div className="flex gap-2 items-center">

                                <div className="flex gap-2 items-center">
                                    <div className="">
                                        <h4 className="text-[18px] font-[400]">Filter</h4>
                                        <div className="text-black text-sm flex  items-center">
                                            <div className="w-[78px]">

                                                <DtPicker value={fromDate} placeholder="From Date" onChange={setFromDate} />

                                            </div>
                                            <div className={` ${fromDate ? "mx-2" : "relative right-1"}`}>-</div>
                                            <div className="w-[78px]">

                                                <div className="">
                                                    <DtPicker value={toDate} placeholder="To Date" onChange={setToDate} />
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                    <div className="">
                                        <img src={angle} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                    {props.weekly &&
                        <div className="bg-white shadow p-2 rounded-[12px] flex gap-4  items-center h-[70px]">
                            <div className="size-10 bg-shadeprimary  flex justify-center items-center rounded-lg">
                                <img src={calender} alt="" />
                            </div>
                            <div className="flex gap-2 items-center">

                                <div className="flex gap-2 items-center">
                                    <div className="">
                                        <h4 className="text-[18px] font-[400]">Weekly</h4>
                                        {/* <div className="text-black text-sm flex  items-center">
                                    <div className="w-[78px]">

                                        <DtPicker value={fromDate} placeholder="From Date" onChange={setFromDate} />

                                    </div>
                                    <div className={` ${fromDate ? "mx-2" : "relative right-1"}`}>-</div>
                                    <div className="w-[78px]">

                                        <div className="">
                                            <DtPicker value={toDate} placeholder="To Date" onChange={setToDate} />
                                        </div>
                                    </div>

                                </div> */}


                                    </div>
                                    <div className="">
                                        <img src={angle} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    }
                </div>
            </div>

        </>
    )
}

export default PageHeader
