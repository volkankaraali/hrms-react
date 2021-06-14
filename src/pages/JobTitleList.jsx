import React, { useEffect, useState } from 'react'
import { Icon } from 'semantic-ui-react'
import JobTitleService from '../services/jobTitleService'

export default function JobTitleList() {

    const [jobtitles, setJobtitles] = useState([])
    useEffect(() => {
        let jobTitleService=new JobTitleService()

        jobTitleService.getAllJobTitles().then(result=>setJobtitles(result.data.data))
        
    }, [])
    return (
        <div className="container">
                <h4 className="font-mono text-left underline">İş Pozisyonları</h4>
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800 text-white">
                        <tr >
                            <th className="py-3 text-center">#</th>
                            <th className="py-3 text-center tracking-wider ">İş Pozisyonu Adı</th>
                            <th className="py-3 text-center tracking-wider "></th>
                        </tr>
                    </thead>
                    <tbody className="">

                        {
                            jobtitles.map((jobtitle,tableRowNo) => (

                            <tr className="trCandidate font-bold">
                                <td className="py-3 text-center text-center">{tableRowNo+1}</td>
                                <td className="py-3 text-center text-center">{jobtitle.title}</td>
                                <td className="py-3 text-center hover:text-white "><button className="p-2 border-solid rounded-full bg-yellow-500 font-bold"><Icon name="search"/> Detay</button> </td>
                            </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
    )
}
