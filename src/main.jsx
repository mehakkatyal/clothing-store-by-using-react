import { StrictMode } from 'react'
// import * as ReactDOM from 'react-dom';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Createuser from './pages/createuser.jsx';
import SubCategory from './pages/SubCategory.jsx';


function App() {
  return (
    // <h1>Hello world</h1>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='subcategory/:id' element={ <SubCategory/> } />
          <Route path="About" element={<About />} />
          <Route path='createuser' element={< Createuser/>}/>
         

        </Routes>
    </BrowserRouter> 
  ) 
}
// const domNode = document.getElementById('root');
// render(<App/>,domNode)
// this one is the entery point of project
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
