import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./SERVERURL"


// register API
export const addStudentAPI =async (student)=>{
    return await commonAPI("POST",`${SERVER_URL}/addStudent`,student,"")
}

// get All Students
export const getAllStudentsAPI=async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/getAllStudents`,"","")
}