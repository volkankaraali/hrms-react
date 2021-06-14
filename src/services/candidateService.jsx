import axios from 'axios'

let url="http://localhost:8080/api/candidates/";

export default class CandidateService{
    getAllCandidates(){
        return axios.get(url+"getall")
    }
}