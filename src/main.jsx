import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import { AuthProvider } from "./backend/AuthContext.jsx"; // Certifique-se do caminho correto
import WatsonChat from './components/WatsonChat.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      <WatsonChat />
    </AuthProvider>
  </React.StrictMode>,
)
