import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, verifyLogin } from "../../utils/auth";
import { ButtonComponent, TopComponent } from "../../components";

const Settings = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])

    return <>
        <TopComponent hasMenu={true} hasImage={true} title={`Configurações`} subtitle={'Configurações do app...'}/>
        <ButtonComponent label="Sair" onClick={() => logout(firebaseApp, navigate)}/>
    </>
}

export default Settings;