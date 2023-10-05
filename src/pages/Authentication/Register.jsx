import { ButtonComponent, TextFieldComponent, BoxComponent, AuthTopComponent, StackComponent } from "../../components"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { register, verifyLogin } from "../../utils/auth";
import LoginIcon from '@mui/icons-material/Login';
import { InputAdornment } from "@mui/material";
import { AccountCircleOutlined, LockOutlined } from "@material-ui/icons";

const Register = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])

    const [email, setEmail] = useState("tiago");
    const [password, setPassword] = useState("");

    async function cadastrarNoApp(){
        await register(firebaseApp, {email, password}, navigate)
    }

    return <>
            <AuthTopComponent title_page={'Cadastro'} subtitle_page={'Cadastre-se no app...'}/>
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
                sx={{ mt: 3, mb:3, pl: 4, pr: 4 }}
                noValidate={true}
                autoComplete={"off"}
            > 
                <ButtonComponent
                    startIcon={<LoginIcon sx={{color: '#fff'}}/>}
                    fullWidth={true} 
                    label="Cadastrar" onClick={cadastrarNoApp}/>
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

export default Register;