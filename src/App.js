import "./App.css";
import LogIn from "./pages/register/LogIn";
import SignUp from "./pages/register/SignUp";
import Home from "./pages/home/Home";

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
