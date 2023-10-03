import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';

const mainMenuNav = [
  'Главная', 'О нас', 'Контакты'
]

const App = () => {
  
  return(
    <div className="conteiner"> 
      <Header navData={mainMenuNav} />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
