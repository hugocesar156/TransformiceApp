import { useEffect, useState } from "react";
import { AccountResponse, IAccount } from "../../models/account/responses/IAccount";
import Profile from "../../components/account/modal/profile";
import Room from "../room/room";
import { connnectClient } from "../../services/configs/ConfigSignalIR";
import { GetAccountController } from "../../controllers/account/AccountController";

function Home() {
    useEffect(() => {
        GetAccount();
        connnectClient();
    }, []);

    const [account, setAccount] = useState<IAccount>(AccountResponse());
    const [modalProfile, setModalProfile] = useState(false);

    const [room, setRoom] = useState(false);

    function GetAccount() {
        GetAccountController().then((response) => {
            setAccount(response);
        }).catch(() => {

        })
    }

    return (
        <>
            <div className="container">
                <div>
                    <a href="#" onClick={() => { setModalProfile(true) }}>Perfil</a>
                </div>
                <Profile
                    show={modalProfile}
                    account={account}
                    onClose={() => setModalProfile(false)}
                />

                {!room ? (<a href="#" onClick={() => { setRoom(true) }}>Entrar em Sala</a>)
                    :
                    (<Room
                        account={account}
                        onClose={() => setRoom(false)}
                    />)}

            </div>
        </>
    );
}

export default Home;
