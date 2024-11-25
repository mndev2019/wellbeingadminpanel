/* eslint-disable react/prop-types */

const ModalComponent = ({ content, title, onCancel }) => {
    return (
        <>

            <div className="relative z-[21]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 bg-gray transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-end justify-center p-4 mt-2 text-center sm:items-center sm:p-0 relative">


                        <div className="relative transform overflow-hidden rounded-[20px] bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className=" py-3 px-[40px] flex justify-between pt-[35px]">
                                <h3 className=" text-[25px] mb-0  font-[500] leading-6 text-[#121212]" id="modal-title">{title}</h3>

                                <div className="closebtn size-8 rounded-full  text-center text-sm leading-[2.3rem] bg-primary text-white ">
                                    <button className="" onClick={onCancel}><i className="fa-solid fa-xmark" ></i></button>
                                </div>
                            </div>
                            <div className="bg-white p-4 pb-[35px] px-[40px]">
                                {content}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalComponent;