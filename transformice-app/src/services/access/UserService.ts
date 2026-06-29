import { IAuthenticationRequest } from "../../models/access/requests/IAuthenticationRequest";
import Service from "../Service";
import Axios from "../ConfigAPI";
import { IAuthenticationResponse } from "../../models/access/responses/IAuthenticationResponse";

export function AuthenticateService(request: IAuthenticationRequest) {
    return Service(
        Axios.post<IAuthenticationResponse>('user/login', request)
    );
}