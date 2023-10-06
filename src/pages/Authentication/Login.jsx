import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { login, resendEmail, verifyLogin } from "../../utils/auth";
import MeuIcone from '../../imagens/logo.png';

const Login = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();
    const [showResendEmail, setShowResendEmail] = useState(false);

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function entrarNoApp(){
        await login(firebaseApp, {email, password}, navigate, setShowResendEmail)
    }


    async function _resendEmail(){
        await resendEmail(firebaseApp, {email, password}, setShowResendEmail);
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
            <img src={MeuIcone} alt="logo" style={{ width: '64px', height: '64px', marginBottom: '20px' }} /> {/* Ícone no topo */}
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
            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Login:</label>
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
              onClick={entrarNoApp}
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
              Entrar
            </button>
            <button
                type="button"
                onClick={() => navigate('/register')} // Redireciona para a página de registro
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
          </form>
        </div>
      );
}

export default Login;