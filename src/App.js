import "./assets/styles/App.css";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <SignUp></SignUp>
      <LogIn></LogIn>
      <Home></Home>
    </div>
  );
}

export default App;
