
import './App.css';
import './assets/styles/common.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { allRoutes } from './routes/routes';
import ChatComponent from './component/chatcomponent';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
         <Routes>
          {allRoutes.map((route, index) => {
            return <Route key={index} 
            path={route.path} 
            element={route.elements}
            exact={route.exact}/>
          })}
         </Routes>
         <ChatComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
