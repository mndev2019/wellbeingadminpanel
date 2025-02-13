import { useState } from 'react'


import { Form, useNavigate } from 'react-router-dom'
import '../assets/Css/Login.css'
import loginpage from '../assets/Image/loginpage.avif'
import axios from 'axios'
import { BaseUrl } from '../BaseUrl'
import { toast, ToastContainer } from 'react-toastify'
import Loader from '../Component/Loader'
import OtpInput from 'react-otp-input';

const Login = () => {
    const [phone, setphone] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setloading] = useState(false)
    const [otp, setOtp] = useState('');
    const [otpshow, setotpshow] = useState(false)
    // Toggle password visibility
    const navigate = useNavigate()
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlelogin = (e) => {
        e.preventDefault()
        setloading(true)
        let requestdata = {
            phone
        }
        axios.post(`${BaseUrl}login`, requestdata).then((res) => {

            if (res.data.error == "0") {
                console.log(res.data.usertype)
                if (res.data.usertype != "Admin") {
                    toast.error("Only Admin Login")
                } else {
                    toast.success(res.data.message)
                    toast.success(res.data.otp)
                    setotpshow(true)

                }
            } else {
                toast.error(res.data.message)
            }

        }).finally(() => {
            setloading(false)
        })
    }

    const handleverify = (e) => {
        e.preventDefault()
        setloading(true)
        let requestdata = {
            phone: phone,
            otp: otp,
        }
        axios.post(`${BaseUrl}verify-otp`, requestdata).then((res) => {

            if (res.data.error == "0") {
                toast.success(res.data.message)

                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userid", res.data.userId)
                localStorage.setItem("usertype", res.data.usertype)

                navigate('/user-management')

            } else {
                toast.error(res.data.message)
            }

        }).finally(() => {
            setloading(false)
        })
    }
    return (
        <>
            {loading && <Loader />}
            <ToastContainer />
            <section className="loginpage h-screen flex items-center justify-center">
                <div className="w-full max-w-3xl  bg-white rounded-[10px] flex items-center justify-center p-5 ">
                    <div className="w-full">
                        <div className="grid grid-cols-2 items-center">
                            <div className="col-span-1">
                                <Form className="space-y-5" onSubmit={(e) => otpshow ? handleverify(e) : handlelogin(e)} >
                                    <div>
                                        <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <div className="mt-1 px-3 flex border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm items-center text-black">
                                            <input
                                                type="text"
                                                id="Phone"
                                                name="Phone"
                                                minLength={10}
                                                maxLength={10}
                                                value={phone}
                                                onChange={(e) => setphone(e.target.value)}
                                                className=" w-full  py-2 outline-none text-black"
                                                placeholder="Enter your Phone"
                                            />
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                    </div>
                                    {otpshow && <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            OTP
                                        </label>
                                        <div className="OtpBox">
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={4}
                                                renderSeparator={<span> </span>}
                                                renderInput={(props) => <input {...props} />}
                                            />
                                        </div>
                                    </div>}
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