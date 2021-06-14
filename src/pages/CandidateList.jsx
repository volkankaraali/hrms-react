
import React, { useState, useEffect } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'


import '../css/CandidateList.css'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])
    
    useEffect(() => {
        let candidateService = new CandidateService()

        candidateService.getAllCandidates().then(result => setCandidates(result.data.data))
    }, [])

    let tableRowNo=0;


    return (
        <div className="container">
                <span><h4 className="font-mono text-left"><Icon size="large" name="list alternate"/>İş Arayanlar</h4></span>
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800 text-white">
                        <tr >
                            <th className="py-3 text-center">#</th>
                            <th className="py-3 text-center tracking-wider ">Ad</th>
                            <th className="py-3 text-center tracking-wider ">Soyad</th>
                            <th className="py-3 text-center tracking-wider ">Email</th>
                            <th className="py-3 text-center tracking-wider ">Doğum Tarihi</th>
                            <th className="py-3 text-center tracking-wider "></th>
                        </tr>
                    </thead>
                    <tbody className="">

                        {
                            candidates.map((candidate,tableRowNo) => (

                            <tr className="trCandidate font-bold">
                                <td className="py-3 text-center text-center">{tableRowNo+1}</td>
                                <td className="py-3 text-center text-center">{candidate.firstName}</td>
                                <td className="py-3 text-center text-center">{candidate.lastName}</td>
                                <td className="py-3 text-center text-center">{candidate.email} </td>
                                <td className="py-3 text-center  text-center"> {candidate.birthDate}</td>
                                <td className="py-3 text-center hover:text-white "> <button className="p-2 border-solid rounded-full bg-yellow-500 font-bold"><Icon name="search"/> Detay</button> </td>
                            </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
    )
}


/*
<h3>İş Arayanlar</h3>
            <Table color="red" key="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>E-posta</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map((candidate)=> (
                    <Table.Row>
                        <Table.Cell>{candidate.firstName}</Table.Cell>
                        <Table.Cell>{candidate.lastName}</Table.Cell>
                        <Table.Cell>{candidate.email}</Table.Cell>
                        <Table.Cell>{candidate.birthDate}</Table.Cell>
                    </Table.Row>

                        ))
                    }

                </Table.Body>
            </Table>
*/