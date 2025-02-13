import { useEffect, useState } from "react";
import { getApi, masterputapi, postapi } from "../Api/Api";
import PageHeader from "../Component/PageHeader";
import Loader from "../Component/Loader";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

function AddUser() {
    const { state } = useLocation()

    const [usertypedata, setUsertypeData] = useState([]);
    const [name, setName] = useState("");
    const [loading, setloading] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [companyname, setcompanyname] = useState("");
    const [companyaddress, setcompanyaddress] = useState("");
    const [companybranch, setcompanybranch] = useState("");
    const [registrationnum, setregistrationnum] = useState("");




    const [gender, setGender] = useState("");
    const [usertype, setUsertype] = useState("");
    const navigate = useNavigate()
    let token = localStorage.getItem("token")
    const [image, setImage] = useState(null);

    const userid = localStorage.getItem("userid");

    const handleUsertype = async () => {
        try {
            const res = await getApi(`usertype`);
            if (res && res.data) {
                setUsertypeData(res.data);
            }
        } catch (error) {
            console.error("Error fetching user types:", error);
        }
    };

    useEffect(() => {
        handleUsertype();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("age", age);
        formData.append("gender", gender);
        formData.append("usertype", usertype);
        formData.append("parentUser", userid);
        if (image) {
            formData.append("image", image);
        }
        if (usertype == "HR") {
            formData.append("companyDetails[companyname]", companyname)
            formData.append("companyDetails[branch]", companybranch)
            formData.append("companyDetails[address]", companyaddress)
            formData.append("companyDetails[registeration_no]", registrationnum)
            formData.append("companyDetails[created_by]", userid)

        }

        try {
            let res = ""
            if (state) {
                res = await masterputapi(`users/${state._id}`, formData, token);
            } else {
                res = await postapi(`user-register`, formData);
            }
            if (res.error == "0") {
                toast.success("User added successfully!");
                setloading(false)
                navigate('/user-management')
            } else {
                toast.error("Failed to add user.");
                setloading(false)
            }
        } catch (error) {
            console.error("Error adding user:", error);
            setloading(false)
        }
    };


    const handleedit = () => {
        setName(state.name)

        setUsertype(state.usertype?._id ?? state.usertype)
        setEmail(state.email)
        setAge(state.age)
        setGender(state.gender)
        setPhone(state.phone)
        setcompanyname(state.companyDetails[0]?.companyname)
        setcompanyaddress(state.companyDetails[0]?.address)
        setregistrationnum(state.companyDetails[0]?.registeration_no)
        setcompanybranch(state.companyDetails[0]?.branch)



    }

    useEffect(() => {
        if (state) {
            handleedit()
        }
    }, [state])

    return (
        <>
            {loading && <Loader />}
            <section>
                <PageHeader filter={false} title={state ? " Edit User" : "Add User"} />
                <div className="container mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-4">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="usertype">Usertype</label>
                                <select
                                    id="usertype"
                                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                                    value={usertype}
                                    onChange={(e) => setUsertype(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select User type
                                    </option>
                                    {usertypedata.map((item) => (
                                        <option key={item._id} value={item.title} className="text-black">
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                                    minLength={10}
                                    maxLength={10}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="number"
                                    id="age"
                                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="file"
                                    id="image"
                                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="gender">Gender</label>
                                <select
                                    id="gender"
                                    className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>
                                        Select Gender
                                    </option>
                                    <option value="Male" className="text-black">
                                        Male
                                    </option>
                                    <option value="Female" className="text-black">
                                        Female
                                    </option>
                                </select>
                            </div>
                            {usertype == "HR" && <div className="col-span-12">
                                <div className="grid grid-cols-12  gap-3">
                                    <div className="col-span-12">
                                        <h2 className="text-2xl mt-4 fw-bold">Company Detail</h2>
                                    </div>
                                    <div className="col-span-4 mt-4">
                                        <label htmlFor="companyName">Company Name</label>
                                        <input type="text" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2" value={companyname} onChange={(e) => setcompanyname(e.target.value)} />
                                    </div>
                                    <div className="col-span-4 mt-4">
                                        <label htmlFor="companyName">Company Address</label>
                                        <input type="text" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2" value={companyaddress} onChange={(e) => setcompanyaddress(e.target.value)} />
                                    </div>
                                    <div className="col-span-4 mt-4">
                                        <label htmlFor="companyName">Registration Number</label>
                                        <input type="text" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2" value={registrationnum} onChange={(e) => setregistrationnum(e.target.value)} />
                                    </div>
                                    <div className="col-span-4 mt-4">
                                        <label htmlFor="companyName">Branch</label>
                                        <input type="text" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2" value={companybranch} onChange={(e) => setcompanybranch(e.target.value)} />
                                    </div>
                                </div>
                            </div>}
                            <div className="col-span-12">
                                <button className="btn bg-primary text-white px-8 py-2 rounded-md" type="submit">
                                    {state ? " Update" : "Submit"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default AddUser;
