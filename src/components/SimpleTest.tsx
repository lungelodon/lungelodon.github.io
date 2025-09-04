// Simple test component to verify React is working
const SimpleTest = () => {
  console.log('🧪 SimpleTest component loaded');
  
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'center'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '15px',
        maxWidth: '600px'
      }}>
        <h1>🚀 React is Working!</h1>
        <h2>Lungelo Don Sigudla</h2>
        <p>Data Analytics Portfolio</p>
        <div style={{ marginTop: '30px' }}>
          <p><strong>✅ React components are loading</strong></p>
          <p><strong>✅ JavaScript is executing</strong></p>
          <p><strong>✅ Styles are applying</strong></p>
        </div>
        <div style={{ marginTop: '30px', fontSize: '14px', opacity: 0.8 }}>
          <p>Build Time: {new Date().toLocaleString()}</p>
          <p>URL: {window.location.href}</p>
        </div>
        <div style={{ marginTop: '20px' }}>
          <a 
            href="/test.html" 
            style={{ color: 'white', textDecoration: 'underline', marginRight: '20px' }}
          >
            Static Test
          </a>
          <a 
            href="/debug.html" 
            style={{ color: 'white', textDecoration: 'underline' }}
          >
            Debug Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest;