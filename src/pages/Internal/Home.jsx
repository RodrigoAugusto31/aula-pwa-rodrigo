import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { logout, verifyLogin } from "../../utils/auth";

const Home = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
    }, [])

   return (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start', // Alinhar no topo
      minHeight: '100vh',
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: '#F5F5F5',
    }}
  >
    <div
      style={{
        backgroundColor: '#A020F0',
        height: '50px',
        width: '100%', // Barra roxa ocupando toda a largura
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinhar à esquerda
        margin: '0px', // Margem de 25px nas laterais horizontalmente
        paddingLeft: '10px', // Espaçamento à esquerda para o botão "Back"
      }}
    >
      <button
        type="button"
        onClick={() => logout(firebaseApp, navigate)} // Redireciona para a página de registro
        style={{
          backgroundColor: '#A020F0',
          color: '#fff',
          border: 'none',
          borderRadius: '25px',
          padding: '10px',
          cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: '5px', color: 'black' }} />
      </button>
      <h2 style={{ fontWeight: 'bold', color: '#fff', marginLeft: '10px' }}>Vagas disponíveis</h2>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        maxWidth: '500px',
        marginBottom: '20px',
        marginTop: '20px',
        backgroundColor: '#BA55D3', // Cor de fundo roxo escuro
        padding: '0px', // Espaçamento interno
        borderRadius: '15px', // Borda arredondada
      }}
    >
      <h3 style={{ fontWeight: 'bold', color: '#fff' }}>Cozinheiro (M/F)</h3>
      <p style={{ color: '#fff', margin: '5px 0' }}>1 salário mínimo</p>
      <p style={{ color: '#fff', margin: '5px 0' }}>(11) 9943-2342</p>
      <button
        type="button"
        style={{
          backgroundColor: '#4B0082',
          color: '#fff',
          border: 'none',
          borderRadius: '0px',
          width: '100%',
          padding: '10px',
          cursor: 'pointer',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        Visualizar detalhes
      </button>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        maxWidth: '500px',
        marginBottom: '20px',
        backgroundColor: '#BA55D3', // Cor de fundo roxo escuro
        padding: '0px', // Espaçamento interno
        borderRadius: '15px', // Borda arredondada
      }}
    >
      <h3 style={{ fontWeight: 'bold', color: '#fff' }}>Pedreiro (M)</h3>
      <p style={{ color: '#fff', margin: '5px 0' }}>1 salário mínimo</p>
      <p style={{ color: '#fff', margin: '5px 0' }}>(15) 9983-3052</p>
      <button
       type="button"
       style={{
         backgroundColor: '#4B0082',
         color: '#fff',
         border: 'none',
         borderRadius: '0px',
         width: '100%',
         padding: '10px',
         cursor: 'pointer',
         fontFamily: 'Roboto, sans-serif',
        }}
      >
        Visualizar detalhes
      </button>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        maxWidth: '500px',
        marginBottom: '20px',
        backgroundColor: '#BA55D3', // Cor de fundo roxo escuro
        padding: '0px', // Espaçamento interno
        borderRadius: '15px', // Borda arredondada
      }}
    >
      <h3 style={{ fontWeight: 'bold', color: '#fff' }}>Recepcionista (M/F)</h3>
      <p style={{ color: '#fff', margin: '5px 0' }}>1 salário mínimo</p>
      <p style={{ color: '#fff', margin: '5px 0' }}>(14) 9813-0340</p>
      <button
       type="button"
       style={{
         backgroundColor: '#4B0082',
         color: '#fff',
         border: 'none',
         borderRadius: '0px',
         width: '100%',
         padding: '10px',
         cursor: 'pointer',
         fontFamily: 'Roboto, sans-serif',
        }}
      >
        Visualizar detalhes
      </button>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        maxWidth: '500px',
        marginBottom: '20px',
        backgroundColor: '#BA55D3', // Cor de fundo roxo escuro
        padding: '0px', // Espaçamento interno
        borderRadius: '15px', // Borda arredondada
      }}
    >
      <h3 style={{ fontWeight: 'bold', color: '#fff' }}>Motorista (M/F)</h3>
      <p style={{ color: '#fff', margin: '5px 0' }}>1 salário mínimo</p>
      <p style={{ color: '#fff', margin: '5px 0' }}>(19) 9953-7382</p>
      <button
       type="button"
       style={{
         backgroundColor: '#4B0082',
         color: '#fff',
         border: 'none',
         borderRadius: '0px',
         width: '100%',
         padding: '10px',
         cursor: 'pointer',
         fontFamily: 'Roboto, sans-serif',
        }}
      >
        Visualizar detalhes
      </button>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        maxWidth: '500px',
        marginBottom: '20px',
        backgroundColor: '#BA55D3', // Cor de fundo roxo escuro
        padding: '0px', // Espaçamento interno
        borderRadius: '15px', // Borda arredondada
      }}
    >
      <h3 style={{ fontWeight: 'bold', color: '#fff' }}>Diarista (F)</h3>
      <p style={{ color: '#fff', margin: '5px 0' }}>1 salário mínimo</p>
      <p style={{ color: '#fff', margin: '5px 0' }}>(19) 9977-8302</p>
      <button
       type="button"
       style={{
         backgroundColor: '#4B0082',
         color: '#fff',
         border: 'none',
         borderRadius: '0px',
         width: '100%',
         padding: '10px',
         cursor: 'pointer',
         fontFamily: 'Roboto, sans-serif',
        }}
      >
        Visualizar detalhes
      </button>
    </div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '85%',
        maxWidth: '500px',
        marginBottom: '20px',
        backgroundColor: '#BA55D3', // Cor de fundo roxo escuro
        padding: '0px', // Espaçamento interno
        borderRadius: '15px', // Borda arredondada
      }}
    >
      <h3 style={{ fontWeight: 'bold', color: '#fff' }}>Vendedor (M/F)</h3>
      <p style={{ color: '#fff', margin: '5px 0' }}>1 salário mínimo</p>
      <p style={{ color: '#fff', margin: '5px 0' }}>(19) 9753-7002</p>
      <button
       type="button"
       style={{
         backgroundColor: '#4B0082',
         color: '#fff',
         border: 'none',
         borderRadius: '0px',
         width: '100%',
         padding: '10px',
         cursor: 'pointer',
         fontFamily: 'Roboto, sans-serif',
        }}
      >
        Visualizar detalhes
      </button>
    </div>
  </div>
);
}

export default Home;