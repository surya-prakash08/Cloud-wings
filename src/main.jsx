import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-oparkl37s33ds7lb.us.auth0.com'; // Replace with your Auth0 domain
const clientId = 'HIANT3Akq7GHfEYrZfmb17g5duc3DcTY'; // Replace with your Auth0 client ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     <Auth0Provider
          domain={domain}
          clientId={clientId}
          // authorizationParams={{
          //   redirect_uri: window.location.origin,
          authorizationParams={{
            redirect_uri: "http://localhost:5173/home",
          }}
        >
    <App />
    </Auth0Provider>
   
  </StrictMode>,
)
