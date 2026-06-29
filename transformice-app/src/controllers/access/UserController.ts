import { IAuthenticationRequest } from "../../models/access/requests/IAuthenticationRequest";
import { IAuthenticationResponse } from "../../models/access/responses/IAuthenticationResponse";
import { AuthenticateService } from "../../services/access/UserService";
import { Controller } from "../Controller";

export function AuthenticateController(request: IAuthenticationRequest) {
    return Controller<IAuthenticationResponse>(
        AuthenticateService(request)
    );
}