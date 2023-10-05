import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLogin } from "../../utils/auth";
import { TopComponent } from "../../components";

const Timeline = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])
     
    return <>
        <TopComponent hasMenu={true} hasImage={true} title={`Agosto 2023`} subtitle={'Organize suas ideias!'}/>
    </>
}

export default Timeline;