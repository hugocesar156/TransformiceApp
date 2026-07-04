import { Modal } from "react-bootstrap";
import { IAccount } from "../../../models/account/responses/IAccount";
import { useState } from "react";

interface ProfileProps {
    show: boolean;
    account: IAccount | undefined
    onClose: () => void;
}

function Profile({ show, account, onClose }: ProfileProps) {
    const [gender, setGender] = useState(account?.gender);

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <div>
                        <Modal.Title>{account?.name}</Modal.Title>
                    </div>
                    <div>
                        <input type="radio" value="Nenhum" id="radio-nenhum" checked={gender == "Nenhum"}
                            onChange={(e) => { setGender(e.target.value) }}></input>
                        <label htmlFor="radio-nenhum">Nenhum</label>

                        <input type="radio" value="Feminino" id="radio-feminino" checked={gender == "Feminino"}
                            onChange={(e) => { setGender(e.target.value) }}></input>
                        <label htmlFor="radio-feminino">Feminino</label>

                        <input type="radio" value="Masculino" id="radio-masculino" checked={gender == "Masculino"}
                            onChange={(e) => { setGender(e.target.value) }}></input>
                        <label htmlFor="radio-masculino">Masculino</label>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <div>
                            <label>Sexo: <span>{account?.gender}</span></label>
                        </div>
                        <div>
                            <label>Data de inscrição: <span>{account?.inscriptionDate.toString()}</span></label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Nível: <span>{account?.level}</span></label>
                        </div>
                        <div>
                            <label>Título atual: <span>{account?.actualTitle}</span></label>
                        </div>
                    </div>
                    <div>
                        <h6>Shaman</h6>
                        <div>
                            <label>Ratos salvos: <span>{account?.normalModeSaves}</span> / <span>{account?.hardModeSaves}</span> / <span>{account?.divineModeSaves}</span></label>
                        </div>
                        <div>
                            <label>Queijos coletados como Shaman: <span>{account?.cheeseShaman}</span></label>
                        </div>
                    </div>
                    <div>
                        <h6>Rato</h6>
                        <div>
                            <label>Queijos coletados em primeiro: <span>{account?.firstCheese}</span></label>
                        </div>
                        <div>
                            <label>Queijos coletados: <span>{account?.cheese}</span></label>
                        </div>
                        <div>
                            <label>Bootcamp: <span>{account?.bootcamp}</span></label>
                        </div>
                    </div>
                    <div>
                        <h6>Títulos desbloqueados</h6>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Profile;