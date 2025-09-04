import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import SimpleTest from "./components/SimpleTest";
import { ErrorBoundary } from "react-error-boundary";

// Enhanced error boundary for debugging
function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  console.error('❌ React Error Boundary caught error:', error);
  
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '40px',
        borderRadius: '15px',
        maxWidth: '600px'
      }}>
        <h1>⚠️ Application Error</h1>
        <p>Something went wrong with the React application.</p>
        <details style={{ marginTop: '20px', textAlign: 'left' }}>
          <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>Click for error details</summary>
          <pre style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '15px',
            borderRadius: '5px',
            overflow: 'auto',
            fontSize: '12px'
          }}>
            {error.message}
            {'\n\n'}
            {error.stack}
          </pre>
        </details>
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={resetErrorBoundary}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            Try Again
          </button>
          <a
            href="/test.html"
            style={{ color: 'white', textDecoration: 'underline', marginRight: '10px' }}
          >
            Test Deployment
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
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        console.error(`❌ Query failed (attempt ${failureCount + 1}):`, error);
        return failureCount < 3;
      },
    },
  },
});

const App = () => {
  console.log('⚛️ App component rendering...');
  
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.error('❌ Error Boundary triggered:', { error, errorInfo });
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/simple-test" element={<SimpleTest />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
