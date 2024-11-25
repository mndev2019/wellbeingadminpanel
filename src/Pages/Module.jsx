import { useEffect, useState } from "react"
import { getApi, postapi } from "../Api/Api"
import Table from "../Component/TableComp"
import PageHeader from "../Component/PageHeader"
import ModalComponent from "../Component/ModalComponent"
import Loader from "../Component/Loader"
import { toast } from "react-toastify"





function Module() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [name, setname] = useState("")
    const [show, setshow] = useState(false)
    const handleget = async () => {
        setloading(true)
        let res = await getApi(`module`)
        if (res.error == 0) {
            setloading(false)
            setdata(res?.data)
        } else {
            setloading(false)
        }

    }
    useEffect(() => {
        handleget()
    }, [])


    const handlesubmit = async (e) => {
        e.preventDefault()
        setloading(true)
        let requestdata = {
            name
        }
        let res = await postapi(`module`, requestdata)
        if (res.error == 0) {
            setloading(false)
            toast.success(res.message)
            setshow(false)
            setname("")
            handleget()
        } else {
            setloading(false)
        }
    }


    const content = (
        <div>
            <form onSubmit={(e) => handlesubmit(e)}  >

                <div className="mb-3">
                    <label htmlFor="message" className="text-[16px] font-[500]">Name</label>
                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="focus:border-primary block w-full focus:outline-none px-2 py-3 bg-[#FAFAFA] mt-2 resize-none"
                        placeholder="Enter your Module Name..." />
                </div>

                <button type='submit' className="bg-primary text-[#121212] text-[18px] font-[700] px-4 py-2 rounded-md w-full mt-3">Submit</button>
            </form>
        </div>
    );

    const columns = [
        {
            headerName: "Name",
            field: "name"
        }

    ];
    return (
        <>
            {loading && <Loader />}
            <PageHeader title="Modules" btn="Add Content" onClick={() => setshow(true)} />
            <Table data={data} columns={columns} />
            {show && <ModalComponent onCancel={() => setshow(false)} content={content} title={"Add Module"} />}
        </>
    )
}

export default Module
