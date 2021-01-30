import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseUrl : "https://buildweek-backend-familyrecipe.herokuapp.com/api/",
        headers : {
            Authorization : token
        }
    });
};