import PageHeader from "../Component/PageHeader"


function AddUser() {





    // gender
    // usertype
    // parentUser
    // dept
    // content_category
    // followersCount
    // followingCount
    // postCount
    // companyDetails
    return (
        <>
            <section>
                <PageHeader filter={false} title="Add User" />
                <div className="container mt-4">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-4">
                            <label htmlFor="">Name</label>
                            <input type="text" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none" />
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="">Email</label>
                            <input type="email" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none" />
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="">Phone</label>
                            <input type="text" minLength={10} maxLength={10} className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none" />
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="">Age</label>
                            <input type="text" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none" />
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="">Image</label>
                            <input type="file" className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none" />
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="">Gender</label>
                            <select
                                name="gender"
                                className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 text-[#B8B8B8]"
                            >
                                <option value="" disabled selected>Select</option>
                                <option value="Male" className="text-black">Male</option>
                                <option value="Female" className="text-black">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddUser
