import axios from 'axios'

let url="http://localhost:8080/api/jobtitles/";

export default class JobTitleService{
    getAllJobTitles(){
        return axios.get(url+"getall")
    }
}