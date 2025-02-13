


/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import moment from "moment";


const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => {
        if (acc === undefined || acc === null) return "N/A";
        if (part.includes('[') && part?.includes(']')) {
            // Handle array indexing
            const [key, index] = part.split(/[\[\]]/).filter(Boolean);
            return acc[key]?.[parseInt(index)] !== undefined && acc[key]?.[parseInt(index)] !== null
                ? acc[key][parseInt(index)]
                : "N/A";
        }
        return acc[part] !== undefined && acc[part] !== null ? acc[part] : "N/A";
    }, obj);
};

const Table = ({ columns, data, editclick, rolesclick, rolesview }) => {
    const navigate = useNavigate()

    const handleeditclick = (rowdata) => {
        navigate(`/${editclick}`, { state: rowdata })
    }
    const handlerolesclick = (rowdata) => {
        navigate(`/${rolesclick}/${rowdata._id}`, { state: rowdata })
    }
    return (
        <div className="overflow-auto table-responsive">
            <table className="w-full border-separate border-spacing-y-1 min-w-full table-auto">
                <thead>
                    <tr className="*:text-start *:text-nowrap *:text-sm *:font-bold bg-[#FAFAFA] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:border-gray-100">
                        {columns.map((col, index) => (
                            <th key={index}>
                                {col.headerName}
                            </th>
                        ))}
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, index) => (
                        <tr key={index} className="*:text-start *:text-[13px] *:font-[400] bg-[#FFFFFF] *:px-[1rem] *:py-[1rem] *:tracking-[0.5px] *:border-r *:text-nowrap *:border-gray-100">
                            {columns.map((col, cellIndex) => (

                                < td key={cellIndex} >


                                    {/* {

                                        col.field === "age_gender"
                                            ? `${row.gender === "Male" ? "M" : row.gender === "Female" ? "W" : "N/A"}${row.age || "N/A"} `
                                            : getNestedValue(row, col.field)
                                    } */}
                                    {
                                        col.field === "age_gender"
                                            ? `${row.gender === "Male" ? "M" : row.gender === "Female" ? "W" : "N/A"}${row.age || "N/A"} `
                                            : col.field === "membership_end_date"
                                                ? moment(row[col.field]).isBefore(moment())
                                                    ? "Expired"
                                                    : moment(row[col.field]).format("MMMM DD YYYY")
                                                : col.field.includes("date") // For other date fields
                                                    ? moment(getNestedValue(row, col.field)).isValid()
                                                        ? moment(getNestedValue(row, col.field)).format("MMMM DD YYYY")
                                                        : "N/A"
                                                    : getNestedValue(row, col.field) // Dynamic getter for other fields
                                    }
                                </td>
                            ))}
                            <td>
                                <div className="flex gap-3 item-center">
                                    <button className="edit mt-[2px]" onClick={() => handleeditclick(row)}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM13.7 6.35C13.92 6.14 13.92 5.79 13.7 5.58L12.42 4.3C12.3705 4.24765 12.3108 4.20594 12.2446 4.17744C12.1784 4.14895 12.1071 4.13425 12.035 4.13425C11.9629 4.13425 11.8916 4.14895 11.8254 4.17744C11.7592 4.20594 11.6995 4.24765 11.65 4.3L10.65 5.3L12.7 7.35L13.7 6.35ZM4 11.94V14H6.06L12.12 7.94L10.06 5.88L4 11.94Z" fill="#007EF2" />
                                        </svg>
                                    </button>
                                    <button className="delete">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.95455 3.33333H11.0455C11.0455 2.7808 10.83 2.2509 10.4464 1.86019C10.0628 1.46949 9.54249 1.25 9 1.25C8.45751 1.25 7.93724 1.46949 7.55365 1.86019C7.17005 2.2509 6.95455 2.7808 6.95455 3.33333ZM5.72727 3.33333C5.72727 2.44928 6.07208 1.60143 6.68583 0.976311C7.29959 0.35119 8.13202 0 9 0C9.86798 0 10.7004 0.35119 11.3142 0.976311C11.9279 1.60143 12.2727 2.44928 12.2727 3.33333H17.3864C17.5491 3.33333 17.7052 3.39918 17.8203 3.51639C17.9354 3.6336 18 3.79257 18 3.95833C18 4.12409 17.9354 4.28306 17.8203 4.40028C17.7052 4.51749 17.5491 4.58333 17.3864 4.58333H16.3145L15.3188 16.7525C15.2464 17.6378 14.8499 18.463 14.2081 19.0645C13.5663 19.666 12.726 19.9999 11.8538 20H6.14618C5.27399 19.9999 4.43368 19.666 3.79187 19.0645C3.15006 18.463 2.75362 17.6378 2.68118 16.7525L1.68545 4.58333H0.613636C0.45089 4.58333 0.294809 4.51749 0.17973 4.40028C0.0646507 4.28306 0 4.12409 0 3.95833C0 3.79257 0.0646507 3.6336 0.17973 3.51639C0.294809 3.39918 0.45089 3.33333 0.613636 3.33333H5.72727ZM7.77273 8.125C7.77273 7.95924 7.70808 7.80027 7.593 7.68306C7.47792 7.56585 7.32184 7.5 7.15909 7.5C6.99634 7.5 6.84026 7.56585 6.72518 7.68306C6.61011 7.80027 6.54545 7.95924 6.54545 8.125V15.2083C6.54545 15.3741 6.61011 15.5331 6.72518 15.6503C6.84026 15.7675 6.99634 15.8333 7.15909 15.8333C7.32184 15.8333 7.47792 15.7675 7.593 15.6503C7.70808 15.5331 7.77273 15.3741 7.77273 15.2083V8.125ZM10.8409 7.5C10.6782 7.5 10.5221 7.56585 10.407 7.68306C10.2919 7.80027 10.2273 7.95924 10.2273 8.125V15.2083C10.2273 15.3741 10.2919 15.5331 10.407 15.6503C10.5221 15.7675 10.6782 15.8333 10.8409 15.8333C11.0037 15.8333 11.1597 15.7675 11.2748 15.6503C11.3899 15.5331 11.4545 15.3741 11.4545 15.2083V8.125C11.4545 7.95924 11.3899 7.80027 11.2748 7.68306C11.1597 7.56585 11.0037 7.5 10.8409 7.5Z" fill="#FF3C5F" />
                                        </svg>
                                    </button>
                                    {rolesview && <button onClick={() => handlerolesclick(row)}>
                                        <i className="fa-solid fa-eye text-primary"></i>
                                    </button>}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default Table;
