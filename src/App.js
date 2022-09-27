
import './App.css';
import './assets/styles/common.css'
import HomePage from './pages/homepage';
import LoginSignUp from './pages/loginsignup';
import PaymentPage from './pages/payment';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <LoginSignUp/> */}
      <PaymentPage/>
    </div>
  );
}

export default App;
