import { ButtonComponent, TextFieldComponent, BoxComponent, AuthTopComponent, StackComponent } from "../../components"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { register, sendPasswordReset, verifyLogin } from "../../utils/auth";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";

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
            <AuthTopComponent title_page={'Esqueci minha senha'} subtitle_page={'Insira seu e-mail para recuperar a senha...'}/>
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
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
                    variant="filled" fullWidth={true} label="Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)}/>
            </BoxComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            > 
                <ButtonComponent
                    startIcon={<LoginIcon sx={{color: '#fff'}}/>}
                    fullWidth={true} 
                    label="Recuperar senha" onClick={recuperarSenha}/>
            </BoxComponent> 
            <StackComponent sx={{mt: 4, mb: 4}} alignItems={'center'}>
                <Link style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontWeight: '200 !important',
                    fontSize: 16
                }} to="/login">Entrar-me</Link>
            </StackComponent>
    </>
}

export default RecoveryPassword;