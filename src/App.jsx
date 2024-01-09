import { useContext, useEffect } from 'react';
import './App.scss';
import { Container, Loading, SideBar } from './components';
import Header from './components/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Tasks, Imporntant, Complete } from './pages';
import { AppContext } from './context';

function App() {

  return (
    <Container>
      <section className="sidebar">
        <SideBar />
      </section>
      <main>
        <Header />
        <div className="todo-main">
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/Tasks" element={<Tasks />} />
            <Route path="/important" element={<Imporntant />} />
            <Route path="/complete" element={<Complete />} />
            <Route path="*" element={<>
              No Page
            </>} />
          </Routes>
        </div>
      </main>
    </Container>
  );
}

export default App;
