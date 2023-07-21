import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import { Home } from './Components/Home/Home';
import { Layout } from './Components/Layout/Layout';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';
import { AProps } from './Components/AProps/AProps';
import { Projects } from './Components/Projects/Projects';
import { CountryG } from './Components/CountryG/CountryG';
import { NotFound } from './Components/NotFound/NotFound';

//way to handel error  errorElement: <NotFound/>,
const routers = createBrowserRouter([
  {path: '',
  element: <Layout/>,
  children: [
    {index: true, element: <Home/>},
    {path: "about", element: <About/>},
    {path: "aProps", element: <AProps/>},
    {path: "projects", element: <Projects/>,
    children: [
      {path: "countyGuid", element: <CountryG/>}
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
  ]}
])

//arrow function??? Not Work
export default function App () {


  return <RouterProvider router={routers}>



  </RouterProvider>
}