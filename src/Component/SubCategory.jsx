//import React from 'react'
import subcategory from '../assets/Image/subcategory.png'
import dot from '../assets/Image/dot.png'
const SubCategory = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-4 gap-3">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14].map(() => (
                        <>
                            <div className="col-span-1">
                                <div className="w-full bg-white rounded-[8px] flex justify-between items-center px-5 py-3">
                                    <div className="flex   gap-3 items-center">
                                        <div className="icon bg-[#FFEACA] h-[70px] w-[70px] flex items-center justify-center rounded-full">
                                            <img src={subcategory} alt="image" />
                                        </div>
                                        <div className="text">
                                            <p className='text-[#292929] font-[700] text-[18px]'>
                                                Brisk Walking
                                            </p>
                                            <p className='text-[#7A7A7A] tex-[14px] font-[400]'>
                                                Aerobic
                                            </p>
                                        </div>
                                    </div>
                                    <div className="doticon">
                                        <img src={dot} alt='image' />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </>
    )
}

export default SubCategory