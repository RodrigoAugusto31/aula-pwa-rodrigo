import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { verifyLogin } from '../../utils/auth';
import { TopComponent } from '../../components';
import { getTasks } from '../../utils/task';

const Home = ({ setCurrentPath, loggoutRoutes, firebaseApp }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("Tiago")
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

    return <>
        <TopComponent hasMenu={true} hasImage={true} title={`Olá, ${username}`} subtitle={'Organize suas ideias...'}/>
        {
            tasks.map((task, index) => {
                return <div key={index}>
                    <h1>{task.title}</h1>
                    <Link to={`/task/${task.id}`}>Editar</Link>
                </div>
            })
        }
    </>
}

export default Home;