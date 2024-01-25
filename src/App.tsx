import React from 'react';
import {Header} from './layout/header/Header';
import {Aside} from './layout/aside/Aside';
import {Container} from './components/Container';
import {UserCard} from './components/userCard/UserCard';

function App() {
  return (
    <>
        <Aside />
        <Header />
        <main>
            <Container>
                <UserCard />
            </Container>
        </main>
    </>
  );
}
export default App;