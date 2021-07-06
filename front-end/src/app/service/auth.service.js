import { environment } from "../../environments/environment";
import axios from 'axios';

const url = environment.BaseURL;

export function SignIn(data) {
    return axios.post(`${url}/sign-in`, JSON.stringify(data));
}

export function SignUp(data) {
    return axios.post(`${url}/sign-up`, JSON.stringify(data));
}