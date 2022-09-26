import axiosDefault from "axios";

const axiosUpd = axiosDefault.create({});

axiosUpd.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        const errorCode = error.response.status;
        return Promise.reject(error);
    }
);
export const axios = axiosUpd;
export default axios;