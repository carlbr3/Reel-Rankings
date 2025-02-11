import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Nav';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App