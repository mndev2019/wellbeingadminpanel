import React from 'react'
import PageHeader from '../Component/PageHeader'
import Linechart from '../Charts/Linechart'

const UserProgress = () => {
  return (
    <>
      <section className='px-2'>
        <PageHeader title="User Progress" filter="show" weekly="show" />
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 bg-white rounded-md p-5">
            <h2 className='text-black text-[16px] font-[700]'>Sleep</h2>
            <Linechart />
          </div>
          <div className="col-span-1 bg-white rounded-md p-5">
            <h2 className='text-black text-[16px] font-[700]'>Mood</h2>
            <Linechart />
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProgress