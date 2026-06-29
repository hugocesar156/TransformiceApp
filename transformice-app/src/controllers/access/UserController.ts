import { IAuthenticationRequest } from "../../models/access/requests/IAuthenticationRequest";
import { AuthenticateService } from "../../services/access/UserService";
import { Controller } from "../Controller";

export function AuthenticateController(request: IAuthenticationRequest) {
    return Controller(
        AuthenticateService(request)
    );
}