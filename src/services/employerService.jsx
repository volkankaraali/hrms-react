import axios from 'axios'

let url="http://localhost:8080/api/employers/";

export default class EmployerService{
    getAllEmployers(){
        return axios.get(url+"getall")
    }
}