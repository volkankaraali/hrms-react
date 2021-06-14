import React from 'react'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobAdvertList from '../pages/JobAdvertList'
import JobTitleList from '../pages/JobTitleList'

import Navibar from './Navibar'
import Sidebar from './Sidebar'




export default function Dashboard() {
    return (
        
        <div className="grid md:grid-cols-5 mt-5 sm:grid grid-cols-1">
                <div className="col-span-1">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-span-4 ml-2">
                    <CandidateList></CandidateList>
                    <EmployerList></EmployerList>
                    <JobAdvertList></JobAdvertList>
                    <JobTitleList></JobTitleList>
                </div>
        </div>
    )
}

/*
<Grid>
                <Grid.Row>
                    <Navibar></Navibar>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                       <Slidebar></Slidebar> 
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <CandidateList></CandidateList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


*/
