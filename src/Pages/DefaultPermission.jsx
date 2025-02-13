import { useEffect, useState } from "react"
import { getApi, postapi } from "../Api/Api"
import Table from "../Component/TableComp"
import PageHeader from "../Component/PageHeader"

import Loader from "../Component/Loader"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"





function DefaultPermission() {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [name, setname] = useState("")
    const [show, setshow] = useState(false)
    const handleget = async () => {
        setloading(true)
        let res = await getApi(`default-permission`)
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



    const navigate = useNavigate()

    const handlenavigate = () => {
        navigate('/addpermission')
    }


    const columns = [
        {
            headerName: "Name",
            field: "name"
        }

    ];



    return (
        <>
            {loading && <Loader />}
            <PageHeader title="Default Permission" btn="Add Default Permission" onClick={() => handlenavigate()} />
            <Table data={data} columns={columns} editclick={'addpermission'} />
        </>
    )
}

export default DefaultPermission
