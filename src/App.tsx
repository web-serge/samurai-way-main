import React from 'react';
import {Header} from './layout/header/Header';
import {Aside} from './layout/aside/Aside';
import {Container} from './components/Container';

function App() {
  return (
    <>
        <Aside />
        <Header />
        <main>
            <Container>
                Main
            </Container>
        </main>
    </>
  );
}
export default App;