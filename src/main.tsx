import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add comprehensive error handling for GitHub Pages debugging
console.log('🚀 main.tsx loading...');
console.log('Current URL:', window.location.href);
console.log('User Agent:', navigator.userAgent);

// Global error handler
window.addEventListener('error', (event) => {
  console.error('❌ Global JavaScript Error:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Unhandled Promise Rejection:', event.reason);
});

// Hide loading indicator once React takes over
function hideLoadingIndicator() {
  const loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator) {
    loadingIndicator.style.display = 'none';
  }
  document.body.classList.add('react-loaded');
  console.log('✅ Loading indicator hidden, React app is taking over');
}

try {
  // Handle GitHub Pages SPA routing
  console.log('🔄 Checking for redirect...');
  const redirect = sessionStorage.redirect;
  if (redirect) {
    console.log('📍 Found redirect:', redirect);
    delete sessionStorage.redirect;
    if (redirect !== location.href) {
      // Extract the path from the redirect URL
      const redirectUrl = new URL(redirect);
      const newPath = redirectUrl.pathname + redirectUrl.search + redirectUrl.hash;
      console.log('🔀 Redirecting to:', newPath);
      history.replaceState(null, '', newPath);
    }
  }

  // Check if root element exists
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error('Root element not found in DOM');
  }
  console.log('✅ Root element found');

  // Try to create and render the React app
  console.log('⚛️ Creating React app...');
  const root = createRoot(rootElement);
  
  console.log('🎨 Rendering App component...');
  root.render(<App />);
  
  console.log('✅ React app rendered successfully');
  
  // Hide loading indicator after successful render
  setTimeout(hideLoadingIndicator, 100);

} catch (error) {
  console.error('❌ Critical error in main.tsx:', error);
  
  // Hide loading indicator and show error
  hideLoadingIndicator();
  
  // Fallback: show error message directly in DOM
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
        padding: 20px;
      ">
        <div style="
          background: rgba(255,255,255,0.1);
          padding: 40px;
          border-radius: 15px;
          max-width: 600px;
        ">
          <h1>🔧 Loading Error</h1>
          <p>There was an error loading the React application.</p>
          <details style="margin-top: 20px; text-align: left;">
            <summary style="cursor: pointer; margin-bottom: 10px;">Click for technical details</summary>
            <pre style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 5px; overflow: auto;">
Error: ${error.message}
Stack: ${error.stack || 'No stack trace available'}
URL: ${window.location.href}
Time: ${new Date().toISOString()}
            </pre>
          </details>
          <p style="margin-top: 20px;">
            <a href="/test.html" style="color: white; text-decoration: underline;">
              → Test GitHub Pages Deployment
            </a>
          </p>
        </div>
      </div>
    `;
  }
}
