import { useEffect } from "react";
import { connection } from "../../services/configs/ConfigSignalIR";
import { IAccount } from "../../models/account/responses/IAccount";
import { joinRoom, leaveRoom } from "../../services/room/RoomService";
import Platform from "../../components/room/platform";

interface RoomPropos {
    account: IAccount,
    onClose: () => void;
}

function Room({ account, onClose }: RoomPropos) {
    useEffect(() => {
        joinRoom(account.name);
        connection.on("ReceiveMessage", message => {
            console.log(message);
        });
    }, []);

    return (
        <>
            <div>
                <button className="btn btn-danger" onClick={() => {
                    leaveRoom(account.name);
                    onClose();
                }}>Sair da Sala</button>
            </div>
            <div>
                <Platform />
            </div>
        </>
    );
}

export default Room;