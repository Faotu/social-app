// import Register from "./Register";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Routes from './Routes';
function App() {
 
  // axios.post("http://localhost:3000/register")
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;
 
  return (

    <UserContextProvider>
      <Routes />
    </UserContextProvider>
     
       
  );
}

export default App;


