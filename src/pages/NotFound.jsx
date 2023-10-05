import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../utils/auth";

const NotFound = ({ setCurrentPath, loggoutRoutes }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate)
    }, [])

    return 'Página não encontrada'
}

export default NotFound 