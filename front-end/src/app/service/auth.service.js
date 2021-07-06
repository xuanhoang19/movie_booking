import { environment } from "../../environments/environment";
import axios from 'axios';

const url = environment.BaseURL;

export function SignIn(data) {
    return axios.post(`${url}/api/auth/sign-in`, data);
}

export function SignUp(data) {
    return axios.post(`${url}/api/auth/sign-up`, data);
}