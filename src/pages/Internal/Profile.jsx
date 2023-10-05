import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _updateProfile, loadUser, verifyLogin } from "../../utils/auth";
import { AvatarComponent, BoxComponent, ButtonComponent, FabComponent, StackComponent, TextFieldComponent, TopMenuComponent } from "../../components";
import profile from '../../assets/profile.jpeg';
import { Button, InputAdornment } from "@mui/material";
import { AccountCircleOutlined, CameraAlt } from "@material-ui/icons";
import Webcam from 'react-webcam';
import { set } from "firebase/database";

const Profile = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();
    const [photoURL, setPhotoURL] = useState(null);
    const [displayName, setDisplayName] = useState(null);
    const [birthday, setBirthday] = useState(null);
    const [role, setRole] = useState(null);
    const [openedCamera, setOpenedCamera] = useState(false);

    const fileRef = useRef(null);
    const webCamRef = useRef(null);


    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp);
        loadUser(firebaseApp, setPhotoURL, setDisplayName, setBirthday, setRole)
    }, [])

    const saveUserProfile = async () => {
        await _updateProfile(firebaseApp, {
            displayName, 
            photoURL, 
            birthday, 
            role
        })
    }

    const openCamera = () => {
        setOpenedCamera(true);
    }

    const capturePhoto = () => {
        const imageSrc = webCamRef.current.getScreenshot();
        setPhotoURL(imageSrc)
        setOpenedCamera(false);
    }

    return <>
            {
                openedCamera ? <BoxComponent sx={{
                    position: 'fixed',
                    width: '100%',
                    height: '100%',
                    zIndex: 9999,
                    backgroundColor: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                                    <Webcam
                                        audio={false}   
                                        ref={webCamRef}
                                        screenshotFormat="image/jpeg"
                                        videoConstraints={{
                                            facingMode: "user"
                                        }}
                                        style={{
                                            width: '300px',
                                            height: '300px',
                                        }}
                                    />
                                    <BoxComponent>
                                        <ButtonComponent
                                            fullWidth={true} 
                                            label="CAPTURAR" onClick={capturePhoto}/>
                                        <ButtonComponent
                                            fullWidth={true}
                                            color="error"
                                            label="FECHAR" onClick={() => setOpenedCamera(false)}/>
                                    </BoxComponent>
                                </BoxComponent>
                 : null
            }
            
            <TopMenuComponent hasMenu={true} hasArrowBack={false} hasImage={true}/>
            <StackComponent justifyContent="center" alignItems="center" style={{
                position: 'relative'
            }}>
                <AvatarComponent 
                    sx={{ width: '250px', height: '250px', mt: 4 }} 
                    src={photoURL ? photoURL : profile} 
                    alt={'Profile'}/>
                <FabComponent
                    sx={{ mt: 4, mb: 2, position: 'absolute', right: 90, bottom: -20 }}
                    color="primary"
                    aria-label="add"
                    onClick={() => openCamera()}
                >
                    <CameraAlt />
                </FabComponent>
            </StackComponent>

            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:1, pl: 4, pr: 4, marginTop: 16 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined style={{
                                    color: "#333"
                                }}/>
                            </InputAdornment>
                            ),
                      }}
                    variant="filled" fullWidth={true} label="Usuário" value={displayName} type="text" onChange={(e) => setDisplayName(e.target.value)}/>
            </BoxComponent>

            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:1, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined style={{
                                    color: "#333"
                                }}/>
                            </InputAdornment>
                            ),
                      }}
                    variant="filled" fullWidth={true} label="Nascimento" value={birthday} type="text" onChange={(e) => setBirthday(e.target.value)}/>
            </BoxComponent>

            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:1, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlined style={{
                                    color: "#333"
                                }}/>
                            </InputAdornment>
                            ),
                    }}
                    variant="filled" fullWidth={true} label="Cargo" value={role} type="text" onChange={(e) => setRole(e.target.value)}/>
            </BoxComponent>

            <input type="file" id="file" style={{display: 'none'}} ref={fileRef}/>

            <BoxComponent
                component="div"
                sx={{ mt: 1, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            > 
                <ButtonComponent
                    fullWidth={true} 
                    label="ATUALIZAR" onClick={saveUserProfile}/>
            </BoxComponent>
           </>;
}

export default Profile;