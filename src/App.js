import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Signup from './components/Signup';
import Employee from './components/Employee/Employee';
import Hr from './components/Hr/Hr';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  const router=createBrowserRouter([
    {path:"/",element:<MainLayout/>,
      children:[
        {index:true,element:<Home/>},
        {path:"signup",element:<Signup/>},
        {path:"hr",element:(
          <ProtectedRoute role="hr">
          <Hr/>
          </ProtectedRoute>
        )},
        {path:"employee",element:(
          <ProtectedRoute role="employee">
          <Employee/>
          </ProtectedRoute>
        )
        }
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
