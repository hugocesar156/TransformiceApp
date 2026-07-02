import { IAccountResponse } from "../../models/account/responses/IAccountResponse";
import Axios from "../configs/ConfigAPI";
import Service from "../Service";

export function GetAccountService() {
    return Service(
        Axios.get<IAccountResponse>('account')
    );
}