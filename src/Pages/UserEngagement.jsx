//import React from 'react'

import Linechart from "../Charts/Linechart"
import PageHeader from "../Component/PageHeader"



const UserEngagement = () => {
    return (
        <>

            <section className="px-2">
                <PageHeader title="User Acquisition & Engagement" filter="show" weekly="show" />
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <table className="w-full border-separate border-spacing-y-1">
                            <thead>
                                <tr className="*:text-start *:text-nowrap *:text-sm *:font-bold bg-[#FAFAFA] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:border-gray-100 ">
                                    <th>
                                        Membership Plan
                                    </th>
                                    <th>
                                        Total Number of Users
                                    </th>
                                    <th>
                                        Active
                                    </th>
                                    <th>
                                        Inactive = No Activity for a Week
                                    </th>
                                    <th>
                                        Acquisition
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="*:text-start *:text-[13px] *:font-[400] bg-[#FFFFFF] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:text-nowrap *:border-gray-100">
                                    <td>
                                        Base
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        25000
                                    </td>
                                    <td>
                                        18000
                                    </td>
                                </tr>
                                <tr className="*:text-start *:text-[13px] *:font-[400] bg-[#FFFFFF] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:border-gray-100">
                                    <td>
                                        Base
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        25000
                                    </td>
                                    <td>
                                        18000
                                    </td>
                                </tr>

                                <tr className="*:text-start *:text-[13px] *:font-[400] bg-[#FFFFFF] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:border-gray-100">
                                    <td>
                                        Base
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        25000
                                    </td>
                                    <td>
                                        18000
                                    </td>
                                </tr>

                                <tr className="*:text-start *:text-[13px] *:font-[400] bg-[#FFFFFF] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:border-gray-100">
                                    <td>
                                        Base
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        10000
                                    </td>
                                    <td>
                                        25000
                                    </td>
                                    <td>
                                        18000
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                    <div className="col-span-1">
                        <div className="bg-white rounded-[12px] mt-4 border border-[#EFF0F6] p-5 ">
                            <p className="text-[16px] font-[700]">Line Chart</p>
                            <Linechart />
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default UserEngagement