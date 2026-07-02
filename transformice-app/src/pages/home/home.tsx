import { useEffect, useState } from "react";
import { GetAccountService } from "../../services/account/AccountService";
import { AccountResponse, IAccountResponse } from "../../models/account/responses/IAccountResponse";
import Profile from "../../components/account/modal/profile";
import Room from "../room/room";

function Home() {
    useEffect(() => {
        GetAccount();
    }, []);

    const [account, setAccount] = useState<IAccountResponse>(AccountResponse());
    const [modalProfile, setModalProfile] = useState(false);

    const [room, setRoom] = useState(false);

    function GetAccount() {
        GetAccountService().then((response) => {
            setAccount(response.data);
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

                <div>
                    <a href="#" onClick={() => { setRoom(true) }}>Entrar em Sala</a>
                </div>
                {room && (<Room
                    account={account}
                    onClose={() => setRoom(false)}
                />)}
            </div>
        </>
    );
}

export default Home;
