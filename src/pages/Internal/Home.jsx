import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { verifyLogin } from '../../utils/auth';
import { TopComponent } from '../../components';
import { getTasks } from '../../utils/task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { logout, verifyLogin } from "../../utils/auth";

const Home = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("Rodrigo")
    const [tasks, setTasks] = useState([])

    const listTasks = async () => {
        const response = await getTasks(firebaseApp);
        setTasks(response)
    }

    useEffect(() => {
        setCurrentPath(window.location.pathname)
        verifyLogin(loggoutRoutes, window.location.pathname, navigate, firebaseApp)
        listTasks()
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
          width: '100%',
          maxWidth: '500px', 
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h3 style={{ fontWeight: 'bold' }}>Cozinheiro M/F</h3>
            <p>1 salário mínimo</p>
            <p>(11) 9943-2342</p>
          </div>
          <button
            type="button"
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
            Visualizar detalhes
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: '20px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h3 style={{ fontWeight: 'bold' }}>Motorista M/F</h3>
            <p>1 salário mínimo</p>
            <p>(11) 9943-2342</p>
          </div>
          <button
            type="button"
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
            Visualizar detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;