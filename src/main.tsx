import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Handle GitHub Pages SPA routing
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  // Extract the path from the redirect URL
  const redirectUrl = new URL(redirect);
  history.replaceState(null, '', redirectUrl.pathname + redirectUrl.search + redirectUrl.hash);
}

createRoot(document.getElementById("root")!).render(<App />);
