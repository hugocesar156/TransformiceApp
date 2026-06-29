import './style.css'
import queijo from '../../../assets/Queijo.webp'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { IAuthenticationRequest } from '../../../models/access/requests/IAuthenticationRequest'
import { AuthenticateController } from '../../../controllers/access/UserController'
import { PATHS } from "../../../routes/paths";

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState<IAuthenticationRequest>({});
    const [loading, setLoad] = useState(false);

    function Authenticate() {
        setLoad(true);

        AuthenticateController(user).then((res) => {
            localStorage.setItem("token", res.TokenAccess);
            navigate(PATHS.HOME);
        }).catch((e) => {
            setLoad(false);
            alert(e.data.message);
        });
    }

    return (
        <>
            <div className='container'>
                <div className='container-content'>
                    <form>
                        <h4 className='title'>Transformice!</h4>
                        <div className='container-img'>
                            <img src={queijo} width={157} height={108} />
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <input type='text' className='form-control input-login' placeholder='Usuário'
                                    onChange={(e) => {
                                        user.AccountName = e.target.value;
                                        setUser(user);
                                    }} />
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col'>
                                <input type='password' className='form-control input-login' placeholder='Senha'
                                    onChange={(e) => {
                                        user.Password = e.target.value;
                                        setUser(user);
                                    }} />
                            </div>
                        </div>
                        <div className='row mt-3'>
                            <button className='btn btn-success' type='button' disabled={loading} onClick={Authenticate}>
                                {!loading ? 'Entrar' : <div className="spinner-grow spinner-grow-sm" role="status"></div>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;