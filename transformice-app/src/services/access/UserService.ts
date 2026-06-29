import { IAuthenticationRequest } from "../../models/access/requests/IAuthenticationRequest";
import Service from "../Service";
import Axios from "../ConfigAPI";

export function AuthenticateService(request: IAuthenticationRequest) {
    return Service(
        Axios.post('user/login', request)
    );
}