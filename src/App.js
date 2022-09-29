
import './App.css';
import './assets/styles/common.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { allRoutes } from './routes/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          {allRoutes.map((route, index) => {
            return <Route key={index} 
            path={route.path} 
            element={route.elements}
            exact={route.exact}/>
          })}
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
