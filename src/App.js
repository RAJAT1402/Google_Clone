import react, { useState } from 'react';
import Navbar from './components/Navbar';
import MyRoutes from './components/MyRoutes';
import Footer from './components/Footer';


function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <MyRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
