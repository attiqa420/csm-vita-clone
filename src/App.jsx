import {  Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Basic from './pages/Basic';
import Standard from './pages/Standard';
import Premium from './pages/Premium';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import AppLayout from './Layout/AppLayout';
import Login from './pages/Login';
import ISP from './pages/complaince/ISP';


function App() {
  return (
   <div  className="w-full overflow-x-hidden bg-cover bg-center min-h-screen">
 
    <Routes>
      <Route element={<AppLayout />}>
   <Route path="/" element={<Home />} />  
   <Route path="/complaince/information" element={<ISP />} /> 
   <Route path="/pricing/basic" element={<Basic />} />
   <Route path="/pricing/standard" element={<Standard />} />
  <Route path="/pricing/premium" element = {<Premium />} />
  <Route path="/about/contact" element = {<About />} />
  </Route>

    <Route path="/login" element = {<Login />} />
    <Route path="*" element={<ErrorPage />} />
    </Routes>
    
    </div>
   
  );
}

export default App;
