import React, { useEffect, useState } from 'react'
import JobAdvertService from '../services/jobAdvertService'

import '../css/CandidateList.css'
import { Icon } from 'semantic-ui-react'

export default function JobAdvertList() {


    const [jobadverts, setJobadverts] = useState([])
    useEffect(() => {
        
        let jobAdvertService= new JobAdvertService()

        jobAdvertService.getAllActiveJobAdverts().then(result=>setJobadverts(result.data.data))
        
    }, [])

    let tableRowNo=0;
    return (
        <div className="container">
                <h4 className="font-mono text-left"> <Icon name="announcement"/>İş İlanları</h4>
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800 text-white">
                        <tr >
                            <th className="py-3 text-center">#</th>
                            <th className="py-3 text-center tracking-wider ">Şirket Adı</th>
                            <th className="py-3 text-center tracking-wider ">İş Pozisyonu</th>
                            <th className="py-3 text-center tracking-wider ">Açık İş Posizyonu </th>
                            <th className="py-3 text-center tracking-wider ">Tarih</th>
                            <th className="py-3 text-center tracking-wider ">Son Başvuru</th>
                            <th className="py-3 text-center tracking-wider "></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            jobadverts.map((jobadverts,tableRowNo) => (

                            <tr className="trJobAdvert font-bold">
                                <td className="py-3 text-center text-center">{tableRowNo+1}</td>
                                <td className="py-3 text-center text-center">{jobadverts.employerName}</td>
                                <td className="py-3 text-center text-center">{jobadverts.jobTitle}</td>
                                <td className="py-3 text-center text-center">{jobadverts.openJobNumber} </td>
                                <td className="py-3 text-center  text-center"> {jobadverts.createdDate}</td>
                                <td className="py-3 text-center  text-center"> {jobadverts.applicationDeadline}</td>
                                <td className="py-3 text-center hover:text-white "><button className="p-2 border-solid rounded-full bg-yellow-500 font-bold"><Icon name="search"/> Detay</button> </td>
                            </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
    )
}

/*

*/