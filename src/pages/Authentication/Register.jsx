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

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function cadastrarNoApp(){
        await register(firebaseApp, {email, password}, navigate)
    }

    return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh', // Centraliza verticalmente na tela inteira
            fontFamily: 'Roboto, sans-serif', // Define a fonte para todos os elementos
          }}
        >
            <h2 style={{ fontFamily: 'Roboto, sans-serif' }}>Cadastrando novo usuário</h2> {/* Texto no topo com a fonte Roboto */}
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: '300px', // Largura máxima do conteúdo
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ marginBottom: '10px' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <label htmlFor="senha" style={{ fontWeight: 'bold' }}>Senha:</label>
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ marginBottom: '15px' }}
              />
            </div>
            <button
              type="button"
              onClick={cadastrarNoApp}
              style={{
                width: '60%', // Define a largura do botão igual à dos campos de entrada
                marginTop: '10px',
                backgroundColor: '#A020F0', // Cor roxa
                color: '#fff',
                border: 'none',
                borderRadius: '25px', // Borda arredondada
                padding: '10px',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif', // Define a fonte para todos os elementos
              }}
            >
              Cadastrar
            </button>
            <button
              type="button"
              onClick={() => navigate('/login')} // Redireciona para a página de login
              style={{
                width: '40%', // Define a largura do botão igual à dos campos de entrada
                marginTop: '10px',
                backgroundColor: '#A020F0', // Cor roxa
                color: '#fff',
                border: 'none',
                borderRadius: '25px', // Borda arredondada
                padding: '10px',
                cursor: 'pointer',
                fontFamily: 'Roboto, sans-serif', // Define a fonte para todos os elementos
              }}
            >
              Entrar
            </button>
          </form>
        </div>
      );
    }

export default Register;