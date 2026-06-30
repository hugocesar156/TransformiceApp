import { useEffect, useState } from "react";
import { GetAccountService } from "../../services/account/AccountService";
import { IAccountResponse } from "../../models/account/responses/IAccountResponse";
import Profile from "../../components/account/modal/profile";

function Home() {
    useEffect(() => {
        GetAccount();
    }, []);

    const [account, setAccount] = useState<IAccountResponse | undefined>();
    const [modalProfile, setModalProfile] = useState(false);

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
            </div>
        </>
    );
}

export default Home;