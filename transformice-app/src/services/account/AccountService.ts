import { IAccountResponse } from "../../models/account/responses/IAccount";
import Axios from "../configs/ConfigAPI";
import Service from "../Service";

export function GetAccountService() {
    return Service(
        Axios.get<IAccountResponse>('account')
    );
}