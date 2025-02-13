//import React from 'react'

import { useEffect, useState } from "react"
import PageHeader from "../Component/PageHeader"

import { getApi } from "../Api/Api"
import Table from "../Component/TableComp"

import { useNavigate } from "react-router-dom"

const UserManagement = () => {
  const [show, setshow] = useState(false)
  const [data, setdata] = useState([])
  const handleget = async () => {
    let res = await getApi(`users`)
    setdata(res.data)
  }

  const navigate = useNavigate()


  const handlenavigate = () => {
    navigate('/adduser')
  }





  useEffect(() => {
    handleget()
  }, [])



  const columns = [
    {
      headerName: "Member Name",
      field: "name"
    },
    {
      headerName: "Email Address",
      field: "email"
    },
    {
      headerName: "Age Group",
      field: "age_gender"
    },
    {
      headerName: "Member Type",
      field: "membertype"
    },
    {
      headerName: "Membership Plan",
      field: "activemembership.name"
    },
    {
      headerName: "Company Name",
      field: "companyDetails[0].companyname"
    },
    {
      headerName: "Start Date",
      field: "membership_start_date",

    },
    {
      headerName: "Expiry Date",
      field: "membership_end_date"
    },
    {
      headerName: "Amount (₹)",
      field: "activemembership.price"
    },
    {
      headerName: "Sign Up Fee (₹)",
      field: "activemembership.price"
    },
    {
      headerName: "Stripe Payment Type",
      field: "payment"
    },
    {
      headerName: "Membership Status",
      field: "membership"
    },
  ];







  return (
    <>
      <section className="px-2">
        <PageHeader title="User Management" filter="show" weekly="show" onClick={() => handlenavigate()} btn={"Add User"} />
        <div className="grid grid-cols-1">
          <div className="col-span-1 mt-3">
            <div className="overflow-auto table-responsive">
              <Table data={data} columns={columns} rolesclick={`addpermission`} editclick={`adduser`} rolesview={true} />
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default UserManagement