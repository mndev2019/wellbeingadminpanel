import React, { useState } from 'react'
import { IoIosMail } from 'react-icons/io'
import { MdRemoveRedEye, MdVisibilityOff } from 'react-icons/md'
import { Form } from 'react-router-dom'
import '../assets/Css/Login.css'
import loginpage from '../assets/Image/loginpage.avif'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
      // Toggle password visibility
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <section className="loginpage h-screen flex items-center justify-center">
                <div className="w-full max-w-3xl  bg-white rounded-[10px] flex items-center justify-center p-5 ">
                    <div className="w-full">
                        <div className="grid grid-cols-2 items-center">
                            <div className="col-span-1">
                                <Form className="space-y-5" >
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1 px-3 flex border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm items-center text-black">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"

                                                className=" w-full  py-2 outline-none text-black"
                                                placeholder="Enter your email"
                                            />
                                            <IoIosMail className="text-black text-lg" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="mt-1 px-3 flex border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm items-center">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="password"
                                                name="password"
                                                className="w-full py-2 outline-none"
                                                placeholder="Enter your password"
                                            />
                                            <button type="button" onClick={togglePasswordVisibility} className="text-black text-lg">
                                                {showPassword ? <MdVisibilityOff /> : <MdRemoveRedEye />}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <button
                                            type="submit"
                                            className="w-full bg-black text-[#FEBD59] py-2 px-4 rounded-md hover:bg-black "
                                        >
                                            SUBMIT
                                        </button>
                                    </div>
                                </Form>
                            </div>
                            <div className="col-span-1">
                                <div className="w-full">
                                    <img src={loginpage} alt='image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login