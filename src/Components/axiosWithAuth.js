import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL : "https://buildweek-backend-familyrecipe.herokuapp.com",
        headers : {
            Authorization : token
        }
    });
};