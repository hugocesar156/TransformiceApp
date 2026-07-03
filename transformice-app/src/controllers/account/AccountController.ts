import { IAccountResponse } from "../../models/account/responses/IAccount";
import { GetAccountService } from "../../services/account/AccountService";
import { Controller } from "../Controller";

export function GetAccountController() {
    return Controller<IAccountResponse>(
        GetAccountService()
    );
}