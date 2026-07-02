import { useEffect } from "react";
import { conectar } from "../../services/room/RoomService";
import { connection } from "../../services/configs/ConfigSignalIR";
import { IAccountResponse } from "../../models/account/responses/IAccountResponse";

interface RoomPropos {
    account: IAccountResponse,
    onClose: () => void;
}

function Room({ account, onClose }: RoomPropos) {
    useEffect(() => {
        conectar(account).then(() => { });

        connection.on("SendMessage", message => {
            console.log(message);
        });
    }, []);

    return (
        <>
            <div>
                <button className="btn btn-danger" onClick={() => {
                    connection.stop();
                    onClose();
                }}>Sair da Sala</button>
            </div>
            <div>
                Room
            </div>
        </>
    );
}

export default Room;