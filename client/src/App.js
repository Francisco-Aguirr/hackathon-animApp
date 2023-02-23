import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import AddAnimals from './components/AddAnimals';
import FooterBar from './components/FooterBar';
import Search from './components/Search';
import Carrousel from './components/Carrousel';
import HomePage from './components/HomePage';
import HeaderBar from './components/headerBar'
import SingleAnimal from './components/SingleAnimal';
import Contact from './components/Contact';
import '../src/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/contact.css'




function App() {
  const router = createBrowserRouter([

    {
      path:"/",
      element:<><HeaderBar /> <AddAnimals/>  </>
    },
    {
      path:"/about",
      element:<>    </>
    },
    {
      path:"/",
      element:<>   </>
    },
  ])

  return (
    <div className="App">
      
      <Carrousel></Carrousel>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
