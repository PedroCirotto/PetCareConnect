import { useContext } from "react";
import {AuthContext, AuthProvider} from "../../../backend/AuthContext.jsx"; 

const Dashboard = () => {
   const { logout } = useContext(AuthContext);

   return (
       <div>
           <h1>Bem-vindo ao Dashboard</h1>
           <button onClick={logout}>Sair</button>
       </div>
   );
};

export default Dashboard;
