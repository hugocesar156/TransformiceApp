import { connection } from "../configs/ConfigSignalIR";

export async function joinRoom(accountName: string) {
    await connection.invoke("JoinRoom", "1", accountName);
}

export async function leaveRoom(accountName: string) {
    await connection.invoke("LeaveRoom", "1", accountName);
}