import React, { useEffect, useState } from 'react'
import EmployerService from '../services/employerService'

import '../css/EmployerList.css'
import { Icon } from 'semantic-ui-react'


export default function EmployerList() {
    
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService =new EmployerService()
        
        employerService.getAllEmployers().then(result => setEmployers(result.data.data))

    }, [])

    let tableRowNo=0;

    return (
        <div className="container mb-2">
                <h4 className="font-mono text-left "><Icon size="large" name="building" /> İş Verenler</h4>
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800 text-white" >
                        <tr >
                            <th className=" py-3 text-center ">#</th>
                            <th className=" py-3 text-center tracking-wider ">Şirket Adı</th>
                            <th className=" py-3 text-center tracking-wider ">Web Adresi</th>
                            <th className=" py-3 text-center tracking-wider ">Email</th>
                            <th className=" py-3 text-center tracking-wider ">Telefon No</th>
                            <th className=" py-3 text-center tracking-wider "></th>
                        </tr>
                    </thead>
                    <tbody className="">

                        {
                    
                            employers.map((employer,tableRowNo) => (

                            <tr className="trEmployer font-bold">
                                <td className=" py-3 text-center">{tableRowNo+1}</td>
                                <td className=" py-3  text-center">{employer.companyName}</td>
                                <td className=" py-3 text-center">{employer.webAddress}</td>
                                <td className=" py-3 text-center">{employer.email} </td>
                                <td className=" py-3  text-center"> {employer.phoneNumber}</td>
                                <td className=" py-3 hover:text-white"><button className="p-2 border-solid rounded-full bg-yellow-500 font-bold"><Icon name="search"/> Detay</button> </td>
                            </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
    )
}