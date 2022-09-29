
import './App.css';
import './assets/styles/common.css'
import HomePage from './pages/homepage';
import LoginSignUp from './pages/loginsignup';
import MapPage from './pages/mappage';
import PaymentPage from './pages/payment';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <LoginSignUp/>
      {/* <PaymentPage/> */}
       {/* <MapPage/> */}
    </div>
  );
}

export default App;
