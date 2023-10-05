import { ButtonComponent, TextFieldComponent, BoxComponent, AuthTopComponent, StackComponent } from "../../components"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { login, resendEmail, verifyLogin } from "../../utils/auth";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";

const Login = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();
    const [showResendEmail, setShowResendEmail] = useState(false);

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])

    const [email, setEmail] = useState("tiago");
    const [password, setPassword] = useState("");

    async function entrarNoApp(){
        await login(firebaseApp, {email, password}, navigate, setShowResendEmail)
    }


    async function _resendEmail(){
        await resendEmail(firebaseApp, {email, password}, setShowResendEmail);
    }

    return <>
            <AuthTopComponent title_page={'Bem-vindo'} subtitle_page={'Efetue login para entrar...'}/>
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
                sx={{ mt: 3, mb:1, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <TextFieldComponent 
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined style={{
                                color: "#333"
                            }}/>
                          </InputAdornment>
                        ),
                      }}
                    variant="filled" fullWidth={true} label="Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}/>
            </BoxComponent> 
            <BoxComponent
                component="div"
                sx={{ mt: 0, mb:0, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            >
                <StackComponent sx={{mt: 0, mb: 0}} alignItems={'end'}>
                    <Link style={{
                        color: '#333',
                        textDecoration: 'none',
                        fontWeight: '200 !important',
                        fontSize: 16
                    }} to="/recovery-password">Esqueceu a senha?</Link>
                </StackComponent>
            </BoxComponent>
            <BoxComponent
                component="div"
                sx={{ mt: 1, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            > 
                <ButtonComponent
                    startIcon={<LoginIcon sx={{color: '#fff'}}/>}
                    fullWidth={true} 
                    label="Entrar" onClick={entrarNoApp}/>
            </BoxComponent>
            { showResendEmail ?
                <BoxComponent
                    component="div"
                    sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                    noValidate={true}
                    autoComplete={"off"}
                > 
                    <ButtonComponent
                        startIcon={<LoginIcon sx={{color: '#fff'}}/>}
                        fullWidth={true} 
                        label="Reenviar e-mail" onClick={_resendEmail}/>
                </BoxComponent> 
            : null} 
            
            <StackComponent sx={{mt: 4, mb: 4}} alignItems={'center'}>
                <Link style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontWeight: '200 !important',
                    fontSize: 16
                }} to="/register">Cadastrar-me</Link>
            </StackComponent>
    </>
}

export default Login;