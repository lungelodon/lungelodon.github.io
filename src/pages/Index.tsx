import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  console.log('📄 Index component rendering...');
  
  try {
    return (
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('❌ Error in Index component:', error);
    
    // Fallback: show a simple version
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Lungelo Don Sigudla</h1>
          <p className="text-xl mb-4">Data Analytics Portfolio</p>
          <p className="mb-4">Portfolio is loading...</p>
          <div className="text-sm text-blue-200">
            <p>Error in component loading. Check console for details.</p>
            <p><a href="/test.html" className="underline">Test Deployment</a></p>
          </div>
        </div>
      </div>
    );
  }
};

export default Index;
