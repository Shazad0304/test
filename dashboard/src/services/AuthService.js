import axios from "axios";

const baseUrl = "http://srv431226.hstgr.cloud:3001";

export const registerUser = async (email, password, name) => {
    await axios.post(`${baseUrl}/user`, {email, password, name});
}

export const loginUser = async (email, password) => {
    try {
        const loginUser = await axios.post(`${baseUrl}/login`, {email, password});
        const token = loginUser.data?.token;
        axios.interceptors.request.use(function (config) {
            config.headers.Authorization =  "Bearer " + token;
            return config;
        });
        return loginUser;
    }
    catch (e) {
        console.log('Invalid Credentials', e);
        throw e;
    }

}

export const logoutUser = async () => {
    await axios.get(`${baseUrl}/logout`);
}