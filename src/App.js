import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Signup from './components/Signup';
import Employee from './components/Employee';
import Hr from './components/Hr';

function App() {

  const router=createBrowserRouter([
    {path:"/",element:<MainLayout/>,
      children:[
        {index:true,element:<Home/>},
        {path:"signup",element:<Signup/>},
        {path:"hr",element:<Hr/>},
        {path:"",element:<Employee/>}
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
