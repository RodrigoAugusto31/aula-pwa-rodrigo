import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { sendPasswordReset, verifyLogin } from "../../utils/auth";


const RecoveryPassword = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])

    const [email, setEmail] = useState("tiago");

    async function recuperarSenha(){
        await sendPasswordReset(firebaseApp, email, navigate)
    }

    return <>
           
    </>
}

export default RecoveryPassword;