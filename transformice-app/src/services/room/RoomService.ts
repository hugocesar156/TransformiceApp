import { IAccountResponse } from "../../models/account/responses/IAccountResponse";
import { connection } from "../configs/ConfigSignalIR";

export async function conectar(account: IAccountResponse) {
    if (connection.state === "Disconnected"){
        await connection.start();
        await connection.invoke("Enter", "1", JSON.stringify(account));
    }    
}