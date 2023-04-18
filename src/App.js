import { useEffect, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import Main from './components/main/Main';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem(`tasks`)) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem(`tasks`, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <HashRouter>
      <Layout>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </Layout>
    </HashRouter>
  );
}

export default App;
