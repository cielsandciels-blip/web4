import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Greeting } from './components/Greeting/Greeting';
import { Concept } from './components/Concept/Concept';
import { Spaces } from './components/Spaces/Spaces';
import { Menu } from './components/Menu/Menu';
import { Reservation } from './components/Reservation/Reservation';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Greeting />
        <Concept />
        <Spaces />
        <Menu />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}

export default App;
