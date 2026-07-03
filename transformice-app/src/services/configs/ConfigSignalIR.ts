import * as signalR from "@microsoft/signalr";

export const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7265/hub/room", {
        accessTokenFactory: () => {
            return localStorage.getItem("token") ?? "";
        }
    }).withAutomaticReconnect().build();

export async function connnectClient() {
    if (connection.state === "Disconnected")
         await connection.start();  
}