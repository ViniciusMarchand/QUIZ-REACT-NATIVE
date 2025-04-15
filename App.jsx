import { useState } from 'react';
import { screens } from './constants';
import Cadastro from './Screens/Cadastro';
import Layout from './components/Layout';
import Quiz from './Screens/Quiz';
import Resultado from './Screens/Resultado';

export default function App() {

  const {  cadastro, quiz, resultado } = screens
  const [user, setUser] = useState();
  const [points, setPoints] = useState(0);

  const [screen, setScreen] = useState(cadastro);

  return (
    <Layout>
      {
        screen === cadastro && 
          <Cadastro 
            setScreen={setScreen} 
            setUser={setUser}
          />
      }
      {
        screen === quiz &&
          <Quiz  setScreen={setScreen} setResults={setPoints} />
      }
      {
        screen === resultado &&
          <Resultado points={points} user={user}/>
      }
    </Layout>
    
  );
}
