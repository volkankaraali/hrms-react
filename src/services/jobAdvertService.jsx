import axios from 'axios'

let url="http://localhost:8080/api/jobadverts/";

export default class JobAdvertService{
    getAllActiveJobAdverts(){
        return axios.get(url+"getActiveJobAdvert")
    }
}